export const htmlFormFields = [
  { label: 'HTML - informations générales', type: 'header4' },
  { key: 'noFichierHTML', label: 'Numéro du fichier', label2:"Informations générales - HTML", type: 'text' },
  { key: 'dateRequiseHTML', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeeHTML', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulteHTML', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' }
    ]
  },
  { key: 'graphiqueHTML', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },

  { label: 'HTML - finition et montage', type: 'header4' },
  { key:"courrielCheckboxHTML", label: 'Courriel', label2:"Finition et montage", type: 'checkbox' },
  { key:"autreExpliquationHTML", label: 'Courriel', type: 'text' },

  { label: 'HTML - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceHTML', label: 'Nom/Description', label2:"Nom du fichier source ou description de la production", type: 'text' },
  
  { label: 'HTML - commentaire', type: 'header4' },
  { key: 'commentaireHTML', label: 'Commentaire', type: 'textarea' },
  
  { label: 'HTML - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiHTML', label: 'Nom', label2:"Informations tech. multimédia", type: 'text' },
  { key: 'dateTermineTechMultiHTML', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTechMultiHTML', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiHTML', label: 'Commentaire', type: 'textarea' },

  { label: 'HTML - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineHTML', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualHTML', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualHTML', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualHTML', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualHTML', label: 'Commentaire', type: 'textarea' },

  { label: 'HTML - tableau de production', type: 'header4' },
  {
    key: 'tableProductionHTML',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdHTML', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsCaracteresHTML', label: 'Nombre de caractères', type: 'text' },
    ]
  },

];