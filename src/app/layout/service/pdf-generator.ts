import jsPDF from 'jspdf';

// Define a field structure
interface FieldDefinition {
  label: string;
  key: string;
  needsMoreSpace?: boolean;
}

// Define a table structure
interface TableConfig {
  headers: string[];
  rowsKey: string;
  isLivraisonTable?: boolean; // Optional, used for specific table types
  rowFields: string[];
}

// Requisition configuration per type
const requisitionConfigs: Record<string, {
  fields: FieldDefinition[];
  table?: TableConfig | null;
  fieldsAfterTable: FieldDefinition[];
  noClient?: string | null;
  adresse?: string | null;
}> = {
  externe: {
    fields: [
      { label: 'Numéro de réquisition', key: 'noRequisitionExterne' },
      { label: 'Numéro de commande', key: 'noCommandeExterne' },
      { label: 'Nom du client', key: 'nomClientExterne' },
      { label: 'Numéro du client (si connu)', key: 'noClientExterne' },
      { label: 'Nom du contact', key: 'nomContactExterne' },
      { label: 'Courriel du contact', key: 'courrielContactExterne' },
      { label: 'Numéro de téléphone', key: 'noTelephoneExterne' },
      { label: 'Adresse de facturation postale et courriel', key: 'adresseFacturationExterne' },
      // { label: 'Nom du projet', key: 'nomProjetExterne' },
      { key: 'descriptionProjetFacturation', label: 'Description du projet' },


    ],
    table: {
      headers: ['Description', 'Quantité', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['description', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable: [
      { key: 'facturationCommentaire', label: 'Commentaire' },
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation', needsMoreSpace: true },
    ]
  },
  banq: {
    fields: [
      { key: 'noBonCommandeBANQ', label: 'Numéro bon de commande' },
      { key: 'noContratBANQ', label: 'Contrat no' },
      { key: 'titreProjetBANQ', label: "Titre" }, //merge titre and soustitre
      { key: 'soustitreProjetBANQ', label: 'Sous-titre' },
    ],
    table: {
      headers: ['Type de braille', 'Nbr page/vol.', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['typeDeBraille', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable: [
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation', needsMoreSpace: true },
    ],
    noClient: '3000032',
    adresse: 'acquisitions.gb@banq.qc.ca\nBANQ - BIBLIOTHÈQUE ET ARCHIVES NATIONALES DU QUÉBEC\n475 BOUL. DE MAISONNEUVE EST\nMONTRÉAL (QUÉBEC) H2L 5C4',

  },
  hydro: {
    fields: [
      { key: 'noRequisitionHydro', label: 'Numéro de réquisition' },
      { key: 'noDemandeHydro', label: 'Numéro de commande' },
      { key: 'nomClientHydro', label: 'Nom du client' },
      { key: 'noClientHydro', label: 'Numéro du client (si connu)' },
      { key: 'nomContactHydro', label: 'Nom du contact' },
      { key: 'courrielContactHydro', label: 'Courriel du contact' },
      { key: 'noTelephoneHydro', label: 'Numéro de téléphone' },
      { key: 'adresseFacturationHydro', label: 'Adresse de facturation postale et courriel' },
      { key: 'descriptionProjetFacturation', label: 'Description du projet' },
    ],
    table: {
      headers: ['Description', 'Quantité', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['description', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable: [
      { key: 'facturationCommentaire', label: 'Commentaire' },
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation', needsMoreSpace: true },
    ]

  },
  interne: {
    fields: [
      { key: 'noRequisitionInterne', label: 'Numéro de réquisition' },
      { key: 'nomDirectionInterne', label: 'Nom de la direction' },
      { key: 'nomProgramServiceInterne', label: 'Nom du programme ou du service' },
      { key: 'nomDemandeurInterne', label: 'Nom du demandeur' },
      { key: 'nomProjetInterne', label: 'Nom du projet' },
    ],
    table: {
      headers: ['Phases', 'Type de production', 'Date de livraison (fichier)', 'Date de livraison (postale)', 'Archivé'],
      rowsKey: 'tableauLivraisonsExterne',
      isLivraisonTable: true,
      rowFields: ['phasesExterne', 'typeDeProductionExterne', 'dateLivraisonFichierExterne', 'dateLivraisonPostaleExterne', 'archiveExterne'],
    },
    fieldsAfterTable: [
      { key: 'facturationCommentaire', label: 'Commentaire' },
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation', needsMoreSpace: true },
    ]

  },
  scolaire: {
    fields: [
      { key: 'noRequisitionScolaire', label: 'Numéro de réquisition' },
      { key: 'noDemandeScolaire', label: 'Numéro de commande' },
      { key: 'nomClientScolaire', label: 'Nom du client' },
      { key: 'noClientScolaire', label: 'Numéro du client' },
      // { key: 'nomProjetScolaire', label: "Nom du projet" },
      { key: 'descriptionProjetFacturation', label: 'Nom du projet' },

    ],
    table: {
      headers: ['Type de production demandé', 'Quantité', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['description', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable: [
      { key: 'facturationCommentaire', label: 'Commentaire' },
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation', needsMoreSpace: true },
    ],
    adresse: 'CEGEP DU VIEUX MONTREAL\n255, RUE ONTARIO EST\nMONTRÉAL QC H2X 1X6',
  },
  materiel: {
    fields: [
      { key: 'noRequisitionMateriel', label: 'Numéro de réquisition' },
      { key: 'noCommandeMateriel', label: 'Numéro de commande' },
      { key: 'nomClientMateriel', label: 'Nom du client' },
      { key: 'noClientMateriel', label: 'Numéro du client (si connu)' },
      { key: 'nomContactMateriel', label: 'Nom du contact' },
      { key: 'courrielContactMateriel', label: 'Courriel du contact' },
      { key: 'noTelephoneMateriel', label: 'Numéro de téléphone' },
      { key: 'adresseFacturationMateriel', label: 'Adresse de facturation postale et courriel' },
      // { key: 'nomProjetMateriel', label: 'Nom du projet' },
      { key: 'descriptionProjetFacturation', label: 'Description du projet' },
    ],
    table: {
      headers: ['Description', 'Quantité', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['description', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable: [
      { key: 'facturationCommentaire', label: 'Commentaire' },
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation', needsMoreSpace: true },
    ]
  },
  services: {
    fields: [
      { key: 'noRequisitionService', label: 'Numéro de réquisition' },
      { key: 'noCommandeService', label: 'Numéro de commande' },
      { key: 'nomClientService', label: 'Nom du client' },
      { key: 'noClientService', label: 'Numéro du client (si connu)' },
      { key: 'nomContactService', label: 'Nom du contact' },
      { key: 'courrielContactService', label: 'Courriel du contact' },
      { key: 'noTelephoneService', label: 'Numéro de téléphone' },
      { key: 'adresseFacturationService', label: 'Adresse de facturation postale et courriel' },
      // { key: 'nomProjetService', label: 'Nom du projet' },
      { key: 'descriptionProjetFacturation', label: 'Description du projet' },

    ],
    table: {
      headers: ['Description', 'Quantité', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['description', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable: [
      { key: 'facturationCommentaire', label: 'Commentaire' },
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation', needsMoreSpace: true },
    ]
  }
};



export function generatePDF(type: string, formValue: any, totalFromFacturation: number): void {
  const config = requisitionConfigs[type];
  if (!config) {
    console.error(`No config found for requisition type: ${type}`);
    return;
  }

  const doc = new jsPDF();
  let y = 20;
  const pageWidth = doc.internal.pageSize.getWidth();

  //Title
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  //set the x to center of pdf
  doc.text(`Facturation ${type.toUpperCase()}`, pageWidth / 2, y, { align: "center" });

  // Sous Title
  y += 10;
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  // doc.text(`SAI - Réquisition (${type})`, 20, y);
  doc.text(`SAI - Réquisition`, 20, y);
  y += 10;
  drawLine(doc, y);
  y += 10;

  // Render form fields
  config.fields.forEach(field => {
    const label = `${field.label}:`;
    let value = formValue[field.key] || '_________________';

    doc.setFontSize(12);

    // Draw label in bold
    doc.setFont('helvetica', 'bold');
    doc.text(label, 20, y);

    // Compute label width
    const labelWidth = doc.getTextWidth(label);

    doc.setFont('helvetica', 'normal');

    // Wrap text if needed
    const maxWidth = pageWidth - (20 + labelWidth + 2);
    const splitValue = doc.splitTextToSize(String(value), maxWidth);

    doc.text(splitValue, 20 + labelWidth + 2, y);

    // Move y based on number of lines
    const lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
    y += splitValue.length * lineHeight + 2; // +2 for small spacing
  });


  if (config.noClient) {
    const label = `Numéro du client:`;
    const value = config.noClient;

    doc.setFontSize(12);

    // Draw label in bold
    doc.setFont('helvetica', 'bold');
    doc.text(label, 20, y);

    // Compute label width
    const labelWidth = doc.getTextWidth(label);

    // Draw value just after label
    doc.setFont('helvetica', 'normal');
    doc.text(String(value), 20 + labelWidth + 2, y);
    y += 8;
  }

  if (config.adresse) {
    const label = `Adresse:`;
    const value = config.adresse;
    doc.setFontSize(12);
    // Draw label in bold
    doc.setFont('helvetica', 'bold');
    doc.text(label, 20, y);
    //compute label width
    y += 8;
    // Draw value just after label
    doc.setFont('helvetica', 'normal');
    const splitAddress = doc.splitTextToSize(config.adresse, pageWidth - 40);
    doc.text(splitAddress, 20, y);
    y += splitAddress.length * 10; // Adjust y based on number of lines
  }

  // Render billing table if it exists
  if (config.table && Array.isArray(formValue[config.table.rowsKey])) {
    const { headers, rowsKey, rowFields } = config.table;
    const tableRows = formValue[rowsKey] as any[];

    y += 10;
    doc.setFont('helvetica', 'bold');
    if (config.table.isLivraisonTable) {
      doc.text('Tableau de livraisons', 20, y);
    } else {
      doc.text('Tableau de facturation', 20, y);
    }
    y += 6;
    drawLine(doc, y);
    y += 6;

    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');

    // Step 1: Determine dynamic column widths
    const columnWidths: number[] = headers.map((header, i) => {
      let maxWidth = doc.getTextWidth(header);

      tableRows.forEach(row => {
        const text = String(row[rowFields[i]] || '');
        const lines = text.split('\n'); // handle multi-line values
        lines.forEach(line => {
          const width = doc.getTextWidth(line.trim());
          if (width > maxWidth) maxWidth = width;
        });
      });

      return Math.max(maxWidth + 6, 30); // Add padding and enforce a minimum width
    });

    // Step 2: Draw headers with dynamic x positioning
    let x = 20;
    headers.forEach((header, i) => {
      doc.text(header, x, y);
      x += columnWidths[i];
    });
    y += 6;

    // Step 3: Draw rows
    doc.setFont('helvetica', 'normal');
    tableRows.forEach(row => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      let x = 20;
      rowFields.forEach((key, i) => {
        doc.text(String(row[key] || ''), x, y);
        x += columnWidths[i];
      });
      y += 6;
    });
  }

  // Draw total if available
  if (totalFromFacturation) {
    y += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`Total: ${totalFromFacturation.toFixed(2)}$`, 20, y);
  }


  y += 20;

  config.fieldsAfterTable.forEach(field => {
    // Add space before authorization field
    if (field.needsMoreSpace) {
      y += 20; // Add space before the authorization line
    }

    const label = `${field.label}:`;
    const value = formValue[field.key] || '_________________';

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(label, 20, y);

    const labelWidth = doc.getTextWidth(label);
    doc.setFont('helvetica', 'normal');

    const maxWidth = pageWidth - (20 + labelWidth + 2);
    const splitValue = doc.splitTextToSize(String(value), maxWidth);
    doc.text(splitValue, 20 + labelWidth + 2, y);

    const lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
    y += splitValue.length * lineHeight + 2;
  });
  doc.save(`requisition-${type}.pdf`);
}

function drawLine(doc: jsPDF, y: number) {
  doc.setDrawColor(0);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
}

export function generateBraillePDFs(type: string, formValue: any) {
  if (type !== "banq" || formValue.phases.length === 0) return;

  const phase = formValue.phases[0];
  console.log(phase);
  const formType = phase.selectedTypes;
  const brailleBIOrBA = phase.brailleBANQ2?.AbregeIntegralBrailleBANQBAOUBI || {};
  const brailleBIBA = phase.brailleBANQ?.AbregeIntegralBrailleBANQ || {};
  const fileName = phase.brailleBANQ?.noFichierBrailleBANQ || "Nom de fichier manquant";
  const fileName2 = phase.brailleBANQ2?.noFichierBrailleBANQBAOUBI || "Nom de fichier manquant";

  // --- Case 1: brailleBANQ ---
  if (formType.includes("brailleBANQ")) {
    console.log("Generating BIBA");

    // Abrégé group
    if (brailleBIBA.BAbrege) {
      const tableAbrege = phase.brailleBANQ.tableProductionBrailleBA || [];
      const docAbrege = new jsPDF();

      tableAbrege.forEach((row: any, index: number) => {
        if (index > 0) docAbrege.addPage();
        generatePageTitle(docAbrege, type, formValue, row, "Braille abrégé", index + 1, tableAbrege.length);
      });

      docAbrege.save(`${fileName}_BA_PGT.pdf`);
    }

    // Intégral group
    if (brailleBIBA.BIntegral) {
      const tableIntegral = phase.brailleBANQ.tableProductionBrailleBI || [];
      const docIntegral = new jsPDF();

      tableIntegral.forEach((row: any, index: number) => {
        if (index > 0) docIntegral.addPage();
        generatePageTitle(docIntegral, type, formValue, row, "Braille intégral", index + 1, tableIntegral.length);
      });

      docIntegral.save(`${fileName}_BI_PGT.pdf`);
    }
  }

  // --- Case 2: brailleBANQ2 ---
  else if (formType.includes("brailleBANQ2")) {
    console.log("Generating BI OR BA");

    if (brailleBIOrBA.BAbrege) {
      const tableAbrege = phase.brailleBANQ2.tableProductionBrailleBAOUBI || [];
      const docAbrege = new jsPDF();

      tableAbrege.forEach((row: any, index: number) => {
        if (index > 0) docAbrege.addPage();
        generatePageTitle(docAbrege, type, formValue, row, "Braille abrégé", index + 1, tableAbrege.length);
      });

      docAbrege.save(`${fileName2}_PGT.pdf`);
    }

    if (brailleBIOrBA.BIntegral) {
      const tableIntegral = phase.brailleBANQ2.tableProductionBrailleBAOUBI || [];
      const docIntegral = new jsPDF();

      tableIntegral.forEach((row: any, index: number) => {
        if (index > 0) docIntegral.addPage();
        generatePageTitle(docIntegral, type, formValue, row, "Braille intégral", index + 1, tableIntegral.length);
      });

      docIntegral.save(`${fileName2}_PGT.pdf`);
    }
  }
}

export function generatePageTitle(
  doc: jsPDF,
  type: string,
  formValue: any,
  rowData?: any,
  brailleType?: string,
  volumeIndex?: number,
  totalVolumes?: number
): void {
  const pageWidth = doc.internal.pageSize.getWidth();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  centerText(doc, formValue.titreProjetBANQ, pageWidth, 40);

  // Subtitle
  doc.setFontSize(20);
  centerText(doc, formValue.soustitreProjetBANQ, pageWidth, 50);

  // Genre
  centerText(doc, formValue.genreProjectBANQ, pageWidth, 60);

  // Author
  doc.setFontSize(18);
  centerText(doc, formValue.auteurBANQ, pageWidth, 100);

  //Traduction
  doc.setFontSize(14);
  centerText(doc, formValue.traductionBANQ, pageWidth, 110);

  //Collection
  doc.setFontSize(14);
  centerText(doc, formValue.collectionBANQ, pageWidth, 140);

  // Editeur + Lieu
  const editeur = formValue.editeurBANQ || "";
  const lieu = formValue.lieuEditionBANQ || "";
  const combined = [editeur, lieu].filter(Boolean).join(", ");
  if (combined) {
    doc.setFontSize(14);
    centerText(doc, combined, pageWidth, 150);
  }

  // Date
  const dateEdition = formValue.dateEditionBANQ || "";
  const combined2 = dateEdition
    ? `Tous droits réservés, ${dateEdition}`
    : "Tous droits réservés, DATE MANQUANTE";
  centerText(doc, combined2, pageWidth, 160);

  // ISBN
  const isbn = formValue.isbnBANQ || "";
  const isbnText = isbn ? `ISBN: ${isbn}` : "ISBN: NUMÉRO MANQUANT";
  centerText(doc, isbnText, pageWidth, 170);

  // Creator
  const textToWrite =
    "Transcription braille 2025\nInstitut Nazareth et Louis-Braille\nLongueuil (Québec)";
  centerText(doc, textToWrite, pageWidth, 190);

  // Page data
  if (rowData) {
    let y = 230;
    if (brailleType) {
      centerText(doc, `${brailleType}`, pageWidth, y);
      y += 8;
    }

    Object.entries(rowData).forEach(([key, value]) => {
      if (key === "detProdBraille") {
        centerText(doc, `${value}`, pageWidth, y);
        y += 15;
        if (volumeIndex && totalVolumes && totalVolumes > 1) {
          centerText(doc, `Volume ${volumeIndex} sur ${totalVolumes}`, pageWidth, y);
          y += 15;
        } else if (volumeIndex && totalVolumes && totalVolumes == 1) {
          centerText(doc, `Volume unique`, pageWidth, y);
          y += 15;
        }
      }
    });
  }
}


function centerText(doc: jsPDF, text: string, pageWidth: number, y: number) {
  if (!text) return;
  const maxWidth = pageWidth - 80;
  const splitText = doc.splitTextToSize(String(text), maxWidth);
  splitText.forEach((line: string, i: number) => {
    const textWidth = doc.getTextWidth(line);
    const x = (pageWidth - textWidth) / 2;
    doc.text(line, x, y + i * 8);
  });
}



//#region PDF Marc-André


export function generateProductionBraillePDF(formValue: any): void {
  if (!formValue?.phases?.length) return;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  const phase = formValue.phases[0];

  /* ---------------- TITRE ---------------- */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  centerText(doc, "Feuille de production braille", pageWidth, y);

  y += 15;
  drawLine(doc, y);
  y += 10;

  /* ---------------- MÉTADONNÉES BANQ ---------------- */
  doc.setFontSize(10);

  writeLabelValue(doc, "GBQ", formValue.noBonCommandeBANQ, 20, y); y += 6;
  if(formValue.prioritaireBANQ == true){
    writeLabelValue(doc, "Prioritaire:", "Priorité", 20, y); y += 6;
  } else if(formValue.regulierBANQ == true) {
    writeLabelValue(doc, "Prioritaire:", "Régulier", 20, y); y += 6;
  }
  writeLabelValue(doc, "Titre:", formValue.titreProjetBANQ, 20, y); y += 6;
  writeLabelValue(doc, "Sous-titre:", formValue.soustitreProjetBANQ, 20, y); y += 6;
  writeLabelValue(doc, "Auteur:", formValue.auteurBANQ, 20, y); y += 6;
  writeLabelValue(doc, "Éditeur:", formValue.editeurBANQ, 20, y); y += 6;
  writeLabelValue(doc, "Lieu d’édition:", formValue.lieuEditionBANQ, 20, y); y += 6;
  writeLabelValue(doc, "Date d’édition:", formValue.dateEditionBANQ, 20, y); y += 6;
  writeLabelValue(doc, "Collection:", formValue.collectionBANQ, 20, y); y += 10;

  drawLine(doc, y);
  y += 10;

  /* ---------------- TABLEAU PRODUCTION ---------------- */
  const headers = [
    "Numéro fichier .dxb",
    "Détail de la pagination",
    "Nombre de pages total (pair)",
    "Notes prod."
  ];

  /* ---------------- ROW SOURCE ---------------- */
  let rows: any[] = [];
  const formType = phase.selectedTypes;

  if (formType.includes("brailleBANQ")) {
    rows = [
      ...(phase.brailleBANQ.tableProductionBrailleBA || []),
      ...(phase.brailleBANQ.tableProductionBrailleBI || [])
    ];
  }

  if (formType.includes("brailleBANQ2")) {
    rows = phase.brailleBANQ2.tableProductionBrailleBAOUBI || [];
  }

  if (!rows.length) {
    doc.text("Aucune donnée de production.", 20, y);
    doc.save("Feuille_production_braille.pdf");
    return;
  }

  /* ---------------- WIDTH CALCULATION ---------------- */
  const valuesMatrix = rows.map(r => [
    r.noFichProdBraille,
    r.detProdBraille,
    r.nbsPageProdBraille,
    r.noteProdBraille
  ]);

  const tableWidth = pageWidth - 40;

  const minWidths = [30, 60, 30, 30]; // minimum width in points
  const widths = computeColumnWidths(doc, headers, valuesMatrix, minWidths, tableWidth);

  /* ---------------- HEADERS ---------------- */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);

  let x = 20;

  // 1️⃣ Split headers
  const headerLines = headers.map((h, i) =>
    doc.splitTextToSize(h, widths[i] - 2)
  );

  // 2️⃣ Compute max header height
  const headerHeight =
    Math.max(...headerLines.map(lines => lines.length)) * 5;

  // 3️⃣ Draw wrapped headers
  headerLines.forEach((lines, i) => {
    doc.text(lines, x, y);
    x += widths[i];
  });

  // 4️⃣ Move y correctly
  y += headerHeight;
  drawLine(doc, y);
  y += 4;

  doc.setFont("helvetica", "normal");


  /* ---------------- ROWS ---------------- */
  rows.forEach(row => {
    const values = [
      row.noFichProdBraille,
      row.detProdBraille,
      row.nbsPageProdBraille,
      row.noteProdBraille
    ];

    const rowHeight =
  Math.max(
    ...values.map((val, i) =>
      doc.splitTextToSize(String(val || ""), widths[i] - 2).length
    )
  ) * 5;


    if (y + rowHeight > 280) {
      doc.addPage();
      y = 20;

      // repeat headers on new page
      doc.setFont("helvetica", "bold");
      x = 20;
      headers.forEach((h, i) => {
        doc.text(h, x, y);
        x += widths[i];
      });
      y += 6;
      drawLine(doc, y);
      y += 4;
      doc.setFont("helvetica", "normal");
    }

    x = 20;
    values.forEach((val, i) => {
      const split = doc.splitTextToSize(String(val || ""), widths[i] - 2);

      doc.text(split, x, y);

      x += widths[i];
    });


    y += rowHeight;
  });

  /* ---------------- SAVE ---------------- */
  const fileName = formValue.titreProjetBANQ + "_Feuille_production_braille";

  doc.save(`${fileName}.pdf`);
}


function computeColumnWidths(
  doc: jsPDF,
  headers: string[],
  rows: any[][],
  minWidths: number[],
  maxTableWidth: number
) {
  const widths = [...minWidths];

  headers.forEach((h, i) => {
    widths[i] = Math.max(widths[i], doc.getTextWidth(h) + 4);
  });

  rows.forEach(row => {
    row.forEach((cell, i) => {
      const textWidth = doc.getTextWidth(String(cell || "")) + 4;
      widths[i] = Math.max(widths[i], textWidth);
    });
  });

  // Scale down if table too wide
  const totalWidth = widths.reduce((a, b) => a + b, 0);
  if (totalWidth > maxTableWidth) {
    const scale = maxTableWidth / totalWidth;
    return widths.map(w => w * scale);
  }

  return widths;
}



function writeLabelValue(
  doc: jsPDF,
  label: string,
  value?: string,
  x = 20,
  y = 20
) {
  doc.setFont("helvetica", "bold");
  doc.text(`${label}`, x, y);
  doc.setFont("helvetica", "normal");
  doc.text(value || "—", x + 50, y);
}


//#endregion



