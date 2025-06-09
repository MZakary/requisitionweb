export const numerisationFormFields = [
  { label: 'Numérisation - informations générales', type: 'header4' },
  { key: 'noFichierNum', label: 'Numéro du fichier .txt', type: 'text' },
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
  { key: 'autreFormat', label: 'Si autre, spécifier', type: 'text' },
  { key: 'monochromeNum', label: 'Monochrome', type: 'checkbox' },
  { key: 'couleurNum', label: 'Couleur', type: 'checkbox' },

  { label: 'Numérisation - finition et montage', type: 'header4' },
  { key:"courrielCheck", label: 'Courriel', type: 'checkbox' },
  { key:"autreExpliquation", label: 'Courriel', type: 'text' },

  { label: 'Numérisation - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceNum', label: 'Nom du fichier source', type: 'text' },
  
  { label: 'Numérisation - commentaire', type: 'header4' },
  { key: 'commentaireNum', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Numérisation - informations tech.', type: 'header4' },
  { key: 'nomTech', label: 'Nom', type: 'text' },
  { key: 'dateTermineTech', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTech', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTech', label: 'Commentaire', type: 'textarea' },

  { label: 'Numérisation - contrôle de qualité', type: 'header4' },
  { key: 'nomContQual', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQual', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQual', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQual', label: 'Commentaire', type: 'textarea' },

  { label: 'Numérisation - tableau de production', type: 'header4' },
  {
    key: 'tableProductionNum',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProd', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPage', label: 'Nombre de pages', type: 'text' },
    ]
  },

];