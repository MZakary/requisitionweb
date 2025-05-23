//import { productionFields } from './shared/productionFields';
export const servicesFormFields = [
  { key: 'infoGeneral', label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noCommande', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemande', label: 'Date de la demande', type: 'text' },
  { key: 'dateReception', label: "Date de la réception de l'ouvrage", type: 'text' },
  { key: 'dateRequise', label: 'Date requise', type: 'text' },
  { key: 'nomClient', label: 'Nom du client', type: 'text' },
  { key: 'noClient', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContact', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContact', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephone', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturation', label: 'Adresse de facturation postale et courriel', type: 'text' },

  { key: 'infoSpecifiques', label: 'Informations spécifiques', type: 'header2' },
  { key: 'nomProjet', label: 'Nom du projet', type: 'text' },
  { key: 'confidentiel', label: 'Confidentiel', type: 'checkbox' },
  { key: 'dosTravail', label: 'Dossier de travail', type: 'text' },

  { key: 'categorie', label: 'Catégorie de la demande', type: 'header3' },
  { key: 'dev', label: 'Développement', type: 'checkbox' },
  { key: 'eval', label: 'Évaluation', type: 'checkbox' },
  { key: 'rech', label: 'Recherche', type: 'checkbox' },
  { key: 'sout', label: 'Soutien professionnel', type: 'checkbox' },

  /*Add table here */
  { key: 'tableHeure', label: 'Heures de travail – tableau de production', type: 'tableHeure',
    columns: [
      { key: 'HeureMS', label: 'M/S', type: 'text' },
      { key: 'HeureSP', label: 'S/P', type: 'text' },
      { key: 'HeureZM', label: 'Z/M', type: 'text' },
      { key: 'HeureJL', label: 'J/L', type: 'text' },
      { key: 'HeureAutre', label: 'Autre', type: 'text' },
    ],
  },

  { key: 'infoAdmin', label: 'Informations administratives', type: 'header3' },
  { key: 'createur', label: 'Réquisition créé par', type: 'text' },
  { key: 'facturable', label: 'Réquisition facturable', type: 'checkbox' },
];
  