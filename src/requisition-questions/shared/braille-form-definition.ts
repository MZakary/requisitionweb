export const brailleFormFields = [
  { label: 'Braille - Informations générales', type: 'header4' },
  { key: 'noFichierBraille', label: 'Numéro du fichier .txt', label2:"Braille - Informations Générales", type: 'text' },
  { key: 'dateRequiseBraille', label: 'Date requise', type: 'text' },
  { key: 'reimpressionBraille', label: 'Réimpression', type: 'checkbox' },
  { key: 'quantiteBraille', label: 'Quantité', type: 'text' },
  { key: 'noPageImprimeesBraille', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulteBraille', label: 'Niveau de difficulté', type: 'select',
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
  { key: 'formatBraille', label: 'Format', type: 'select',
    options: [
      { label: '25x30', value: '25x30' },
      { label: '25x40', value: '25x40' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreFormatBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'graphiqueBraille', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },


  { label: 'Braille - finition et montage', type: 'header4' },
  { key: 'typeFeuilleBraille', type: 'checkbox-list',
    options: [
      { label: 'Recto', value: 'recto', label2:"Braille - Finition et montage" },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },
  { key: 'embossageBraille', label: 'Embossage', type: 'select',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'ViewPlus', value: 'viewplus' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'materielBraille', label: 'Matériel', type: 'select',
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
  { key: 'typeTeneurBraille', type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'broche' },
      { label: 'Cerlox', value: 'cerlox' },
      { label: 'Wire-O', value: 'wireO' },
    ]
  },
  { key: 'typeCouvertureBraille', type: 'checkbox-list',
    options: [
      { label: 'Couverture vinyle', value: 'couvVinyle' },
      { label: 'Couverture plastifiée couleur', value: 'couvPlasCouleur' },
      { label: 'Couverture plastifiée monochrome', value: 'couvPlasMonochrome' },
      { label: 'Couverture personnalisée', value: 'couvPersonnalisee' },
      { label: 'Page endos du service', value: 'pageEndos' },
      { label: 'Étiquette braille', value: 'etiqBraille' },
      { label: 'Étiquette imprimée', value: 'etiqImprimee' },
      { label: 'Page titre braille', value: 'pageTitreBraille' },
      { label: 'Page titre imprimée', value: 'pageTitreImprimee' },
      { label: 'Autre', value: 'autreTypeCouv' },
    ]
  },
  { key: 'autreTypeCouvBraille', label: 'Si autre, spécifier', type: 'text' },


  { label: 'Braille - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceBraille', label: 'Nom/Description', label2:"Braille - Nom du fichier source ou description de la production", type: 'textarea' },
  
  { label: 'Braille - spécifications du client', type: 'header4' },
  { key: 'specificationsClientBraille', label: 'Spécifications du client', type: 'textarea', label2:"Braille - Spécifications du client" },

  { label: 'Braille - commentaire', type: 'header4' },
  { key: 'commentaireBraille', label: 'Commentaire', type: 'textarea', label2: 'Braille - commentaire' },

  
  { label: 'Braille - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiBraille', label: 'Nom', label2:"Braille - Informations tech. multimédia", type: 'text' },
  { key: 'dateTermineMultiBraille', label: 'Terminé le', type: 'text' },
  { key: 'noHeureMultiBraille', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiBraille', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactileBraille', label: 'Nom', label2:"Braille - Informations tech. tactile", type: 'text' },
  { key: 'dateTermineTactileBraille', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactileBraille', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactileBraille', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBraille', label: 'Terminé?', label2:"Braille - Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualBraille', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualBraille', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualBraille', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualBraille', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - tableau de production', type: 'header4' },
  {
    key: 'tableProductionBraille',
    label: 'Braille - Tableau de production',
    type: 'dynamicTable',
    addTotal: true,
    totalKey: 'nbsPageProdBraille',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'textarea' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'textarea' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'textarea' }
    ],
    defaultValues: {
      0: { detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      1: { detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
    },
    defaultRowCount: 2,
  },

  { label: 'Braille - tableau des étiquettes', type: 'header4' },
  {
    key: 'tableEtiquettesBraille',
    label: 'Braille - Tableau des étiquettes',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichierEtiqBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'libEtiqBraille', label: 'Libellé de l’étiquette', type: 'textarea' },
      { key: 'noteEtiqBraille', label: 'Notes Prod.', type: 'textarea' }
    ]
  },
];