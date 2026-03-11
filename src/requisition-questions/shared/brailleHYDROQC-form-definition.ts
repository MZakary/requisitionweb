import {
  TECH_NAME_OPTIONS
} from '../dropdown-options'

export const brailleHYDROQCFormFields = [
  { label: 'Braille - Informations générales', type: 'header4' },
  { key: 'noFichierBraille', label: 'Numéro du fichier .txt', label2: "Braille - Informations Générales", type: 'text' },
  { key: 'dateDemandeBraille', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseBraille', label: 'Date requise', type: 'text' },
  { key: 'quantiteBraille', label: 'Quantité', type: 'text', defaultValue: '1' },
  { key: 'noPageImprimeesBraille', label: 'Nombre de pages imprimées', type: 'text' },
  {
    key: 'niveauDifficulteBraille', label: 'Niveau de difficulté', type: 'select', defaultValue: 'standard',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
      { label: 'Musical simple', value: 'musicalSimple' },
      { label: 'Musical intermédiaire', value: 'musicalIntermediaire' },
      { label: 'Musical complexe', value: 'musicalComplexe' },
    ]
  },
  {
    key: 'typeBrailleCheckboxBraille', type: 'checkbox-list',
    options: [
      { label: 'Braille abrégé', value: 'abregeBraille' },
      { label: 'Braille intégral', value: 'integralBraille' },
    ]
  },
  {
    key: 'codeBrailleBaseBraille', label: 'Code braille de base', type: 'select',
    options: [
      { label: 'CBFU', value: 'cbfu' },
      { label: 'Anglais UEB', value: 'aueb' },
      { label: 'Anglais BANA', value: 'abana' },
      { label: 'CBSQ/CBI', value: 'cbsq' },
      { label: 'Nemeth', value: 'nemeth' },
      { label: 'Informatique', value: 'informatique' },
      { label: 'Musique', value: 'musique' },
      { label: 'Signalisation', value: 'signalisation' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreCodeBraille', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'formatBraille', label: 'Format', type: 'select', defaultValue: '25x30',
    options: [
      { label: '25x30', value: '25x30' },
      { label: '25x40', value: '25x40' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreFormatBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'graphiqueBraille', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },


  { label: 'Braille - finition et montage', type: 'header4' },
  {
    key: 'typeFeuilleBraille', type: 'checkbox-list', defaultValue: ['rectoVerso'],
    options: [
      { label: 'Recto', value: 'recto', label2: "Braille - Finition et montage" },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },
  {
    key: 'embossageBraille', label: 'Embossage', type: 'select', defaultValue: 'braillo',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'ViewPlus', value: 'viewplus' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossageBraille', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'materielBraille', label: 'Matériel', type: 'select', defaultValue: 'papierSansTrous',
    options: [
      { label: 'Papier avec trous', value: 'papierAvecTrous' },
      { label: 'Papier sans trous', value: 'papierSansTrous' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille label', value: 'brailleLabel' },
      { label: 'Plaque argent', value: 'plaqueArgent' },
      { label: 'Plaque noire', value: 'plaqueNoire' },
      { label: 'Plaque dorée', value: 'plaqueDoree' },
      { label: 'Plaque de zinc', value: 'plaqueZinc' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'brocheHydroQCBraille', type: 'checkbox', label: "Broché", defaultValue: true },

  { label: 'Braille - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceBraille', label: 'Nom/Description', label2: "Braille - Nom du fichier source ou description de la production", type: 'textarea' },

  { label: 'Braille - spécifications du client', type: 'header4' },
  { key: 'specificationsClientBraille', label: 'Spécifications du client', type: 'textarea', label2: "Braille - Spécifications du client" },

  { label: 'Braille - commentaire', type: 'header4' },
  { key: 'commentaireBraille', label: 'Commentaire', type: 'textarea', label2: 'Braille - commentaire' },


  { label: 'Braille - Informations tech. multimédia', type: 'header4' },
  {
    key: 'tableTechMultiBraille',
    addTotal: true,
    label2: "Braille - Informations tech. multimédia",
    totalKey: 'noHeureMultiBraille',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechMultiBraille',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineMultiBraille', label: 'Terminé le', type: 'date' },
      { key: 'noHeureMultiBraille', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechMultiBraille', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Braille - Informations tech. tactile', type: 'header4' },
  {
    key: 'tableTechTactileBraille',
    addTotal: true,
    label2: "Braille - Informations tech. tactile",
    totalKey: 'noHeureTactileBraille',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechTactileBraille',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineTactileBraille', label: 'Terminé le', type: 'date' },
      { key: 'noHeureTactileBraille', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechTactileBraille', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Braille - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBraille', label: 'Terminé?', label2: "Braille - Contrôle de qualité", type: 'checkbox' },
  {
    key: 'tableCQTermineBraille',
    addTotal: true,
    // label2: "Braille - Informations tech. tactile",
    totalKey: 'noHeureContQualBraille',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomContQualBraille',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineContQualBraille', label: 'Terminé le', type: 'date' },
      { key: 'noHeureContQualBraille', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireContQualBraille', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Braille - tableau de production', type: 'header4' },
  {
    key: 'tableProductionBraille',
    label: 'Braille - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'text' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'text' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'text' },
    ]
  },
];