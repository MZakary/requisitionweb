import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requisition-json',
  styleUrls: ['./RequisitionJSON.scss'],
  templateUrl: './RequisitionJSON.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RequisitionJSON {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],       // String input
      age: [0, [Validators.required, Validators.min(0)]],  // Number input
      agreeToTerms: [false],                 // Checkbox
      status: ['pending']                    // Dropdown
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        this.form.patchValue(data);
      } catch (err) {
        alert('Invalid JSON file.');
      }
    };

    reader.readAsText(file);
  }

  downloadJson() {
    const blob = new Blob([JSON.stringify(this.form.value, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'requisition.json';
    a.click();

    URL.revokeObjectURL(url);
  }
}
