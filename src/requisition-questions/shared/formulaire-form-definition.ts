export const formulaireFormFields = [
  { label: 'Formulaire - informations générales', type: 'header4' },
  { key: 'noFichierFormulaire', label: 'Numéro du fichier', label2:"Formulaire - Informations générales", type: 'text' },
  { key: 'dateRequiseFormulaire', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeeFormulaire', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'typeFormFormulaire', label: 'Type de formulaire', type: 'select',
    options: [
      { label: 'Word', value: 'word' },
      { label: 'PDF', value: 'pdf' }
    ]
  },
  { key:"siWordFormulaire", label: 'Si Word, préciser le type et la taille de police de caractères', type: 'text' },
  { key: 'niveauDifficulteFormulaire', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' }
    ]
  },

  { label: 'Formulaire - finition et montage', type: 'header4' },
  { key:"courrielCheckboxFormulaire", label: 'Courriel', label2:"Formulaire - Finition et montage", type: 'checkbox' },
  { key:"autreExpliquationFormulaire", label: 'Courriel', type: 'text' },

  { label: 'Formulaire - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceFormulaire', label: 'Nom/Description', label2:"Formulaire - Nom du fichier source ou description de la production", type: 'textarea' },
  
  { label: 'Formulaire - commentaire', type: 'header4' },
  { key: 'commentaireFormulaire', label: 'Commentaire', type: 'textarea', label2:"Formulaire - Commentaire" },
  
  { label: 'Formulaire - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiFormulaire', label: 'Nom', label2:"Formulaire - tech. multimédia", type: 'text' },
  { key: 'dateTermineTechMultiFormulaire', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTechMultiFormulaire', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiFormulaire', label: 'Commentaire', type: 'textarea' },

  { label: 'Formulaire - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineFormulaire', label: 'Terminé?', label2:"Formulaire - Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualFormulaire', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualFormulaire', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualFormulaire', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualFormulaire', label: 'Commentaire', type: 'textarea' },

  { label: 'Formulaire - tableau de production', type: 'header4' },
  {
    key: 'tableProductionFormulaire',
    label: 'Formulaire - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdFormulaire', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPagesFormulaire', label: 'Nombre de pages', type: 'text' },
    ]
  },

];