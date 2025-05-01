import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import JSZip from 'jszip';
import { XMLParser } from 'fast-xml-parser';
import { saveAs } from 'file-saver';
import { ReactiveFormsModule } from '@angular/forms';

enum RequisitionType {
    Externe = 'Externe',
    Interne = 'Interne',
    Scholaire = 'Scholaire',
    Services = 'Services',
    Unknown = 'Inconnue'
}

@Component({
    selector: 'app-requisition',
    styleUrls: ['./Requisition.scss'],
    templateUrl: './Requisition.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class Requisition implements OnInit {
    requisitionType: RequisitionType = RequisitionType.Unknown;
    form: FormGroup;
    zipFile?: JSZip;
    originalDocXml: string = '';
    originalFileName: string = 'requisition.docx';
    originalFieldValues: { [key: string]: string } = {};

    constructor(private router: Router, private fb: FormBuilder) {
        this.form = this.fb.group({
            nomClient: [''],
            courriel: [''],
            dateDemande: [''],
            confidentiel: [false], // New checkbox
        });
    }

    ngOnInit(): void {
        const url = this.router.url;
        if (url.includes('/requisition-externe')) {
            this.requisitionType = RequisitionType.Externe;
        } else if (url.includes('/requisition-interne')) {
            this.requisitionType = RequisitionType.Interne;
        } else if (url.includes('/requisition-scholaire')) {
            this.requisitionType = RequisitionType.Scholaire;
        } else if (url.includes('/requisition-services')) {
            this.requisitionType = RequisitionType.Services;
        } else {
            this.requisitionType = RequisitionType.Unknown;
        }
    }

    async onFileSelected(event: Event): Promise<void> {
        const input = event.target as HTMLInputElement;
        if (!input.files?.length) return;

        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = async (e: any) => {
            const arrayBuffer = e.target.result;
            const zip = await JSZip.loadAsync(arrayBuffer);
            this.zipFile = zip;

            const docXml = await zip.file("word/document.xml")?.async("text");
            if (!docXml) {
                console.error('❌ document.xml not found.');
                return;
            }

            this.originalDocXml = docXml;

            const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
            const parsed = parser.parse(docXml);
            const paragraphs = parsed['w:document']?.['w:body']?.['w:p'];

            if (!Array.isArray(paragraphs)) return;

            const labels = [
                { label: 'Nom du client', field: 'nomClient' },
                { label: 'Courriel du contact', field: 'courriel' },
                { label: 'Date de la demande', field: 'dateDemande' },
                { label: 'Confidentiel', field: 'confidentiel' }, // New checkbox
            ];

            for (const p of paragraphs) {
                const runs = Array.isArray(p['w:r']) ? p['w:r'] : [p['w:r']];
                const combinedText = runs.map((r: any) => r?.['w:t']).filter(Boolean).join(' ').trim();

                for (const label of labels) {
                    const regex = new RegExp(`^${label.label}`, 'i');
                    if (regex.test(combinedText)) {
                        const value = combinedText.replace(label.label, '').trim();

                        if (label.field === 'confidentiel') {
                            const isConfidential = /Oui\s*\[\s*[xX]\s*\]/.test(value);
                            this.originalFieldValues[label.field] = isConfidential ? 'true' : 'false';
                            this.form.patchValue({ [label.field]: isConfidential });
                        } else {
                            this.originalFieldValues[label.field] = value;
                            this.form.patchValue({ [label.field]: value });
                        }
                    }
                }
            }
        };

        reader.readAsArrayBuffer(file);
    }

    async exportModifiedDoc(): Promise<void> {
        if (!this.zipFile || !this.originalDocXml) {
            console.error('❌ Missing original Word document data.');
            return;
        }

        let newXml = this.originalDocXml;

        for (const field of Object.keys(this.originalFieldValues)) {
            const oldValue = this.originalFieldValues[field];
            const newValue = this.form.get(field)?.value;

            if (field === 'confidentiel') {
                const old = oldValue === 'true';
                const current = newValue === true;

                if (current !== old) {
                    const oldPattern = old
                        ? /Confidentiel\s+Oui\s*\[\s*[xX]\s*\]\s*Non\s*\[\s*\]/i
                        : /Confidentiel\s+Oui\s*\[\s*\]\s*Non\s*\[\s*[xX]\s*\]/i;

                    const newText = current
                        ? 'Confidentiel Oui[X] Non[ ]'
                        : 'Confidentiel Oui[ ] Non[X]';

                    newXml = newXml.replace(oldPattern, newText);
                }
                continue;
            }

            if (newValue !== oldValue && oldValue !== undefined) {
                const escapedOld = this.escapeXml(oldValue);
                const escapedNew = this.escapeXml(newValue);

                const regex = new RegExp(this.escapeRegex(escapedOld), 'g');
                newXml = newXml.replace(regex, escapedNew);
            }
        }

        this.zipFile.file("word/document.xml", newXml);
        const blob = await this.zipFile.generateAsync({ type: "blob" });
        saveAs(blob, `updated-${this.originalFileName}`);
    }

    private escapeXml(str: string): string {
        return str.replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&apos;");
    }

    private escapeRegex(str: string): string {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
}
