export const grossiFormFields = [
  { label: 'Caractères agrandis - informations générales', type: 'header4' },
  { key: 'noFichierGrossi', label: 'Numéro du fichier .txt', type: 'text' },
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
  { key: 'typePolice', label: 'Type de police de caractères', type: 'text' },
  { key: 'taillePolice', label: 'Taille de police de caractères', type: 'text' },
  { key: 'FormatGrossi', label: 'Format', type: 'select',
    options: [
      { label: '8 1/2 x 11', value: 'format8demi' },
      { label: 'Complexe', value: 'complexe' },
      { label: 'Musical', value: 'musical' },
    ]
  },
  { key: 'autreFormat', label: 'Si autre, spécifier', type: 'text' },
  { key: 'monochromeGrossi', label: 'Monochrome', type: 'checkbox' },
  { key: 'couleurGrossi', label: 'Couleur', type: 'checkbox' },
  { key: 'graphiqueGrossi', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },
  { key: 'envoiCourrielSeul', label: 'Envoi par courriel seulement', type: 'checkbox' },

  { label: 'Caractères agrandis - impression', type: 'header4' },
  { key: 'impressionGrossi', type: 'checkbox-list',
    options: [
      { label: 'XEROX', value: 'xerox' },
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },
  { key: 'typeTeneurGrossi', type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'broche' },
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
      { label: 'Étiquette braille', value: 'etiqBraille' },
      { label: 'Étiquette imprimée', value: 'etiqImprimee' },
      { label: 'Page titre braille', value: 'pageTitreBraille' },
      { label: 'Page titre imprimée', value: 'pageTitreImprimee' },
    ]
  },
  { key: 'libelleEtiquetteGrossi', label: 'Libellé de l\'étiquette', type: 'text' },
  { key: 'autreFinitionGrossi', label: 'Autre', type: 'text' },

  { label: 'Caractères agrandis - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceGrossi', label: 'Nom du fichier source', type: 'text' },
  
  { label: 'Caractères agrandis - commentaire', type: 'header4' },
  { key: 'grossiCommentaire', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Caractères agrandis - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMulti', label: 'Nom', type: 'text' },
  { key: 'dateTermineMulti', label: 'Terminé le', type: 'text' },
  { key: 'noHeureMulti', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMulti', label: 'Commentaire', type: 'textarea' },

   { label: 'Caractères agrandis - contrôle de qualité', type: 'header4' },
  { key: 'nomContQual', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQual', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQual', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQual', label: 'Commentaire', type: 'textarea' },

  { label: 'Caractères agrandis - tableau de production', type: 'header4' },
  {
    key: 'tableProductionGrossi',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProd', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPage', label: 'Nombre de pages', type: 'text' },
      { key: 'nbsCaracteres', label: 'Nombre de caractères', type: 'text' },
      { key: 'noteProd', label: 'Notes Prod.', type: 'text' }
    ]
  },

];