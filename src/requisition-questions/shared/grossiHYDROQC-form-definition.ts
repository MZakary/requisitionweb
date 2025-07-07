export const grossiHYDROQCFormFields = [
  { label: 'Caractères agrandis - informations générales', type: 'header4' },
  { key: 'noFichierGrossi', label: 'Numéro du fichier', label2:"Informations générales - Caractères agrandis", type: 'text' },
  { key: 'dateRequiseGrossi', label: 'Date requise', type: 'text' },
  { key: 'quantiteGrossi', label: 'Quantité', type: 'text', defaultValue: '1' },
  { key: 'nbsPageImprimeeGrossi', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulteGrossi', label: 'Niveau de difficulté', type: 'select', defaultValue: 'standard',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
      { label: 'Musical', value: 'musical' },
    ]
  },
  { key: 'typePoliceGrossi', label: 'Type de police de caractères', type: 'text', defaultValue: 'Arial' },
  { key: 'taillePoliceGrossi', label: 'Taille de police de caractères', type: 'text', defaultValue: '16' },
  { key: 'FormatGrossi', label: 'Format', type: 'select', defaultValue: 'format8demi11',
    options: [
      { label: '8 1/2 x 11', value: 'format8demi11' },
      { label: '8 1/2 x 14', value: 'format8demi14' },
      { label: '11 x 17', value: 'format11par17' },
      { label: 'Autre', value: 'formatAutre' },
    ]
  },
  { key: 'autreFormatGrossi', label: 'Si autre, spécifier', type: 'text' },
  
  { label: 'Caractères agrandis - impression', type: 'header4' },
  { key: 'impressionGrossi', type: 'checkbox-list', defaultValue: ['xerox', 'rectoVerso'],
    options: [
      { label: 'XEROX', value: 'xerox', label2: "Impression" },
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },

  { label: 'Caractères agrandis - finition et montage', type: 'header4' },
  { key: 'typeTeneurGrossi', type: 'checkbox', label:"Broché", defaultValue:true},
  
  { label: 'Caractères agrandis - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceGrossi', label: 'Nom/Description', label2:"nom du fichier source ou description de la production", type: 'text' },
  
  { label: 'Caractères agrandis - commentaire', type: 'header4' },
  { key: 'grossiCommentaire', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Caractères agrandis - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiGrossi', label: 'Nom', label2:"Informations tech. multimédia", type: 'text' },
  { key: 'dateTermineMultiGrossi', label: 'Terminé le', type: 'text' },
  { key: 'noHeureMultiGrossi', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiGrossi', label: 'Commentaire', type: 'textarea' },

   { label: 'Caractères agrandis - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineGrossi', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualGrossi', label: 'Nom', label2:"Contrôle de qualité", type: 'text' },
  { key: 'dateTermineContQualGrossi', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualGrossi', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualGrossi', label: 'Commentaire', type: 'textarea' },

  { label: 'Caractères agrandis - tableau de production', type: 'header4' },
  {
    key: 'tableProductionGrossi',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdGrossi', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPageGrossi', label: 'Nombre de pages', type: 'text' },
      { key: 'nbsCaracteresGrossi', label: 'Nombre de caractères', type: 'text' },
      { key: 'noteProdGrossi', label: 'Notes Prod.', type: 'text' }
    ]
  },

];