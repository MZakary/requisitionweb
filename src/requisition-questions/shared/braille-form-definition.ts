// production-forms/braille-form-definition.ts
export const brailleFormFields = [
  { label: 'Braille - Informations générales', type: 'header4' },
  { key: 'noFichierBraille', label: 'Numéro du fichier .txt', type: 'text' },
  { key: 'dateRequiseBraille', label: 'Date requise', type: 'text' },
  { key: 'reimpressionBraille', label: 'Réimpression', type: 'checkbox' },
  { key: 'quantiteBraille', label: 'Quantité', type: 'text' },
  { key: 'noPageImprimeesBraille', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'niveauDifficulteBraille', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
      { label: 'Musical simple', value: 'musicalSimple' },
      { label: 'Musical intermédiaire', value: 'musicalIntermediaire' },
      { label: 'Musical complexe', value: 'musicalComplexe' },
    ]
  },
  { key: 'abrege', label: 'Braille abrégé', type: 'checkbox' },
  { key: 'integral', label: 'Braille intégral', type: 'checkbox' },
  { key: 'codeBrailleBase', label: 'Code braille de base', type: 'select',
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
  { key: 'format', label: 'Format', type: 'select',
    options: [
      { label: '25x30', value: '25x30' },
      { label: '25x40', value: '25x40' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreFormat', label: 'Si autre, spécifier', type: 'text' },
  { key: 'graphique', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },


  { label: 'Braille - finition et montage', type: 'header4' },
  { key: 'typeFeuille', type: 'checkbox-list',
    options: [
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },
  { key: 'embossage', label: 'Embossage', type: 'select',
    options: [
      { label: 'Braillo', value: 'braillo' },
      { label: 'ViewPlus', value: 'viewplus' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreEmbossage', label: 'Si autre, spécifier', type: 'text' },
  { key: 'materiel', label: 'Matériel', type: 'select',
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
  { key: 'autreMateriel', label: 'Si autre, spécifier', type: 'text' },
  { key: 'typeTeneur', type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'broche' },
      { label: 'Cerlox', value: 'cerlox' },
      { label: 'Wire-O', value: 'wireO' },
    ]
  },
  { key: 'typeCouverture', type: 'checkbox-list',
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

  { label: 'Braille - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSource', label: 'Nom du fichier source', type: 'text' },
  
  { label: 'Braille - commentaire', type: 'header4' },
  { key: 'brailleCommentaire', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMulti', label: 'Nom', type: 'text' },
  { key: 'dateTermineMulti', label: 'Terminé le', type: 'text' },
  { key: 'noHeureMulti', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMulti', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - informations tech. tactile', type: 'header4' },
  { key: 'nomTechTactile', label: 'Nom', type: 'text' },
  { key: 'dateTermineTactile', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTactile', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechTactile', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Braille - contrôle de qualité', type: 'header4' },
  { key: 'nomContQual', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQual', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQual', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQual', label: 'Commentaire', type: 'textarea' },

  { label: 'Braille - tableau de production', type: 'header4' },
  {
    key: 'tableProduction',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProd', label: 'Numéro du fichier .dxb', type: 'text' },
      { key: 'detProd', label: 'Détail de la pagination', type: 'text' },
      { key: 'nbsPageProd', label: 'Nombre de pages total (pair)', type: 'text' },
      { key: 'noteProd', label: 'Notes Prod.', type: 'text' }
    ]
  },

  { label: 'Braille - tableau des étiquettes', type: 'header4' },
  {
    key: 'tableEtiquettes',
    label: 'Tableau des étiquettes',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichierEtiq', label: 'Numéro du fichier .dxb', type: 'text' },
      { key: 'libEtiq', label: 'Libellé de l’étiquette', type: 'text' },
      { key: 'noteEtiq', label: 'Notes Prod.', type: 'text' }
    ]
  },
];