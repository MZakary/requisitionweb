export const dessinFormFields = [
  { label: 'Dessin - Informations générales', type: 'header4' },
  { key: 'noFichierDessin', label: 'Numéro du fichier', label2:"Dessin - Informations Générales", type: 'text' },
  { key: 'dateRequiseDessin', label: 'Date requise', type: 'text' },
  { key: 'reimpressionDessin', label: 'Réimpression', type: 'checkbox' },
  { key: 'quantiteDessin', label: 'Quantité', type: 'text' },
  { key: 'nbsEstimeDessin', label: 'Nombre de dessin estimé (si nécessaire)', type: 'text' },
    { key: 'typeCheckboxDessin', type: 'checkbox-list',
    options: [
      { label: 'Dessin tactile', value: 'dessinTactile' },
      { label: 'Dessin en caractères agrandis', value: 'dessinCaractAgrandis' },
    ]
  },
  { key: 'niveauDifficulteDessin', label: 'Niveau de difficulté', type: 'select',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Complexe', value: 'complexe' },
    ]
  },
  { key: 'typeBrailleCheckboxDessin', type: 'checkbox-list',
    options: [
      { label: 'Braille abrégé', value: 'abregeBraille' },
      { label: 'Braille intégral', value: 'integralBraille' },
    ]
  },
  { key: 'codeBrailleBaseDessin', label: 'Code braille de base', type: 'select',
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
  { key: 'autreCodeBrailleDessin', label: 'Si autre, spécifier', type: 'text' },
  { key: 'typePoliceCaracteresDessin', label: 'Type de police de caractères', type: 'text' },
  { key: 'taillePoliceCaracteresDessin', label: 'Taille de police de caractères', type: 'text' },
  
  { key: 'formatDessin', label: 'Format', type: 'select',
    options: [
      { label: '11 x 11,5', value: '11x11.5' },
      { label: '8 1/2 x 11', value: '81/2x11' },
      { label: '8 1/2 x 14', value: '81/2x14' },
      { label: '11 x 17', value: '11x17' },
      { label: '25x30', value: '25x30' },
      { label: '25x40', value: '25x40' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreFormatDessin', label: 'Si autre, spécifier', type: 'text' },
  { key: 'typeCouleurAChoisirDessin', type: 'checkbox-list',
    options: [
      { label: 'Monochrome', value: 'monochromeDessin' },
      { label: 'Couleur', value: 'couleurDessin' },
    ]
  },

  { label: 'Dessin - impression et/ou embossage', type: 'header4' },
  { key: 'typeImpressionDessin', type: 'checkbox-list',
    options: [
      { label: 'ViewPlus', value: 'viewplus', label2:"Dessin - Impression et/ou embossage" },
      { label: 'XEROX', value: 'xerox' },
      { label: 'autre', value: 'autreTypeImpression' },
    ]
  },
  { key: 'autretypeImpressionDessin', label: 'Si autre, spécifier', type: 'text' },

  { key: 'rectoVersoCheckboxDessin', type: 'checkbox-list',
    options: [
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' },
    ]
  },
  { key: 'materielDessin', label: 'Matériel', type: 'select',
    options: [
      { label: 'Papier', value: 'papier' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Braille Label', value: 'brailleLabel' },
      { label: 'Carton', value: 'carton' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'autreMaterielDessin', label: 'Si autre, spécifier', type: 'text' },
  
  { label: 'Dessin - finition et montage', type: 'header4' },
  { key: 'typeTeneurDessin', type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'broche', label2:"Dessin - Finition et montage" },
      { label: 'Cerlox', value: 'cerlox' },
      { label: 'Wire-O', value: 'wireO' },
    ]
  },
  { key: 'typeCouvertureDessin', type: 'checkbox-list',
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
      { label: 'Joint avec le texte', value: 'joinAvecTexte' },
      { label: 'Autre', value: 'autreTypeCouv' },
    ]
  },
  { key: 'autreTypeCouvDessin', label: 'Si autre, spécifier', type: 'text' },
  { key: 'specificationMontageDessin', label: 'Spécification du montage', type: 'text' },


  { label: 'Dessin - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceDessin', label: 'Nom/Description', label2:" Dessin - Nom du fichier source ou description de la production", type: 'textarea' },
  
  { label: 'Dessin - commentaire', type: 'header4' },
  { key: 'commentaireDessin', label: 'Commentaire', type: 'textarea', label2: 'Dessin - Commentaire' },
  
  { label: 'Dessin - informations tech. multimédia', type: 'header4' },
  { key: 'nomTechMultiDessin', label: 'Nom', label2:"Dessin - Informations tech. multimédia", type: 'text' },
  { key: 'dateTermineMultiDessin', label: 'Terminé le', type: 'text' },
  { key: 'noHeureMultiDessin', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechMultiDessin', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Dessin - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineDessin', label: 'Terminé?', label2:"Dessin - Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualDessin', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualDessin', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualDessin', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualDessin', label: 'Commentaire', type: 'textarea' },

  { label: 'Dessin - tableau de production', type: 'header4' },
  {
    key: 'tableProductionDessin',
    label: 'Dessin - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdDessin', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsPageProdDessin', label: 'Nombre de pages', type: 'text' },
      { key: 'nbsDessins', label: 'Nombre de dessins', type: 'text' },
      { key: 'noteProdDessin', label: 'Notes Prod.', type: 'text' }
    ]
  },

  { label: 'Dessin - tableau des étiquettes', type: 'header4' },
  {
    key: 'tableEtiquettesDessin',
    label: 'Tableau des étiquettes',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichierEtiqDessin', label: 'Numéro du fichier .dxb', type: 'text' },
      { key: 'libEtiqDessin', label: "Libellé de l’étiquette", type: 'text' },
      { key: 'noteEtiqDessin', label: 'Notes Prod.', type: 'text' }
    ]
  },
];