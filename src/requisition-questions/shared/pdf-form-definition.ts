export const pdfFormFields = [
  { label: 'PDF - informations générales', type: 'header4' },
  { key: 'noFichierPDF', label: 'Numéro du fichier', label2:"Informations générales", type: 'text' },
  { key: 'dateRequisePDF', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeePDF', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'pdfAccessiblePDF', label: 'PDF accessible', type: 'checkbox' },
  { key: 'pdfNavigablePDF', label: 'PDF navigable', type: 'checkbox' },
  { key: 'niveauDifficultePDF', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' }
    ]
  },
  { key: 'graphiquePDF', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },

  { label: 'PDF - finition et montage', type: 'header4' },
  { key:"courrielCheckboxPDF", label: 'Courriel', label2:"Finition et montage", type: 'checkbox' },
  { key:"autreExpliquationPDF", label: 'Courriel', type: 'text' },

  { label: 'PDF - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourcePDF', label: 'Nom/Description', label2:"Nom du fichier source ou description de la production", type: 'text' },
  
  { label: 'PDF - commentaire', type: 'header4' },
  { key: 'commentairePDF', label: 'Commentaire', type: 'textarea' },
  
  { label: 'PDF - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiPDF', label: 'Nom', label2:"Informations tech. multimédia", type: 'text' },
  { key: 'dateTermineTechMultiPDF', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTechMultiPDF', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiPDF', label: 'Commentaire', type: 'textarea' },

  { label: 'PDF - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTerminePDF', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualPDF', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualPDF', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualPDF', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualPDF', label: 'Commentaire', type: 'textarea' },

  { label: 'PDF - tableau de production', type: 'header4' },
  {
    key: 'tableProductionPDF',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdPDF', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPagePDF', label: 'Nombre de pages', type: 'text' },
    ]
  },

];