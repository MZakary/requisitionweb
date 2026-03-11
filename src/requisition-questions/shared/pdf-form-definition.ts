import {
  TECH_NAME_OPTIONS
} from '../dropdown-options'

export const pdfFormFields = [
  { label: 'PDF - informations générales', type: 'header4' },
  { key: 'noFichierPDF', label: 'Numéro du fichier', label2: "PDF - Informations générales", type: 'text' },
  { key: 'dateDemandePDF', label: 'Date de la demande', type: 'text' },

  { key: 'dateRequisePDF', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeePDF', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'pdfAccessiblePDF', label: 'PDF accessible', type: 'checkbox' },
  { key: 'pdfNavigablePDF', label: 'PDF navigable', type: 'checkbox' },
  {
    key: 'niveauDifficultePDF', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' }
    ]
  },
  { key: 'graphiquePDF', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },

  { label: 'PDF - finition et montage', type: 'header4' },
  { key: "courrielCheckboxPDF", label: 'Courriel', label2: "PDF - Finition et montage", type: 'checkbox' },
  { key: "autreExpliquationPDF", label: 'Courriel', type: 'text' },

  { label: 'PDF - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourcePDF', label: 'Nom/Description', label2: "PDF - nom du fichier source ou description de la production", type: 'textarea' },

  { label: 'PDF - spécifications du client', type: 'header4' },
  { key: 'specificationsClientPDF', label: 'Spécifications du client', type: 'textarea', label2: "PDF - spécifications du client" },

  { label: 'PDF - commentaire', type: 'header4' },
  { key: 'commentairePDF', label: 'Commentaire', type: 'textarea', label2: "PDF - commentaire" },

  { label: 'PDF - informations tech. multimédia', type: 'header4' },
  {
    key: 'tableTechMultiPDF',
    addTotal: true,
    label2: "PDF - Informations tech. multimédia",
    totalKey: 'noHeureTechMultiPDF',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechMultiPDF',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineTechMultiPDF', label: 'Terminé le', type: 'date' },
      { key: 'noHeureTechMultiPDF', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechMultiPDF', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'PDF - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTerminePDF', label: 'Terminé?', label2: "PDF - Contrôle de qualité", type: 'checkbox' },
  {
    key: 'tableContQualPDF',
    addTotal: true,
    // label2: "PDF - Informations tech. multimédia",
    totalKey: 'noHeureContQualPDF',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomContQualPDF',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineContQualPDF', label: 'Terminé le', type: 'date' },
      { key: 'noHeureContQualPDF', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireContQualPDF', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'PDF - tableau de production', type: 'header4' },
  {
    key: 'tableProductionPDF',
    label: 'PDF - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdPDF', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPagePDF', label: 'Nombre de pages', type: 'text' },
    ]
  },

];