export const autreFormFields = [
  { label: 'Autre - informations générales', type: 'header4' },
  { key: 'dateRequiseAutre', label: 'Date requise', type: 'text' },
  { key: 'quantiteAutre', label: 'Quantité imprimées', type: 'text' },
  { key: 'typeProductionAutre', type: 'checkbox-list',
    options: [
      { label: 'Adaptation et finition', value: 'adaptationFinition' },
      { label: 'PDF image', value: 'pdfImage' },
      { label: 'Vérification signalétique', value: 'verificationSignaletique' },
      { label: 'Autre', value: 'autre' }
    ]
  },
  { key: 'autretypeProductionAutre', label: 'Si autre, spécifier', type: 'text' },
  
  { label: 'Autre - commentaire', type: 'header4' },
  { key: 'commentaireAutre', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Sonore - informations tech.', type: 'header4' },
  { key: 'nomTechSonore', label: 'Nom', label2:"Informations tech.", type: 'text' },
  { key: 'dateTermineTechSonore', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTechSonore', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechSonore', label: 'Commentaire', type: 'textarea' },

];