export const agrandisFormFields = [
  { label: 'Agrandissement - informations générales', type: 'header4' },
  { key: 'dateRequiseAgrandissement', label: 'Date requise', type: 'text' },
  { key: 'quantiteAgrandissement', label: 'Quantité', type: 'text' },
  { key: 'nbsPageImprimeeAgrandissement', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'agrandissementPourcentage', label: 'Agrandissement %', type: 'text' },
  { key: 'taillePolice', label: 'Taille de police de caractères', type: 'text' },
  { key: 'formatAgrandissement', label: 'Format', type: 'text' },  { key: 'FormatGrossi', label: 'Format', type: 'select',
    options: [
      { label: '8 1/2 x 11', value: 'format8demi11' },
      { label: '8 1/2 x 14', value: 'format8demi14' },
      { label: '11 x 17', value: 'format11par17' },
      { label: 'Autre', value: 'formatAutre' },
    ]
  },
  { key: 'autreFormat', label: 'Si autre, spécifier', type: 'text' },
  { key: 'monochromeAgrandissement', label: 'Monochrome', type: 'checkbox' },
  { key: 'couleurAgrandissement', label: 'Couleur', type: 'checkbox' },

  { label: 'Agrandissement - impression', type: 'header4' },
  { key: 'impressionAgrandissement', type: 'checkbox-list',
    options: [
      { label: 'XEROX', value: 'xerox' },
      { label: 'Recto', value: 'recto' },
      { label: 'Recto/Verso', value: 'rectoVerso' }
    ]
  },
  { key: 'typeTeneurAgrandissement', type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'broche' },
      { label: 'Cerlox', value: 'cerlox' },
      { label: 'Wire-O', value: 'wireO' },
    ]
  },
  { key: 'typeCouvertureAgrandissement', type: 'checkbox-list',
    options: [
      { label: 'Couverture vinyle', value: 'couvVinyle' },
      { label: 'Couverture plastifiée couleur', value: 'couvPlasCouleur' },
      { label: 'Couverture plastifiée monochrome', value: 'couvPlasMonochrome' },
      { label: 'Couverture personnalisée', value: 'couvPersonnalisee' },
      { label: 'Page endos du service', value: 'pageEndos' },
      { label: 'Autre', value: 'couvAutre' },
    ]
  },
  { key: 'autreCouv', label: 'Si autre, spécifier', type: 'text' },

  { label: 'Agrandissement - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceAgrandissement', label: 'Nom du fichier source', type: 'text' },
  
  { label: 'Agrandissement - commentaire', type: 'header4' },
  { key: 'commentaireAgrandissement', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Agrandissement - informations tech.', type: 'header4' },
  { key: 'nomTech', label: 'Nom', type: 'text' },
  { key: 'dateTermineTech', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTech', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTech', label: 'Commentaire', type: 'textarea' },

  { label: 'Agrandissement - contrôle de qualité', type: 'header4' },
  { key: 'nomContQual', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQual', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQual', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQual', label: 'Commentaire', type: 'textarea' },

  { label: 'Agrandissement - tableau de production', type: 'header4' },
  {
    key: 'tableProductionAgrandissement',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'nbsPage', label: 'Nombre de pages', type: 'text' },
      { key: 'noteProd', label: 'Notes Prod.', type: 'text' }
    ]
  },

];