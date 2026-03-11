// braille-form-definition.ts
import {
  BRAILLE_DIFFICULTY_OPTIONS,
  BRAILLE_CODE_BASE_OPTIONS,
  FORMAT_BRAILLE_OPTIONS,
  EMBOSSAGE_OPTIONS,
  MATERIAL_OPTIONS,
  TECH_NAME_OPTIONS
} from '../dropdown-options'

export const brailleFormFields = [
  { label: 'Braille - Informations générales', type: 'header4' },
  { key: 'noFichierBraille', label: 'Numéro du fichier .txt', label2: "Braille - Informations Générales", type: 'text' },
  { key: 'dateDemandeBraille', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseBraille', label: 'Date requise', type: 'text' },
  { key: 'reimpressionBraille', label: 'Réimpression', type: 'checkbox' },
  { key: 'quantiteBraille', label: 'Quantité', type: 'text' },
  { key: 'noPageImprimeesBraille', label: 'Nombre de pages imprimées', type: 'text' },
  {
    key: 'niveauDifficulteBraille',
    label: 'Niveau de difficulté',
    type: 'select',
    options: BRAILLE_DIFFICULTY_OPTIONS
  },
  {
    key: 'typeBrailleCheckboxBraille',
    type: 'checkbox-list',
    options: [
      { label: 'Braille abrégé', value: 'abregeBraille' },
      { label: 'Braille intégral', value: 'integralBraille' },
    ]
  },
  {
    key: 'codeBrailleBaseBraille',
    label: 'Code braille de base',
    type: 'select',
    options: BRAILLE_CODE_BASE_OPTIONS
  },
  { key: 'autreCodeBraille', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'formatBraille',
    label: 'Format',
    type: 'select',
    options: FORMAT_BRAILLE_OPTIONS
  },
  { key: 'autreFormatBraille', label: 'Si autre, spécifier', type: 'text' },
  { key: 'graphiqueBraille', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },

  { label: 'Braille - finition et montage', type: 'header4' },
  {
    key: 'typeFeuilleBraille',
    type: 'checkbox-list',
    options: [
      { label: 'Recto', value: 'recto', label2: "Braille - Finition et montage" },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },
  {
    key: 'embossageBraille',
    label: 'Embossage',
    type: 'select',
    options: EMBOSSAGE_OPTIONS
  },
  { key: 'autreEmbossageBraille', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'materielBraille',
    label: 'Matériel',
    type: 'select',
    options: MATERIAL_OPTIONS
  },
  { key: 'autreMaterielBraille', label: 'Si autre, spécifier', type: 'text' },
  {
    key: 'typeTeneurBraille',
    type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'broche' },
      { label: 'Cerlox', value: 'cerlox' },
      { label: 'Wire-O', value: 'wireO' },
    ]
  },
  {
    key: 'typeCouvertureBraille',
    type: 'checkbox-list',
    options: [
      { label: 'Couverture vinyle', value: 'couvVinyle' },
      { label: 'Couverture plastifiée couleur', value: 'couvPlasCouleur' },
      { label: 'Couverture plastifiée monochrome', value: 'couvPlasMonochrome' },
      { label: 'Couverture personnalisée', value: 'couvPersonnalisee' },
      { label: 'Page endos du service', value: 'pageEndos' },
      { label: 'Étiquette braille', value: 'etiqBraille' },
      { label: 'Étiquette imprimée', value: 'etiqImprimee' },
      { label: 'Page titre braille', value: 'pageTitreBraille' },
      { label: 'Page titre imprimée', value: 'pageTitreImprimee' },
      { label: 'Autre', value: 'autreTypeCouv' },
    ]
  },
  { key: 'autreTypeCouvBraille', label: 'Si autre, spécifier', type: 'text' },

  { label: 'Braille - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceBraille', label: 'Nom/Description', label2: "Braille - Nom du fichier source ou description de la production", type: 'textarea' },

  { label: 'Braille - spécifications du client', type: 'header4' },
  { key: 'specificationsClientBraille', label: 'Spécifications du client', type: 'textarea', label2: "Braille - Spécifications du client" },

  { label: 'Braille - commentaire', type: 'header4' },
  { key: 'commentaireBraille', label: 'Commentaire', type: 'textarea', label2: 'Braille - commentaire' },

  { label: 'Braille - informations tech. multimédia', type: 'header4' },
  {
    key: 'tableTechMultiBraille',
    // label: 'Braille - Tableau des techs',
    label2: "Braille - informations tech. multimédia",
    addTotal: true,
    totalKey: 'noHeurePrisTechMultiBraille',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechMultiBraille',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      { key: 'dateTermineTechMultiBraille', label: 'Terminé le', type: 'date' },
      { key: 'noHeurePrisTechMultiBraille', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechMultiBraille', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Braille - informations tech. tactile', type: 'header4' },
  {
    key: 'tableTechTactileBraille',
    // label: 'Braille - Tableau des techs',
    label2: "Braille - Informations tech. tactile",
    addTotal: true,
    totalKey: 'noHeurePrisTechTactileBraille',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechTactileBraille',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      { key: 'dateTermineTechTactileBraille', label: 'Terminé le', type: 'date' },
      { key: 'noHeurePrisTechTactileBraille', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechTactileBraille', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Braille - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineBraille', label: 'Terminé?', label2: "Braille - Contrôle de qualité", type: 'checkbox' },
  {
    key: 'tableContQualBraille',
    // label: 'Braille - Tableau des techs',
    // label2: "Braille - Informations tech. tactile",
    addTotal: true,
    totalKey: 'noHeurePrisContQualBraille',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomContQualBraille',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      { key: 'dateTermineContQualBraille', label: 'Terminé le', type: 'date' },
      { key: 'noHeurePrisContQualBraille', label: "Nombre d'heure(s) CDQ", type: 'time' },
      { key: 'commentaireContQualBraille', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Braille - tableau de production', type: 'header4' },
  {
    key: 'tableProductionBraille',
    label: 'Braille - Tableau de production',
    type: 'dynamicTable',
    addTotal: true,
    totalKey: 'nbsPageProdBraille',
    columns: [
      { key: 'noFichProdBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'detProdBraille', label: 'Détail de la pagination', type: 'textarea' },
      { key: 'nbsPageProdBraille', label: 'Nombre de pages total (pair)', type: 'textarea' },
      { key: 'noteProdBraille', label: 'Notes Prod.', type: 'textarea' }
    ],
    defaultValues: {
      0: { detProdBraille: "Page de l'imprimé: \nPages braille: P1-P3; 1-; T1" },
      1: { detProdBraille: "Page de l'imprimé: \nPages braille: P1-P3; 1-; T1" },
    },
    defaultRowCount: 2,
  },

  { label: 'Braille - tableau des étiquettes', type: 'header4' },
  {
    key: 'tableEtiquettesBraille',
    label: 'Braille - Tableau des étiquettes',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichierEtiqBraille', label: 'Numéro du fichier .dxb', type: 'textarea' },
      { key: 'libEtiqBraille', label: 'Libellé de l’étiquette', type: 'textarea' },
      { key: 'noteEtiqBraille', label: 'Notes Prod.', type: 'textarea' }
    ]
  },
];