// production-forms/braille-form-definition.ts
export const brailleFormFields = [
  { key: 'brailleInfoGeneral', label: 'Braille - Informations générales', type: 'header4' },
  { key: 'noFichier', label: 'Numéro du fichier .txt', type: 'text' },
  { key: 'dateRequise', label: 'Date requise', type: 'text' },
  { key: 'reimpression', label: 'Réimpression', type: 'checkbox' },
  { key: 'quantite', label: 'Quantité', type: 'text' },
  { key: 'noPageImprimees', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulte', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
      { label: 'Musical simple', value: 'musicalSimple' },
      { label: 'Musical intermédiaire', value: 'musicalIntermediaire' },
      { label: 'Musical complexe', value: 'musicalComplexe' },
    ]
  },
  { key: 'abrege', label: 'Braille abrégé', type: 'checkbox' },
  { key: 'integral', label: 'Braille intégral', type: 'checkbox' },
  { key: 'codeBrailleBase', label: 'Code braille de base', type: 'select',
    options: [
      { label: 'CBFU', value: 'cbfu' },
      { label: 'Anglais UEB', value: 'aueb' },
      { label: 'Anglais BANA', value: 'abana' },
      { label: 'CBSQ/CBI', value: 'cbsq' },
      { label: 'Nemeth', value: 'nemeth' },
      { label: 'Informatique', value: 'informatique' },
      { label: 'Musique', value: 'musique' },
      { label: 'Signalisation', value: 'signalisation' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autre', label: 'Si autre, spécifier', type: 'text' },
  { key: 'format', label: 'Format', type: 'select',
    options: [
      { label: '25x30', value: '25x30' },
      { label: '25x40', value: '25x40' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autre', label: 'Si autre, spécifier', type: 'text' },
  { key: 'graphique', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },


  { key: 'brailleFinitionMontage', label: 'Braille - finition et montage', type: 'header4' },

];