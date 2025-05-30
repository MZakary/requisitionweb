export const eTextFormFields = [
  { label: 'E-Text - informations générales', type: 'header4' },
  { key: 'noFichierEText', label: 'Numéro du fichier .txt', type: 'text' },
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
  { key: 'balisesEvidence', label: 'Balises mises en évidence', type: 'checkbox' },
  { key: 'graphiqueEText', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },

  { label: 'E-Text - finition et montage', type: 'header4' },
  { key: 'courriel', label: 'Courriel', type: 'checkbox' },
  { key: 'autreCourriel', label: 'Si autre, expliquer', type: 'text' },

  { label: 'E-Text - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceEText', label: 'nom/description', type: 'text' },
  
  { label: 'E-Text - informations tech.', type: 'header4' },
  { key: 'nomtechEText', label: 'Nom', type: 'text' },
  { key: 'terminerTechEText', label: 'Terminé le', type: 'text' },
  { key: 'nbsHeureTravailTechEText', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechEText', label: 'Commentaire', type: 'textarea' },

  { label: 'E-Text - contrôle de qualité', type: 'header4' },
  { key: 'nomCDQEText', label: 'Nom', type: 'text' },
  { key: 'terminerCDQEText', label: 'Terminé le', type: 'text' },
  { key: 'nbsHeureTravailCDQEText', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireCDQEText', label: 'Commentaire', type: 'textarea' },

  /* Add tableau */
  { label: 'E-Text - tableau de production', type: 'header4' },

  {
    key: 'tableauProductionEText',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProd', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsCaracteresProd', label: 'Nombre de caractères', type: 'text' },
    ]
  },
];