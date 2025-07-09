export const brailleBANQBIBAFormFields = [
  { label: 'Braille - Informations générales', type: 'header4' },
  { key: 'noFichierBrailleBANQ', label: 'Numéro du fichier .txt', label2:"Informations Générales - Braille", type: 'text' },
  { key: 'nbsPagesImprimeesBrailleBANQ', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'AbregeIntegralBrailleBANQ', type: 'checkbox-list',
    options: [
      { label: 'Braille abrégé', value: 'BAbrege'},
      { label: 'Braille intégral', value: 'BIntegral' }
    ]
  },

  { label: 'Braille - finition et montage', type: 'header4' },
  { key: 'formatBrailleBANQ', label: 'Format', type: 'select',
    options: [
      { label: '25x30', value: '25x30', label2:'Finition et montage' },
      { label: '21x28', value: '21x28' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreformatBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },
  { key: 'checkboxListRectoVersoBrailleBANQ', type: 'checkbox-list',
    options: [
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' },
    ]
  },
  { key: 'embossageBrailleBANQ', label: 'Embossage', type: 'select',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },
  { key: 'materielBrailleBANQ', label: 'Matériel', type: 'select',
    options: [
      { label: 'Papier avec trous', value: 'papierAvecTrous' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille label', value: 'brailleLabel' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },
  { key: 'couvertureCheckboxListBrailleBANQ', type: 'checkbox-list',
    options: [
      { label: 'Wire-O', value: 'wireO' },
      { label: 'Page titre braille', value: 'pageTitreBraille' },
      { label: 'Page titre imprimées', value: 'pageTitreImprimees' },
      { label: 'Feuilles de points', value: 'feuillesDePoints' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autrecouvertureCheckboxListBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },

  { label: 'Braille - commentaire', type: 'header4' },
  { key: 'commentaireBrailleBANQ', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - informations pré-encodage', type: 'header4' },
  { key: 'nomTechinfoPreEncodage', label: 'Nom', label2:"informations pré-encodage", type: 'text' },
  { key: 'datePossessioninfoPreEncodage', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineinfoPreEncodage', label: 'Terminé le', type: 'text' },
  { key: 'noHeureinfoPreEncodage', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'encodageNiveauDeuxPreEncodage', label: 'Nécessite un encodage de niveau 2', type: 'checkbox' },
  { key: 'graphiquePreEncodage', label: 'Graphique', type: 'checkbox' },
  { key: 'commentaireTechinfoPreEncodage', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - informations encodage', type: 'header4' },
  { key: 'nomTechInfoEncodage', label: 'Nom', label2:"informations pré-encodage", type: 'text' },
  { key: 'datePossessionInfoEncodage', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineInfoEncodage', label: 'Terminé le', type: 'text' },
  { key: 'noHeureInfoEncodage', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireInfoEncodage', label: 'Commentaire', type: 'textarea' },



  { label: 'Braille - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactileBrailleBANQ', label: 'Nom', label2:"Informations tech. tactile", type: 'text' },
  { key: 'datePossessionTactileBrailleBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineTactileBrailleBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactileBrailleBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactileBrailleBANQ', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBrailleBANQ', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualBrailleBANQ', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualBrailleBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualBrailleBANQ', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualBrailleBANQ', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - tableau de production', type: 'header4' },
  {
    key: 'tableProductionBraille',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'text' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'text' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'text' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'text' }
    ]
  },

];