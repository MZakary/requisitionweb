export const brailleDuoMediaBANQFormFields = [
  { label: 'BANQ Duo-Média - Informations générales', type: 'header4' },
  { key: 'noFichierBrailleDuoMediaBANQ', label: 'Numéro du fichier .txt', label2:"BANQ Duo-Média - Informations Générales", type: 'text', default: 'xxxxbi(duo)' },
  { key: 'AbregeIntegralBrailleDuoMediaBANQ', type: 'checkbox-list', defaultValue: ['duoMedias'],
    options: [
      { label: 'Duo-médias', value: 'duoMedias'},
      { label: 'Trio-médias', value: 'trioMedias' }
    ]
  },

  { label: 'BANQ Duo-Média - finition et montage', type: 'header4' },
  { key: 'formatBrailleDuoMediaBANQ', label: 'Format', type: 'select', defaultValue: '25x30',
    options: [
      { label: '25x30', value: '25x30', label2:'BANQ Duo-Média - finition et montage' },
      { label: '21x28', value: '21x28' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreformatBrailleDuoMediaBANQ', label: 'Si autre, spécifier', type: 'text' },
  { key: 'checkboxListRectoVersoBrailleDuoMediaBANQ', type: 'checkbox-list', defaultValue: ['recto'],
    options: [
      { label: 'Recto', value: 'recto' },
    ]
  },
  { key: 'embossageBrailleDuoMediaBANQ', label: 'Embossage', type: 'select', defaultValue: 'braillo',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBrailleDuoMediaBANQ', label: 'Si autre, spécifier', type: 'text' },
  { key: 'materielBrailleDuoMediaBANQ', label: 'Matériel', type: 'select', defaultValue: 'brailleLabel',
    options: [
      { label: 'Papier avec trous', value: 'papierAvecTrous' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille label', value: 'brailleLabel' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielBrailleDuoMediaBANQ', label: 'Si autre, spécifier', type: 'text' },
  
  { key: 'mesureInterieurLivreBrailleDuoMediaBANQ', label: 'Mesures intérieures du livre', type: 'text' },



  { label: 'BANQ Duo-Média - commentaire', type: 'header4' },
  { key: 'commentaireBrailleDuoMediaBANQ', label: 'Commentaire', type: 'textarea', label2:"BANQ Duo-Média - commentaire" },
  
  { label: 'BANQ Duo-Média - informations pré-encodage', type: 'header4' },
  { key: 'nomTechinfoPreEncodageDuoMediaBANQ', label: 'Nom', label2:"BANQ Duo-Média - informations pré-encodage", type: 'text' },
  { key: 'datePossessioninfoPreEncodageDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineinfoPreEncodageDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureinfoPreEncodageDuoMediaBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'encodageNiveauDeuxPreEncodageDuoMediaBANQ', label: 'Nécessite un encodage de niveau 2', type: 'checkbox' },
  { key: 'graphiquePreEncodageDuoMediaBANQ', label: 'Graphique', type: 'checkbox' },
  { key: 'commentaireTechinfoPreEncodageDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ Duo-Média - informations encodage', type: 'header4' },
  { key: 'nomTechInfoEncodageDuoMediaBANQ', label: 'Nom', label2:"BANQ Duo-Média - informations pré-encodage", type: 'text' },
  { key: 'datePossessionInfoEncodageDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineInfoEncodageDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureInfoEncodageDuoMediaBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireInfoEncodageDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },



  { label: 'BANQ Duo-Média - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactileBrailleDuoMediaBANQ', label: 'Nom', label2:"BANQ Duo-Média - Informations tech. tactile", type: 'text' },
  { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineTactileBrailleDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactileBrailleDuoMediaBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactileBrailleDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },
  
  { label: 'BANQ Duo-Média - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBrailleDuoMediaBANQ', label: 'Terminé?', label2:"BANQ Duo-Média - Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualBrailleDuoMediaBANQ', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualBrailleDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualBrailleDuoMediaBANQ', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualBrailleDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },

  { label: 'BANQ Duo-Média - tableau de production', type: 'header4' },
  {
    key: 'tableProductionDuoMediaBANQ',
    label: 'BANQ Duo-Média - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total', type: 'textarea' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'textarea' }
    ],
    defaultValues: {
      0: { noFichProdBraille: 'xxxxbi(duo)' },
    },
    defaultRowCount: 1,
  },

];