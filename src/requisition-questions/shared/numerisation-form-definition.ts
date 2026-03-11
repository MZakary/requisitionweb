import {
  TECH_NAME_OPTIONS
} from '../dropdown-options'

export const numerisationFormFields = [
  { label: 'Numérisation - informations générales', type: 'header4' },
  { key: 'noFichierNum', label: 'Numéro du fichier', label2: "Numérisation - Informations générales", type: 'text' },
  { key: 'dateDemandeNum', label: 'Date de la demande', type: 'text' },

  { key: 'dateRequiseNum', label: 'Date requise', type: 'text' },
  { key: 'nbsPageImprimeeNum', label: 'Nombre de pages imprimées', type: 'text' },
  {
    key: 'FormatNum', label: 'Format', type: 'select',
    options: [
      { label: '8 1/2 x 11', value: 'format8demi11' },
      { label: '8 1/2 x 14', value: 'format8demi14' },
      { label: '11 x 17', value: 'format11par17' },
      { label: 'Autre', value: 'formatAutre' },
    ]
  },
  { key: 'autreFormatNum', label: 'Si autre, spécifier', type: 'text' },
  { key: 'monochromeNum', label: 'Monochrome', type: 'checkbox' },
  { key: 'couleurNum', label: 'Couleur', type: 'checkbox' },

  { label: 'Numérisation - finition et montage', type: 'header4' },
  { key: "courrielCheckNum", label: 'Courriel', label2: "Numérisation - Finition et montage", type: 'checkbox' },
  { key: "autreExpliquationNum", label: 'Courriel', type: 'text' },

  { label: 'Numérisation - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceNum', label: 'Nom/Description', label2: "Numérisation - nom du fichier source ou description de la production", type: 'textarea' },

  { label: 'Numérisation - spécifications du client', type: 'header4' },
  { key: 'specificationsClientNum', label: 'Spécifications du client', type: 'textarea', label2: "Numérisation - spécifications du client" },

  { label: 'Numérisation - commentaire', type: 'header4' },
  { key: 'commentaireNum', label: 'Commentaire', type: 'textarea', label2: "Numérisation - commentaire" },

  { label: 'Numérisation - informations tech.', type: 'header4' },
  {
    key: 'tableTechNum',
    addTotal: true,
    label2: "Numérisation - Informations tech. multimédia",
    totalKey: 'noHeureTechMultiHTML',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechNum',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineTechNum', label: 'Terminé le', type: 'date' },
      { key: 'noHeureTechNum', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechNum', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Numérisation - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineNum', label: 'Terminé?', label2: "Numérisation - Contrôle de qualité", type: 'checkbox' },
  {
    key: 'tableContQualNum',
    addTotal: true,
    // label2: "Numérisation - Informations tech. multimédia",
    totalKey: 'noHeureContQualNum',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomContQualNum',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineContQualNum', label: 'Terminé le', type: 'date' },
      { key: 'noHeureContQualNum', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireContQualNum', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Numérisation - tableau de production', type: 'header4' },
  {
    key: 'tableProductionNum',
    label: 'Numérisation - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdNum', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPageNum', label: 'Nombre de pages', type: 'text' },
    ]
  },

];