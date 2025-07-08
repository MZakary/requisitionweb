export const brailleDuoMediaBANQFormFields = [
  { label: 'BANQ Duo-Média - Informations générales', type: 'header4' },
  { key: 'noFichierBrailleDuoMediaBANQ', label: 'Numéro du fichier .txt', label2:"Informations Générales - Braille", type: 'text' },
  { key: 'AbregeIntegralBrailleDuoMediaBANQ', type: 'checkbox-list',
    options: [
      { label: 'Duo-médias', value: 'duoMedias'},
      { label: 'Trio-médias', value: 'trioMedias' }
    ]
  },

  { label: 'Braille - finition et montage', type: 'header4' },
  { key: 'formatBrailleDuoMediaBANQ', label: 'Format', type: 'select',
    options: [
      { label: '25x30', value: '25x30', label2:'Finition et montage' },
      { label: '21x28', value: '21x28' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreformatBrailleDuoMediaBANQ', label: 'Si autre, spécifier', type: 'text' },
  { key: 'checkboxListRectoVersoBrailleDuoMediaBANQ', type: 'checkbox-list',
    options: [
      { label: 'Recto', value: 'recto' },
    ]
  },
  { key: 'embossageBrailleDuoMediaBANQ', label: 'Embossage', type: 'select',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBrailleDuoMediaBANQ', label: 'Si autre, spécifier', type: 'text' },
  { key: 'materielBrailleDuoMediaBANQ', label: 'Matériel', type: 'select',
    options: [
      { label: 'Papier avec trous', value: 'papierAvecTrous' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille label', value: 'brailleLabel' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielBrailleDuoMediaBANQ', label: 'Si autre, spécifier', type: 'text' },
  
  { key: 'mesureInterieurLivreBrailleDuoMediaBANQ', label: 'Mesures intérieures du livre', type: 'text' },



  { label: 'Braille - commentaire', type: 'header4' },
  { key: 'commentaireBrailleDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - informations pré-encodage', type: 'header4' },
  { key: 'nomTechinfoPreEncodageDuoMediaBANQ', label: 'Nom', label2:"informations pré-encodage", type: 'text' },
  { key: 'datePossessioninfoPreEncodageDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineinfoPreEncodageDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureinfoPreEncodageDuoMediaBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'encodageNiveauDeuxPreEncodageDuoMediaBANQ', label: 'Nécessite un encodage de niveau 2', type: 'checkbox' },
  { key: 'graphiquePreEncodageDuoMediaBANQ', label: 'Graphique', type: 'checkbox' },
  { key: 'commentaireTechinfoPreEncodageDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - informations encodage', type: 'header4' },
  { key: 'nomTechInfoEncodageDuoMediaBANQ', label: 'Nom', label2:"informations pré-encodage", type: 'text' },
  { key: 'datePossessionInfoEncodageDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineInfoEncodageDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureInfoEncodageDuoMediaBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireInfoEncodageDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },



  { label: 'Braille - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactileBrailleDuoMediaBANQ', label: 'Nom', label2:"Informations tech. tactile", type: 'text' },
  { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'text' },
  { key: 'dateTermineTactileBrailleDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactileBrailleDuoMediaBANQ', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactileBrailleDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBrailleDuoMediaBANQ', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualBrailleDuoMediaBANQ', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualBrailleDuoMediaBANQ', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualBrailleDuoMediaBANQ', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualBrailleDuoMediaBANQ', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - tableau de production', type: 'header4' },
  {
    key: 'tableProductionDuoMediaBANQ',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'text' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total', type: 'text' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'text' }
    ]
  },

];