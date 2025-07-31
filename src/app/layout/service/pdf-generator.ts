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
}> = {
  externe: {
    fields: [
      { label: 'Numéro de réquisition', key: 'noRequisitionExterne' },
      { label: 'Numéro de commande', key: 'noCommandeExterne' },
      { label: 'Date de la demande', key: 'dateDemandeExterne' },
      { label: 'Date requise', key: 'dateRequiseExterne' },
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
      {key: 'facturationCommentaire', label: 'Commentaire' },
      {key: 'dateLivraisonFacturation', label: 'Date de livraison'},
      {key: 'codeBudgetaireFacturation', label: 'Code budgétaire'},
      {key: 'autorisationFacturation', label: 'Autorisation' },
    ]
  },
  banq: {
    fields: [
      { key: 'noBonCommandeBANQ', label: 'Numéro bon de commande' },
      { key: 'noContratBANQ', label: 'Contrat no' },
      { key: 'dateDemandeBANQ', label: 'Date de la demande' },
      { key: 'dateReceptionBANQ', label: "Date de la réception de l'ouvrage" },
      { key: 'dateRequiseBANQ', label: 'Date requise' },
      { key: 'prioritaireBANQ', label: 'Prioritaire' },
      { key: 'regulierBANQ', label: 'Régulier' },
    ],
    table: {
      headers: ['Type de braille', 'Nbr vol.', 'Nbr page', 'Prix unitaire ($)', 'Sous total ($)'],
      rowsKey: 'facturation',
      rowFields: ['typeDeBraille', 'nbrVol', 'quantite', 'prix', 'total'],
    },
    fieldsAfterTable:[
      {key: 'dateLivraisonFacturation', label: 'Date de livraison'},
      {key: 'codeBudgetaireFacturation', label: 'Code budgétaire'},
      {key: 'autorisationFacturation', label: 'Autorisation' },
    ]

  },
  hydro: {
    fields: [
      { key: 'noRequisitionHydro', label: 'Numéro de réquisition' },
      { key: 'noDemandeHydro', label: 'Numéro de commande' },
      { key: 'dateDemandeHydro', label: 'Date de la demande' },
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
    fieldsAfterTable:[
      {key: 'facturationCommentaire', label: 'Commentaire' },
      {key: 'dateLivraisonFacturation', label: 'Date de livraison'},
      {key: 'codeBudgetaireFacturation', label: 'Code budgétaire'},
      {key: 'autorisationFacturation', label: 'Autorisation' },
    ]

  },
  interne:{
    fields: [
      { key: 'noRequisitionInterne', label: 'Numéro de réquisition' },
      { key: 'dateDemandeInterne', label: 'Date de la demande' },
      { key: 'dateRequiseInterne', label: 'Date requise' },
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
    fieldsAfterTable:[
      {key: 'facturationCommentaire', label: 'Commentaire' },
      {key: 'dateLivraisonFacturation', label: 'Date de livraison'},
      {key: 'codeBudgetaireFacturation', label: 'Code budgétaire'},
      {key: 'autorisationFacturation', label: 'Autorisation' },
    ]

  },
  scolaire: {
    fields: [
        { key: 'noRequisitionScolaire', label: 'Numéro de réquisition' },
        { key: 'noDemandeScolaire', label: 'Numéro de commande' },
        { key: 'nomClientScolaire', label: 'Nom du client' },
        { key: 'noClientScolaire', label: 'Numéro du client (si connu)' },
        { key: 'dateDemandeScolaire', label: 'Date de la demande' },
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
    fieldsAfterTable:[
      {key: 'facturationCommentaire', label: 'Commentaire' },
      {key: 'dateLivraisonFacturation', label: 'Date de livraison'},
      {key: 'codeBudgetaireFacturation', label: 'Code budgétaire'},
      {key: 'autorisationFacturation', label: 'Autorisation' },
    ]
  },
  materiel:{
    fields: [
      { key: 'noRequisitionMateriel', label: 'Numéro de réquisition' },
      { key: 'noCommandeMateriel', label: 'Numéro de commande' },
      { key: 'dateDemandeMateriel', label: 'Date de la demande' },
      { key: 'dateRequiseMateriel', label: 'Date requise' },
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
    fieldsAfterTable:[
      {key: 'facturationCommentaire', label: 'Commentaire' },
      {key: 'dateLivraisonFacturation', label: 'Date de livraison'},
      {key: 'codeBudgetaireFacturation', label: 'Code budgétaire'},
      {key: 'autorisationFacturation', label: 'Autorisation' },
    ]
  },
  services:{
    fields: [
      { key: 'noRequisitionService', label: 'Numéro de réquisition' },
      { key: 'noCommandeService', label: 'Numéro de commande' },
      { key: 'dateDemandeService', label: 'Date de la demande' },
      { key: 'dateRequiseService', label: 'Date requise' },
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
    fieldsAfterTable:[
      {key: 'facturationCommentaire', label: 'Commentaire' },
      {key: 'dateLivraisonFacturation', label: 'Date de livraison'},
      {key: 'codeBudgetaireFacturation', label: 'Code budgétaire'},
      {key: 'autorisationFacturation', label: 'Autorisation' },
    ]
  }
};

export function generatePDF(type: string, formValue: any): void {
  const config = requisitionConfigs[type];
  if (!config) {
    console.error(`No config found for requisition type: ${type}`);
    return;
  }

  const doc = new jsPDF();
  let y = 20;

  // Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(`Réquisition (${type})`, 20, y);
  y += 10;
  drawLine(doc, y);
  y += 10;

  // Render form fields
  config.fields.forEach(field => {
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

  // Render billing table if it exists
  if (config.table && Array.isArray(formValue[config.table.rowsKey])) {
  const { headers, rowsKey, rowFields } = config.table;
  const tableRows = formValue[rowsKey] as any[];

  y += 10;
  doc.setFont('helvetica', 'bold');
  if( config.table.isLivraisonTable) {
  doc.text('Tableau de livraisons', 20, y);} else {
  doc.text('Tableau de facturation', 20, y);}
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
