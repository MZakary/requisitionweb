export const brailleHYDROQCFormFields = [
  { label: 'Braille - Informations générales', type: 'header4' },
  { key: 'noFichierBraille', label: 'Numéro du fichier .txt', label2:"Informations Générales - Braille", type: 'text' },
  { key: 'dateRequiseBraille', label: 'Date requise', type: 'text' },
  { key: 'quantiteBraille', label: 'Quantité', type: 'text', defaultValue: '1' },
  { key: 'noPageImprimeesBraille', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulteBraille', label: 'Niveau de difficulté', type: 'select', defaultValue: 'standard',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
      { label: 'Musical simple', value: 'musicalSimple' },
      { label: 'Musical intermédiaire', value: 'musicalIntermediaire' },
      { label: 'Musical complexe', value: 'musicalComplexe' },
    ]
  },
  { key: 'typeBrailleCheckboxBraille', type: 'checkbox-list',
    options: [
      { label: 'Braille abrégé', value: 'abregeBraille' },
      { label: 'Braille intégral', value: 'integralBraille' },
    ]
  },
  { key: 'codeBrailleBaseBraille', label: 'Code braille de base', type: 'select',
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
  { key: 'autreCodeBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'formatBraille', label: 'Format', type: 'select', defaultValue: '25x30',
    options: [
      { label: '25x30', value: '25x30' },
      { label: '25x40', value: '25x40' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreFormatBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'graphiqueBraille', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },


  { label: 'Braille - finition et montage', type: 'header4' },
  { key: 'typeFeuilleBraille', type: 'checkbox-list', defaultValue: ['rectoVerso'],
    options: [
      { label: 'Recto', value: 'recto', label2:"Finition et montage" },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },
  { key: 'embossageBraille', label: 'Embossage', type: 'select', defaultValue: 'braillo',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'ViewPlus', value: 'viewplus' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'materielBraille', label: 'Matériel', type: 'select', defaultValue: 'papierSansTrous',
    options: [
      { label: 'Papier avec trous', value: 'papierAvecTrous' },
      { label: 'Papier sans trous', value: 'papierSansTrous' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille label', value: 'brailleLabel' },
      { label: 'Plaque argent', value: 'plaqueArgent' },
      { label: 'Plaque noire', value: 'plaqueNoire' },
      { label: 'Plaque dorée', value: 'plaqueDoree' },
      { label: 'Plaque de zinc', value: 'plaqueZinc' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielBraille', label: 'Si autre, spécifier', type: 'text' },
  {key: 'brocheHydroQCBraille', type: 'checkbox', label:"Broché", defaultValue: true},

  { label: 'Braille - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceBraille', label: 'Nom/Description', label2:"Nom du fichier source ou description de la production", type: 'text' },
  
  { label: 'Braille - commentaire', type: 'header4' },
  { key: 'commentaireBraille', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiBraille', label: 'Nom', label2:"Informations tech. multimédia", type: 'text' },
  { key: 'dateTermineMultiBraille', label: 'Terminé le', type: 'text' },
  { key: 'noHeureMultiBraille', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiBraille', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactileBraille', label: 'Nom', label2:"Informations tech. tactile", type: 'text' },
  { key: 'dateTermineTactileBraille', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactileBraille', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactileBraille', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBraille', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualBraille', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualBraille', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualBraille', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualBraille', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - tableau de production', type: 'header4' },
  {
    key: 'tableProductionBraille',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'text' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'text' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'text' },
    ]
  },
];