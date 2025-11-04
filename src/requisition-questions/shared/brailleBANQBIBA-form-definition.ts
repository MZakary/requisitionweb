export const brailleBANQBIBAFormFields = [
  { label: 'BANQ abrégé et intégral - Informations générales', type: 'header4' },
  { key: 'noFichierBrailleBANQ', label: 'Numéro du fichier .txt', label2: "BANQ abrégé et intégral - Informations Générales", type: 'text', defaultValue: 'xxxxba-bi', needsSync: true, targetKey: 'noFichProdBraille' },
  { key: 'nbsPagesImprimeesBrailleBANQ', label: 'Nombre de pages imprimées', type: 'text' },
  {
    key: 'AbregeIntegralBrailleBANQ', type: 'checkbox-list', defaultValue: ['BAbrege', 'BIntegral'],
    options: [
      { label: 'Braille abrégé', value: 'BAbrege' },
      { label: 'Braille intégral', value: 'BIntegral' }
    ]
  },

  { label: 'BANQ abrégé et intégral - finition et montage', type: 'header4' },
  {
    key: 'formatBrailleBANQ', label: 'Format', type: 'select', defaultValue: '25x30',
    options: [
      { label: '25x30', value: '25x30', label2: 'BANQ abrégé et intégral - Finition et montage' },
      { label: '21x28', value: '21x28' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreformatBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'checkboxListRectoVersoBrailleBANQ', type: 'checkbox-list', defaultValue: ['rectoVerso'],
    options: [
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' },
    ]
  },
  {
    key: 'embossageBrailleBANQ', label: 'Embossage', type: 'select', defaultValue: 'braillo',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'materielBrailleBANQ', label: 'Matériel', type: 'select', defaultValue: 'papierAvecTrous',
    options: [
      { label: 'Papier avec trous', value: 'papierAvecTrous' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille label', value: 'brailleLabel' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'couvertureCheckboxListBrailleBANQ', type: 'checkbox-list', defaultValue: ['wireO', 'pageTitreBraille', 'pageTitreImprimees', 'feuillesDePoints'],
    options: [
      { label: 'Wire-O', value: 'wireO' },
      { label: 'Page titre braille', value: 'pageTitreBraille' },
      { label: 'Page titre imprimées', value: 'pageTitreImprimees' },
      { label: 'Feuilles de points', value: 'feuillesDePoints' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autrecouvertureCheckboxListBrailleBANQ', label: 'Si autre, spécifier', type: 'text' },

  { label: 'BANQ abrégé et intégral - commentaire', type: 'header4' },
  { key: 'commentaireBrailleBANQ', label: 'Commentaire', type: 'textarea', label2: "BANQ abrégé et intégral - commentaire" },

  { label: 'BANQ abrégé et intégral - informations pré-encodage', type: 'header4' },
  { key: 'nomTechinfoPreEncodage', label: 'Nom', label2: "BANQ abrégé et intégral - informations pré-encodage", type: 'text' },
  { key: 'datePossessioninfoPreEncodage', label: 'Date de prise de possession de l\'ouvrage', type: 'text' },
  { key: 'dateTermineinfoPreEncodage', label: 'Terminé le', type: 'text' },
  { key: 'noHeureinfoPreEncodage', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'encodageNiveauDeuxPreEncodage', label: 'Nécessite un encodage de niveau 2', type: 'checkbox' },
  { key: 'graphiquePreEncodage', label: 'Graphique', type: 'checkbox' },
  { key: 'commentaireTechinfoPreEncodage', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ abrégé et intégral - informations encodage', type: 'header4' },
  { key: 'nomTechInfoEncodage', label: 'Nom', label2: "BANQ abrégé et intégral - informations pré-encodage", type: 'text' },
  { key: 'datePossessionInfoEncodage', label: 'Date de prise de possession de l\'ouvrage', type: 'text' },
  { key: 'dateTermineInfoEncodage', label: 'Terminé le', type: 'text' },
  { key: 'noHeureInfoEncodage', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireInfoEncodage', label: 'Commentaire', type: 'textarea' },



  { label: 'BANQ abrégé et intégral - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactileBrailleBANQ', label: 'Nom', label2: "BANQ abrégé et intégral - Informations tech. tactile", type: 'text' },
  { key: 'datePossessionTactileBrailleBANQ', label: 'Date de prise de possession de l\'ouvrage', type: 'text' },
  { key: 'dateTermineTactileBrailleBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactileBrailleBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactileBrailleBANQ', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ abrégé et intégral - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBrailleBANQ', label: 'Terminé?', label2: "BANQ abrégé et intégral - contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualBrailleBANQ', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualBrailleBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualBrailleBANQ', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualBrailleBANQ', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ abrégé et intégral - tableau de production', type: 'header4' },
  {
    key: 'tableProductionBrailleBA',
    label: 'BANQ abrégé et intégral - Tableau de production - BA',
    needsTitle: true,
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'textarea' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'textarea' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'textarea' }
    ],
    defaultValues: {
      0: { noFichProdBraille: 'xxxxba01', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      1: { noFichProdBraille: 'xxxxba02', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      2: { noFichProdBraille: 'xxxxba03', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      3: { noFichProdBraille: 'xxxxba04', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      4: { noFichProdBraille: 'xxxxba05', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
    },
    defaultRowCount: 5
  },
  {
    key: 'tableProductionBrailleBI',
    label: 'BANQ abrégé et intégral - Tableau de production - BI',
    needsTitle: true,
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'textarea' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'textarea' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'textarea' }
    ],
    defaultValues: {
      0: { noFichProdBraille: 'xxxxbi01', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      1: { noFichProdBraille: 'xxxxbi02', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      2: { noFichProdBraille: 'xxxxbi03', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      3: { noFichProdBraille: 'xxxxbi04', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      4: { noFichProdBraille: 'xxxxbi05', detProdBraille: 'Pages de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
    },
    defaultRowCount: 5,
  },

];





export const brailleBANQBIOUBAFormFields = [
  { label: 'BANQ abrégé ou intégral - Informations générales', type: 'header4' },
  { key: 'noFichierBrailleBANQBAOUBI', label: 'Numéro du fichier .txt', label2: "BANQ abrégé ou intégral - Informations Générales", type: 'text', defaultValue: 'xxxx' },
  { key: 'nbsPagesImprimeesBrailleBANQBAOUBI', label: 'Nombre de pages imprimées', type: 'text' },
  {
    key: 'AbregeIntegralBrailleBANQBAOUBI', type: 'checkbox-list',
    options: [
      { label: 'Braille abrégé', value: 'BAbrege' },
      { label: 'Braille intégral', value: 'BIntegral' }
    ]
  },

  { label: 'BANQ abrégé ou intégral - finition et montage', type: 'header4' },
  {
    key: 'formatBrailleBANQBAOUBI', label: 'Format', type: 'select', defaultValue: '25x30',
    options: [
      { label: '25x30', value: '25x30', label2: 'BANQ abrégé ou intégral - Finition et montage' },
      { label: '21x28', value: '21x28' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreformatBrailleBANQBAOUBI', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'checkboxListRectoVersoBrailleBANQBAOUBI', type: 'checkbox-list', defaultValue: ['rectoVerso'],
    options: [
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' },
    ]
  },
  {
    key: 'embossageBrailleBANQBAOUBI', label: 'Embossage', type: 'select', defaultValue: 'braillo',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBrailleBANQBAOUBI', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'materielBrailleBANQBAOUBI', label: 'Matériel', type: 'select', defaultValue: 'papierAvecTrous',
    options: [
      { label: 'Papier avec trous', value: 'papierAvecTrous' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille label', value: 'brailleLabel' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielBrailleBANQBAOUBI', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'couvertureCheckboxListBrailleBANQBAOUBI', type: 'checkbox-list', defaultValue: ['wireO', 'pageTitreBraille', 'pageTitreImprimees', 'feuillesDePoints'],
    options: [
      { label: 'Wire-O', value: 'wireO' },
      { label: 'Page titre braille', value: 'pageTitreBraille' },
      { label: 'Page titre imprimées', value: 'pageTitreImprimees' },
      { label: 'Feuilles de points', value: 'feuillesDePoints' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autrecouvertureCheckboxListBrailleBANQBAOUBI', label: 'Si autre, spécifier', type: 'text' },

  { label: 'BANQ abrégé ou intégral - commentaire', type: 'header4' },
  { key: 'commentaireBrailleBANQBAOUBI', label: 'Commentaire', type: 'textarea', label2: "BANQ abrégé ou intégral - commentaire" },

  { label: 'BANQ abrégé ou intégral - informations pré-encodage', type: 'header4' },
  { key: 'nomTechinfoPreEncodageBAOUBI', label: 'Nom', label2: "BANQ abrégé ou intégral - informations pré-encodage", type: 'text' },
  { key: 'datePossessioninfoPreEncodageBAOUBI', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineinfoPreEncodageBAOUBI', label: 'Terminé le', type: 'text' },
  { key: 'noHeureinfoPreEncodageBAOUBI', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'encodageNiveauDeuxPreEncodageBAOUBI', label: 'Nécessite un encodage de niveau 2', type: 'checkbox' },
  { key: 'graphiquePreEncodageBAOUBI', label: 'Graphique', type: 'checkbox' },
  { key: 'commentaireTechinfoPreEncodageBAOUBI', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ abrégé ou intégral - informations encodage', type: 'header4' },
  { key: 'nomTechInfoEncodageBAOUBI', label: 'Nom', label2: "BANQ abrégé ou intégral - informations pré-encodage", type: 'text' },
  { key: 'datePossessionInfoEncodageBAOUBI', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineInfoEncodageBAOUBI', label: 'Terminé le', type: 'text' },
  { key: 'noHeureInfoEncodageBAOUBI', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireInfoEncodageBAOUBI', label: 'Commentaire', type: 'textarea' },



  { label: 'BANQ abrégé ou intégral - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactileBrailleBANQBAOUBI', label: 'Nom', label2: "BANQ abrégé ou intégral - Informations tech. tactile", type: 'text' },
  { key: 'datePossessionTactileBrailleBANQBAOUBI', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineTactileBrailleBANQBAOUBI', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactileBrailleBANQBAOUBI', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactileBrailleBANQBAOUBI', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ abrégé ou intégral - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBrailleBANQBAOUBI', label: 'Terminé?', label2: "BANQ abrégé ou intégral - contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualBrailleBANQBAOUBI', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualBrailleBANQBAOUBI', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualBrailleBANQBAOUBI', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualBrailleBANQBAOUBI', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ abrégé ou intégral - tableau de production', type: 'header4' },
  {
    key: 'tableProductionBrailleBAOUBI',
    label: 'BANQ abrégé ou intégral - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'textarea' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'textarea' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'textarea' }
    ],
    defaultValues: {
      0: { noFichProdBraille: 'xxxx01', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      1: { noFichProdBraille: 'xxxx02', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      2: { noFichProdBraille: 'xxxx03', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      3: { noFichProdBraille: 'xxxx04', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      4: { noFichProdBraille: 'xxxx05', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      5: { noFichProdBraille: 'xxxx06', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      6: { noFichProdBraille: 'xxxx07', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
      7: { noFichProdBraille: 'xxxx08', detProdBraille: 'Page de l\'imprimé: \nPages braille: P1-P3; 1-; T1' },
    },
    defaultRowCount: 8,
  },

];