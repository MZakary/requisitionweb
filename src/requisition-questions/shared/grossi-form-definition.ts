export const grossiFormFields = [
  { label: 'Caractères agrandis - informations générales', type: 'header4' },
  { key: 'noFichierGrossi', label: 'Numéro du fichier', label2:"Caractères agrandis - Informations générales", type: 'text' },
  { key: 'dateRequiseGrossi', label: 'Date requise', type: 'text' },
  { key: 'reimpressionGrossi', label: 'Réimpression', type: 'checkbox' },
  { key: 'quantiteGrossi', label: 'Quantité', type: 'text' },
  { key: 'nbsPageImprimeeGrossi', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulteGrossi', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
      { label: 'Musical', value: 'musical' },
    ]
  },
  { key: 'typePoliceGrossi', label: 'Type de police de caractères', type: 'text' },
  { key: 'taillePoliceGrossi', label: 'Taille de police de caractères', type: 'text' },
  { key: 'FormatGrossi', label: 'Format', type: 'select',
    options: [
      { label: '8 1/2 x 11', value: 'format8demi11' },
      { label: '8 1/2 x 14', value: 'format8demi14' },
      { label: '11 x 17', value: 'format11par17' },
      { label: 'Autre', value: 'formatAutre' },
    ]
  },
  { key: 'autreFormatGrossi', label: 'Si autre, spécifier', type: 'text' },
  { key: 'monochromeGrossi', label: 'Monochrome', type: 'checkbox' },
  { key: 'couleurGrossi', label: 'Couleur', type: 'checkbox' },
  { key: 'graphiqueGrossi', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },
  { key: 'envoiCourrielSeulGrossi', label: 'Envoi par courriel seulement', type: 'checkbox' },

  { label: 'Caractères agrandis - impression', type: 'header4' },
  { key: 'impressionGrossi', type: 'checkbox-list',
    options: [
      { label: 'XEROX', value: 'xerox', label2: "Caractères agrandis - Impression" },
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },

  { label: 'Caractères agrandis - finition et montage', type: 'header4' },
  { key: 'typeTeneurGrossi', type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'broche', label2: "Caractères agrandis - Finition et montage" },
      { label: 'Cerlox', value: 'cerlox' },
      { label: 'Wire-O', value: 'wireO' },
    ]
  },
  { key: 'typeCouvertureGrossi', type: 'checkbox-list',
    options: [
      { label: 'Couverture vinyle', value: 'couvVinyle' },
      { label: 'Couverture plastifiée couleur', value: 'couvPlasCouleur' },
      { label: 'Couverture plastifiée monochrome', value: 'couvPlasMonochrome' },
      { label: 'Couverture personnalisée', value: 'couvPersonnalisee' },
      { label: 'Page endos du service', value: 'pageEndos' },
      { label: 'Étiquette imprimée', value: 'etiqImprimee' },
      { label: 'Page titre imprimée', value: 'pageTitreImprimee' },
    ]
  },
  { key: 'libelleEtiquetteGrossi', label: 'Libellé de l\'étiquette', type: 'text' },
  { key: 'autreFinitionGrossi', label: 'Autre', type: 'text' },

  { label: 'Caractères agrandis - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceGrossi', label: 'Nom/Description', label2:"Caractères agrandis - nom du fichier source ou description de la production", type: 'textarea' },
  
  { label: 'Caractères agrandis - commentaire', type: 'header4' },
  { key: 'grossiCommentaire', label: 'Commentaire', type: 'textarea', label2: 'Caractères agrandis - commentaire' },
  
  { label: 'Caractères agrandis - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiGrossi', label: 'Nom', label2:"Caractères agrandis - Informations tech. multimédia", type: 'text' },
  { key: 'dateTermineMultiGrossi', label: 'Terminé le', type: 'text' },
  { key: 'noHeureMultiGrossi', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiGrossi', label: 'Commentaire', type: 'textarea' },

   { label: 'Caractères agrandis - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineGrossi', label: 'Terminé?', label2:"Caractères agrandis - Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualGrossi', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualGrossi', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualGrossi', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualGrossi', label: 'Commentaire', type: 'textarea' },

  { label: 'Caractères agrandis - tableau de production', type: 'header4' },
  {
    key: 'tableProductionGrossi',
    label: 'Caractères agrandis - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdGrossi', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPageGrossi', label: 'Nombre de pages', type: 'text' },
      { key: 'nbsCaracteresGrossi', label: 'Nombre de caractères', type: 'text' },
      { key: 'noteProdGrossi', label: 'Notes Prod.', type: 'text' }
    ]
  },

];