export const materielFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionMateriel', label: 'Numéro de réquisition', type: 'text' },
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
  { key: 'nomProjetMateriel', label: 'Nom du projet', type: 'text' },
  { key: 'confidentielMateriel', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'dosTravailMateriel', label: 'Dossier de travail', type: 'text' },

  { key: 'categorieMateriel', label: 'Catégorie de la demande', type: 'header3' },
  { key: 'matReadaptMateriel', label: 'Matériel réadaptation', type: 'checkbox' },
  { key: 'gabElectroMateriel', label: 'Gabarit électroménagers', type: 'checkbox' },
  { key: 'matPromoMateriel', label: 'Matériel promotion ', type: 'checkbox' },
  { key: 'autreCatMateriel', label: 'Autres ', type: 'checkbox' },
  { key: 'autreCatExplicationMateriel', label: 'Si autres, expliquer', type: 'text' },

  { key: 'tableHeureMateriel', label: 'Heures de travail – tableau de production', type: 'tableHeure',
    columns: [
      { key: 'HeureDB', label: 'D/B', type: 'text' },
      { key: 'HeureMR', label: 'M/R', type: 'text' },
      { key: 'HeureVR', label: 'V/R', type: 'text' },
      { key: 'HeureZM', label: 'Z/M', type: 'text' },
      { key: 'HeureAutre', label: 'Autre', type: 'text' },
    ],
  },

  { key: 'infoAdminMateriel', label: 'Informations administratives', type: 'header3' },
  { key: 'facturableMateriel', label: 'Réquisition facturable', type: 'checkbox' },
  { key: 'createurMateriel', label: 'Réquisition préparée par', type: 'text' },
];