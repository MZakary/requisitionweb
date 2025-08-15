import jsPDF from 'jspdf';

// Define a field structure
interface FieldDefinition {
  label: string;
  key: string;
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
      { key: 'autorisationFacturation', label: 'Autorisation' },
    ]
  },
  banq: {
    fields: [
      { key: 'noBonCommandeBANQ', label: 'Numéro bon de commande' },
      { key: 'noContratBANQ', label: 'Contrat no' },
      { key: 'titreProjetBANQ', label: "Titre" },
    ],
    table: {
      headers: ['Type de braille', 'Nbr vol.', 'Nbr page', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['typeDeBraille', 'nbrVol', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable: [
      { key: 'dateLivraisonFacturation', label: 'Date de livraison' },
      { key: 'codeBudgetaireFacturation', label: 'Code budgétaire' },
      { key: 'autorisationFacturation', label: 'Autorisation' },
    ],
    noClient: '3000032',
    adresse: 'BANQ - BIBLIOTHÈQUE ET ARCHIVES NATIONALES DU QUÉBEC\n475 BOUL. DE MAISONNEUVE EST\nMONTRÉAL (QUÉBEC) H2L 5C4',

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
      { key: 'autorisationFacturation', label: 'Autorisation' },
    ]

  },
  interne: {
    fields: [
      { key: 'noRequisitionInterne', label: 'Numéro de réquisition' },
      { key: 'nomDirectionInterne', label: 'Nom de la direction' },
      { key: 'nomProgramServiceInterne', label: 'Nom du programme ou du service' },
      { key: 'nomDemandeurInterne', label: 'Nom du demandeur' },
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
      { key: 'autorisationFacturation', label: 'Autorisation' },
    ]

  },
  scolaire: {
    fields: [
      { key: 'noRequisitionScolaire', label: 'Numéro de réquisition' },
      { key: 'noDemandeScolaire', label: 'Numéro de commande' },
      { key: 'nomClientScolaire', label: 'Nom du client' },
      { key: 'noClientScolaire', label: 'Numéro du client (si connu)' },
      { key: 'etablissementEnseignementScolaire', label: "Établissement d'enseignement" },
      { key: 'sigleCoursScolaire', label: "Sigle du cours" },
      { key: 'titreCoursScolaire', label: "Titre du cours" },
      { key: 'nomEtudiantScolaire', label: "Nom de l'étudiant" },
      { key: 'courrielEtudiantScolaire', label: "Courriel de l'étudiant" },
      { key: 'nomRepondantScolaire', label: "Nom du répondant" },
      { key: 'courrielRepondantScolaire', label: "Courriel du répondant" },
      { key: 'livrerEtudiantScolaire', label: "Livrer à l'étudiant" },
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
      { key: 'autorisationFacturation', label: 'Autorisation' },
    ]
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
      { key: 'autorisationFacturation', label: 'Autorisation' },
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
      { key: 'autorisationFacturation', label: 'Autorisation' },
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
        const textWidth = doc.getTextWidth(text);
        if (textWidth > maxWidth) maxWidth = textWidth;
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
    const label = `${field.label}:`;
    const value = formValue[field.key] || '_________________';

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
  });

  doc.save(`requisition-${type}.pdf`);
}

function drawLine(doc: jsPDF, y: number) {
  doc.setDrawColor(0);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
}
