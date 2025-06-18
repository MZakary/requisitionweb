export const numerisationFormFields = [
  { label: 'Numérisation - informations générales', type: 'header4' },
  { key: 'noFichierNum', label: 'Numéro du fichier', label2:"Informations générales - Numérisation", type: 'text' },
  { key: 'dateRequiseNum', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeeNum', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'FormatNum', label: 'Format', type: 'select',
    options: [
      { label: '8 1/2 x 11', value: 'format8demi11' },
      { label: '8 1/2 x 14', value: 'format8demi14' },
      { label: '11 x 17', value: 'format11par17' },
      { label: 'Autre', value: 'formatAutre' },
    ]
  },
  { key: 'autreFormatNum', label: 'Si autre, spécifier', type: 'text' },
  { key: 'monochromeNum', label: 'Monochrome', type: 'checkbox' },
  { key: 'couleurNum', label: 'Couleur', type: 'checkbox' },

  { label: 'Numérisation - finition et montage', type: 'header4' },
  { key:"courrielCheckNum", label: 'Courriel', label2:"Finition et montage", type: 'checkbox' },
  { key:"autreExpliquationNum", label: 'Courriel', type: 'text' },

  { label: 'Numérisation - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceNum', label: 'Nom/Description', label2:"Nom du fichier source ou description de la production", type: 'text' },
  
  { label: 'Numérisation - commentaire', type: 'header4' },
  { key: 'commentaireNum', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Numérisation - informations tech.', type: 'header4' },
  { key: 'nomTechNum', label: 'Nom', label2:"Informations tech.", type: 'text' },
  { key: 'dateTermineTechNum', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTechNum', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechNum', label: 'Commentaire', type: 'textarea' },

  { label: 'Numérisation - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineNum', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualNum', label: 'Nom', label2:"Contrôle de qualité", type: 'text' },
  { key: 'dateTermineContQualNum', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualNum', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualNum', label: 'Commentaire', type: 'textarea' },

  { label: 'Numérisation - tableau de production', type: 'header4' },
  {
    key: 'tableProductionNum',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdNum', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPageNum', label: 'Nombre de pages', type: 'text' },
    ]
  },

];