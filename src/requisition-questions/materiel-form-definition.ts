export const materielFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionMateriel', label: 'Numéro de réquisition', type: 'text', defaultValue: 'AIRM', label2: 'Informations générales de la demande' },
  { key: 'noCommandeMateriel', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemandeMateriel', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseMateriel', label: 'Date requise', type: 'text' },
  { key: 'nomClientMateriel', label: 'Nom du client', type: 'text' },
  { key: 'noClientMateriel', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContactMateriel', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContactMateriel', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephoneMateriel', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturationMateriel', label: 'Adresse de facturation postale et courriel', type: 'text' },

  { label: 'Informations spécifiques', type: 'header2' },
  { key: 'nomProjetMateriel', label: 'Nom du projet', type: 'text', label2: 'Informations spécifiques' },
  { key: 'confidentielMateriel', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'dosTravailMateriel', label: 'Dossier de travail', type: 'text' },

  { key: 'categorieMateriel', label: 'Catégorie de la demande', type: 'header3' },
  { key: 'matReadaptMateriel', label: 'Matériel réadaptation', type: 'checkbox', label2: 'Catégorie de la demande' },
  { key: 'gabElectroMateriel', label: 'Gabarit électroménager', type: 'checkbox' },
  { key: 'matPromoMateriel', label: 'Matériel promotion ', type: 'checkbox' },
  { key: 'autreCatMateriel', label: 'Autres ', type: 'checkbox' },
  { key: 'autreCatExplicationMateriel', label: 'Si autres, expliquer', type: 'text' },

  { key: 'tableHeure', label: 'Heures de travail – tableau de production', type: 'tableHeure',
    columns: [
      { key: 'Debut', label: 'Date Début',type: 'text' },
      { key: 'Fin', label: 'Date Fin', type: 'text' },
      { key: 'HeureDB', label: 'D/B', type: 'text' },
      { key: 'HeureMR', label: 'M/R', type: 'text' },
      { key: 'HeureVR', label: 'V/R', type: 'text' },
      { key: 'HeureZM', label: 'Z/M', type: 'text' },
      { key: 'HeureAutre', label: 'Autre', type: 'text' },
      { key: 'sousTotal', label: 'Sous-total', type: 'text' },
    ],
  },

  { key: 'infoAdminMateriel', label: 'Informations administratives', type: 'header3' },
  { key: 'facturableMateriel', label: 'Réquisition facturable', type: 'checkbox' },
  { key: 'materielCommentaire', label: 'Commentaire', type: 'textarea' },

  { key: 'createurMateriel', label: 'Réquisition préparée par', type: 'text' },
];

export const materielFormFieldsAfterPhases = [

  { label: 'Facturation', type: 'header2' },
  { key: 'descriptionProjetFacturation', label: 'Description du projet', label2:"Facturation", type: 'text' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'description', label: 'Description', type: 'text' },
      { key: 'quantite', label: 'Quantité', type: 'number' },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number' },
      { key: 'total', label: 'Sous total ($)', type: 'number', disabled: true },
    ]
  },
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'text' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },



];