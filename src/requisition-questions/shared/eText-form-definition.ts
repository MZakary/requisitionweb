export const eTextFormFields = [
  { label: 'E-Text - informations générales', type: 'header4' },
  { key: 'noFichierEText', label: 'Numéro du fichier', label2:"E-Text - Informations générales", type: 'text' },
  { key: 'dateRequiseEText', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeeEText', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulteEtext', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
    ]
  },
  { key: 'langueNotesProdEtext', label: 'Langue des notes du producteur', type: 'select',
    options: [
      { label: 'Français', value: 'fra' },
      { label: 'Anglais', value: 'ang' },
    ]
  },
  { key: 'balisesEvidenceEText', label: 'Balises mises en évidence', type: 'checkbox' },
  { key: 'graphiqueEText', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },

  { label: 'E-Text - finition et montage', type: 'header4' },
  { key: 'courrielEText', label: 'Courriel', label2:"E-Text - Finition et montage", type: 'checkbox' },
  { key: 'autreCourrielEText', label: 'Si autre, expliquer', type: 'text' },

  { label: 'E-Text - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceEText', label: 'Nom/Description', label2:"E-Text - nom du fichier source ou description de la production", type: 'text' },
  
  { label: 'E-Text - commentaire', type: 'header4' },
  { key: 'commentaireEText', label: 'Commentaire', label2:"E-Text - commentaire", type: 'text' },
  
  { label: 'E-Text - informations tech.', type: 'header4' },
  { key: 'nomtechEText', label: 'Nom', label2: "E-Text - informations tech.", type: 'text' },
  { key: 'terminerTechEText', label: 'Terminé le', type: 'text' },
  { key: 'nbsHeureTravailTechEText', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechEText', label: 'Commentaire', type: 'textarea' },

  { label: 'E-Text - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineEText', label: 'Terminé?', label2:"E-Text - Contrôle de qualité", type: 'checkbox' },
  { key: 'nomCDQEText', label: 'Nom', type: 'text' },
  { key: 'terminerCDQEText', label: 'Terminé le', type: 'text' },
  { key: 'nbsHeureTravailCDQEText', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireCDQEText', label: 'Commentaire', type: 'textarea' },

  /* Add tableau */
  { label: 'E-Text - tableau de production', type: 'header4' },
  {
    key: 'tableauProductionEText',
    label: 'E-Text - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdEText', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsCaracteresProdEText', label: 'Nombre de caractères', type: 'text' },
    ]
  },
];