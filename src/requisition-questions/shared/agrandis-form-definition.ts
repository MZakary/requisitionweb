export const agrandisFormFields = [
  { label: 'Agrandissement - informations générales', type: 'header4' },
  { key: 'numFichierAgrandissement', label: 'Numéro du fichier',label2:"informations générales - Agrandissement", type: 'text' },
  { key: 'dateRequiseAgrandissement', label: 'Date requise', type: 'text' },
  { key: 'quantiteAgrandissement', label: 'Quantité', type: 'text' },
  { key: 'nbsPageImprimeeAgrandissement', label: 'Nombre de pages imprimées', type: 'text' },
  { key: 'PourcentageAgrandissement', label: 'Agrandissement %', type: 'text' },
  { key: 'taillePoliceAgrandissement', label: 'Taille de police de caractères', type: 'text' },
  { key: 'formatAgrandissement', label: 'Format', type: 'text' },  { key: 'FormatGrossi', label: 'Format', type: 'select',
    options: [
      { label: '8 1/2 x 11', value: 'format8demi11Agrandissement' },
      { label: '8 1/2 x 14', value: 'format8demi14Agrandissement' },
      { label: '11 x 17', value: 'format11par17Agrandissement' },
      { label: 'Autre', value: 'formatAutreAgrandissement' },
    ]
  },
  { key: 'autreFormatAgrandissement', label: 'Si autre, spécifier', type: 'text' },
  { key: 'monochromeAgrandissement', label: 'Monochrome', type: 'checkbox' },
  { key: 'couleurAgrandissement', label: 'Couleur', type: 'checkbox' },

  { label: 'Agrandissement - impression', type: 'header4' },
  { key: 'impressionAgrandissement', type: 'checkbox-list',
    options: [
      { label: 'XEROX', value: 'xeroxAgrandissement', label2:"Impression" },
      { label: 'Recto', value: 'rectoAgrandissement' },
      { label: 'Recto/Verso', value: 'rectoVersoAgrandissement' }
    ]
  },
  { key: 'typeTeneurAgrandissement', type: 'checkbox-list',
    options: [
      { label: 'Broché', value: 'brocheAgrandissement' },
      { label: 'Cerlox', value: 'cerloxAgrandissement' },
      { label: 'Wire-O', value: 'wireOAgrandissement' },
    ]
  },
  { key: 'typeCouvertureAgrandissement', type: 'checkbox-list',
    options: [
      { label: 'Couverture vinyle', value: 'couvVinyleAgrandissement' },
      { label: 'Couverture plastifiée couleur', value: 'couvPlasCouleurAgrandissement' },
      { label: 'Couverture plastifiée monochrome', value: 'couvPlasMonochromeAgrandissement' },
      { label: 'Couverture personnalisée', value: 'couvPersonnaliseeAgrandissement' },
      { label: 'Page endos du service', value: 'pageEndosAgrandissement' },
      { label: 'Autre', value: 'couvAutreAgrandissement' },
    ]
  },
  { key: 'autreCouvAgrandissement', label: 'Si autre, spécifier', type: 'text' },

  { label: 'Agrandissement - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceAgrandissement', label: 'Nom/Description', label2:"nom du fichier source ou description de la production", type: 'text' },
  
  { label: 'Agrandissement - commentaire', type: 'header4' },
  { key: 'commentaireAgrandissement', label: 'Commentaire', type: 'textarea' },
  
  { label: 'Agrandissement - informations tech.', type: 'header4' },
  { key: 'nomTechAgrandissement', label: 'Nom', label2:"Informations tech.", type: 'text' },
  { key: 'dateTermineTechAgrandissement', label: 'Terminé le', type: 'text' },
  { key: 'noHeureTechAgrandissement', label: 'Nombre d\'heure(s) de travail', type: 'text' },
  { key: 'commentaireTechAgrandissement', label: 'Commentaire', type: 'textarea' },

  { label: 'Agrandissement - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineAgrandissement', label: 'Terminé?', label2:"Contrôle de qualité", type: 'checkbox' },
  { key: 'nomContQualAgrandissement', label: 'Nom', type: 'text' },
  { key: 'dateTermineContQualAgrandissement', label: 'Terminé le', type: 'text' },
  { key: 'noHeureContQualAgrandissement', label: 'Nombre d\'heure(s) CDQ', type: 'text' },
  { key: 'commentaireContQualAgrandissement', label: 'Commentaire', type: 'textarea' },

  { label: 'Agrandissement - tableau de production', type: 'header4' },
  {
    key: 'tableProductionAgrandissement',
    label: 'Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'nbsPageAgrandissement', label: 'Nombre de pages', type: 'text' },
      { key: 'noteProdAgrandissement', label: 'Notes Prod.', type: 'text' }
    ]
  },

];