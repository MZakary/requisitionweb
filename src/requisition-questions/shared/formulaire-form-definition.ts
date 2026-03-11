import {
  TECH_NAME_OPTIONS
} from '../dropdown-options'
export const formulaireFormFields = [
  { label: 'Formulaire - informations générales', type: 'header4' },
  { key: 'noFichierFormulaire', label: 'Numéro du fichier', label2: "Formulaire - Informations générales", type: 'text' },
  { key: 'dateDemandeFormulaire', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseFormulaire', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeeFormulaire', label: 'Nombre de pages imprimées', type: 'text' },
  {
    key: 'typeFormFormulaire', label: 'Type de formulaire', type: 'select',
    options: [
      { label: 'Word', value: 'word' },
      { label: 'PDF', value: 'pdf' }
    ]
  },
  { key: "siWordFormulaire", label: 'Si Word, préciser le type et la taille de police de caractères', type: 'text' },
  {
    key: 'niveauDifficulteFormulaire', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' }
    ]
  },

  { label: 'Formulaire - finition et montage', type: 'header4' },
  { key: "courrielCheckboxFormulaire", label: 'Courriel', label2: "Formulaire - Finition et montage", type: 'checkbox' },
  { key: "autreExpliquationFormulaire", label: 'Courriel', type: 'text' },

  { label: 'Formulaire - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceFormulaire', label: 'Nom/Description', label2: "Formulaire - Nom du fichier source ou description de la production", type: 'textarea' },

  { label: 'Formulaire - spécifications du client', type: 'header4' },
  { key: 'specificationsClientFormulaire', label: 'Spécifications du client', type: 'textarea', label2: "Formulaire - Spécifications du client" },

  { label: 'Formulaire - commentaire', type: 'header4' },
  { key: 'commentaireFormulaire', label: 'Commentaire', type: 'textarea', label2: "Formulaire - Commentaire" },

  { label: 'Formulaire - informations tech. multimédia', type: 'header4' },
  {
    key: 'tableTechMultiFormulaire',
    addTotal: true,
    label2: "Formulaire - informations tech. multimédia",
    totalKey: 'noHeureTechMultiFormulaire',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechMultiFormulaire',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineTechMultiFormulaire', label: 'Terminé le', type: 'date' },
      { key: 'noHeureTechMultiFormulaire', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechMultiFormulaire', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Formulaire - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineFormulaire', label: 'Terminé?', label2: "Formulaire - Contrôle de qualité", type: 'checkbox' },
  {
    key: 'tableContQualFormulaire',
    addTotal: true,
    // label2: "Formulaire - tech. multimédia",
    totalKey: 'noHeureContQualFormulaire',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomContQualFormulaire',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineContQualFormulaire', label: 'Terminé le', type: 'date' },
      { key: 'noHeureContQualFormulaire', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireContQualFormulaire', label: 'Commentaire', type: 'textarea' }
    ]
  },

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