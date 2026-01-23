export const autreFormFields = [
  { label: 'Autre - informations générales', type: 'header4' },
  { key: 'dateRequiseAutre', label: 'Date requise', type: 'text', label2: 'Autre - Informations générales' },
  { key: 'quantiteAutre', label: 'Quantité', type: 'text' },
  { key: 'typeProductionAutre', type: 'checkbox-list',
    options: [
      { label: 'Adaptation et finition', value: 'adaptationFinition' },
      { label: 'PDF image', value: 'pdfImage' },
      { label: 'Vérification signalétique', value: 'verificationSignaletique' },
      { label: 'Autre', value: 'autre' }
    ]
  },
  { key: 'autretypeProductionAutre', label: 'Si autre, spécifier', type: 'text' },
  
  { label: 'Autre - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'specificationsClientAutre', label: 'Spécifications du client', type: 'textarea', label2: 'Autre - Nom du fichier source ou description de la production' },

  { label: 'Autre - commentaire', type: 'header4' },
  { key: 'commentaireAutre', label: 'Commentaire', type: 'textarea', label2: 'Autre - Informations générales' },
  
  { label: 'Autre - informations tech.', type: 'header4' },
  { key: 'nomTechSonore', label: 'Nom', label2:"Autre - Informations tech.", type: 'text' },
  { key: 'dateTermineTechSonore', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTechSonore', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechSonore', label: 'Commentaire', type: 'textarea' },

];