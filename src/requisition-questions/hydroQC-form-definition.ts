export const hydroqcFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionHydro', label: 'Numéro de réquisition', type: 'text', defaultValue: 'AIRH', label2: 'Informations générales de la demande' },
  { key: 'noDemandeHydro', label: 'Numéro de commande', type: 'text', defaultValue: 'N/D' },
  { key: 'dateDemandeHydro', label: 'Date de la demande', type: 'text' },
  { key: 'nomClientHydro', label: 'Nom du client', type: 'text', defaultValue: 'Hydro-Québec' },
  { key: 'noClientHydro', label: 'Numéro du client (si connu)', type: 'text', defaultValue: '3000028' },
  { key: 'nomContactHydro', label: 'Nom du contact', type: 'text', defaultValue: 'Jean-Sébastien Tisseur et Nancy Hould (Fact.)' },
  { key: 'courrielContactHydro', label: 'Courriel du contact', type: 'text', defaultValue: 'tisseur.jeansebastien@hydroquebec.com'},
  { key: 'noTelephoneHydro', label: 'Numéro de téléphone', type: 'text', defaultValue: '514-858-8500' },
  { key: 'adresseFacturationHydro', label: 'Adresse de facturation postale et courriel', type: 'textarea', defaultValue: 'Hydro-Québec Référence alphanumérique : BV 1414 # de fournisseur : 1035972 140, boul. Crémazie-Ouest, 8e étage Montréal (Québec)  H2P 1C3 (comptes.fournisseurs@hydro.qc.ca)' },

  { key: 'infoGeneralHydro', label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjetHydro', label: 'Nom du projet', type: 'text', label2: "Informations spécifiques du document" },
  { key: 'confidentielHydro', type: 'checkbox-list', label: 'Confidentiel', defaultValue: ['oui'],
    options: [
      { label: 'Oui', value: 'oui' },
      { label: 'Non', value: 'non' }
    ]
  },
  { key: 'docSourceHydro', label: 'Document source', type: 'select', defaultValue: 'retourner',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailHydro', label: 'Dossier de travail', type: 'text' },
  { key: 'langueHydro', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'fra' },
      { label: 'Anglais', value: 'ang' },
      { label: 'Espagnol', value: 'esp' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'langueAutreHydro', label: 'Si autre, spécifier', type: 'text' },

  { key: 'ReqPreparerPar', label: 'Réquisition préparée par', type: 'text' },
  
];

export const hydroqcFormFieldsAfterPhases = [
  { label: 'Archivage', type: 'header2' },
  { key: 'nomResponsableArchivage', label: 'Responsable de l\'archivage', type: 'text', label2: 'Archivage' },
  { key: 'finalArchivage', label: 'Archivage final', type: 'checkbox' },

  { label: 'Livraison', type: 'header2' },
  { key: 'dateDeLivraison', label: 'Date de livraison', type: 'text', label2: 'Livraison' },
  { key: 'posteCanadaLivraison', label: 'Poste Canada', type: 'checkbox' , defaultValue: true },
  { key: 'courrielLivraison', label: 'Courriel', type: 'checkbox' },
  { key: 'ramassageParLeClientLivraison', label: 'Ramassage par le client', type: 'checkbox' },
  { key: 'courrierInterneLivraisonCheckbox', label: 'Courrier interne', type: 'checkbox' },
  { key: 'courrierInterneLivraisonText', label: 'Courrier', type: 'text' },
  { key: 'adressesDestinatairesLivraison', label: 'Adresses du destinataire', type: 'textarea' },
  
  { label: 'Livraison - commentaire', type: 'header2' },
  { key: 'livraisonCommentaire', label: 'Livraison - Commentaire', type: 'textarea' },

  { label: 'Facturation', type: 'header2' },
  { key: 'descriptionProjetFacturation', label: 'Description du projet', label2:"Facturation", type: 'text' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'description', label: 'Description', type: 'textarea'},
      { key: 'quantite', label: 'Quantité', type: 'number' },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number' },
      { key: 'total', label: 'Sous total ($)', type: 'number' },
    ],
    defaultValues: {
      0: { prix: '75.00' },
    },
    defaultRowCount: 1,
  },
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'textarea' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },



];