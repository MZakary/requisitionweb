export const externeFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisition', label: 'Numéro de réquisition', type: 'text', defaultValue: 'AIRE', label2: 'Informations générales de la demande' },
  { key: 'noCommande', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemande', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequise', label: 'Date requise', type: 'text' },
  { key: 'nomClient', label: 'Nom du client', type: 'text' },
  { key: 'noClient', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContact', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContact', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephone', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturation', label: 'Adresse de facturation postale et courriel', type: 'textarea' },

  { label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjet', label: 'Nom du projet', type: 'text', label2: "Informations spécifiques du document" },


  {
    key: 'confidentiel', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'oui' },
      { label: 'Non', value: 'non' }
    ]
  },


  
  {
    key: 'docSource', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À télécharger', value: 'telecharger' }
    ]
  },
  { key: 'dosTravail', label: 'Dossier de travail', type: 'text' },
  {
    key: 'langue', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'fra' },
      { label: 'Anglais', value: 'ang' },
      { label: 'Espagnol', value: 'esp' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'langueAutre', label: 'Si autre, spécifier', type: 'text' },

  { key: 'createur', label: 'Réquisition préparée par', type: 'text' },
];

export const externeFormFieldsAfterPhases = [
  { label: 'Archivage', type: 'header2' },
  { key: 'nomResponsableArchivage', label: 'Responsable de l\archivage', type: 'text', label2: 'Archivage' },
  { key: 'finalArchivage', label: 'Archivage final', type: 'checkbox' },

  { label: 'Livraison', type: 'header2' },
  { key: 'dateDeLivraison', label: 'Date de livraison', type: 'text', label2: 'Livraison' },
  { key: 'GLSLivraison', label: 'GLS', type: 'checkbox' },
  { key: 'posteCanadaLivraison', label: 'Poste Canada', type: 'checkbox' },
  { key: 'courrielLivraison', label: 'Courriel', type: 'checkbox' },
  { key: 'ramassageParLeClientLivraison', label: 'Ramassage par le client', type: 'checkbox' },
  { key: 'courrierInterneLivraisonCheckbox', label: 'Courrier interne', type: 'checkbox' },
  { key: 'courrierInterneLivraisonText', label: 'Coordonnées interne', type: 'text' },
  { key: 'adressesDestinatairesLivraison', label: 'Adresses du destinataire', type: 'textarea' },

  { label: 'Retour du document', type: 'header2' },
  {
    key: 'retourDocumentDropDown', label: 'Retour du document', type: 'select',
    options: [
      { label: 'N/A', value: 'NA' },
      { label: 'envoyer le', value: 'envoyer' }
    ]
  },
  { key: 'dateRetourDocumentText', label: 'Date de retour du document', type: 'text' },

  { label: 'Livraison - commentaire', type: 'header2' },
  { key: 'livraisonCommentaire', label: 'Livraison - Commentaire', type: 'textarea' },


  { label: 'Tableau de livraisons', type: 'header2' },
  {
    key: 'tableauLivraisonsExterne', label: 'Tableau de livraisons', type: 'dynamicTable',
    columns: [
      { key: 'phasesExterne', label: 'Phases', type: 'textarea' },
      { key: 'typeDeProductionExterne', label: 'Type de production', type: 'textarea' },
      { key: 'dateLivraisonFichierExterne', label: 'Date de livraison (fichier)', type: 'textarea' },
      { key: 'dateLivraisonPostaleExterne', label: 'Date de livraison (postale)', type: 'textarea' },
      { key: 'archiveExterne', label: 'Archivé', type: 'textarea' },
    ],
  },

  { label: 'Facturation', type: 'header2' },
  { key: 'descriptionProjetFacturation', label: 'Description du projet', label2: "Facturation", type: 'text' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'quantite', label: 'Quantité', type: 'number', calculate: true },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number', calculate: true },
      { key: 'total', label: 'Sous total ($)', type: 'number', calculated: true },
    ],
    calculateTotal: true 
  },
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'textarea' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },



];