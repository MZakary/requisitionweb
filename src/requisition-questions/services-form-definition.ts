//import { productionFields } from './shared/productionFields';
export const servicesFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionService', label: 'Numéro de Réquisition', type: 'text', defaultValue: 'AIRA', label2: 'Informations générales de la demande' },
  { key: 'noCommandeService', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemandeService', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseService', label: 'Date requise', type: 'text' },
  { key: 'nomClientService', label: 'Nom du client', type: 'text' },
  { key: 'noClientService', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContactService', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContactService', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephoneService', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturationService', label: 'Adresse de facturation postale et courriel', type: 'textarea' },

  { label: 'Informations spécifiques', type: 'header2', label2: 'Informations spécifiques du document' },
  { key: 'nomProjetService', label: 'Nom du projet', type: 'text' },
  { key: 'confidentielService', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'dosTravailService', label: 'Dossier de travail', type: 'text' },

  { label: 'Catégorie de la demande', type: 'header3' },
  { key: 'devService', label: 'Développement', type: 'checkbox', label2: 'Catégorie de la demande' },
  { key: 'evalService', label: 'Évaluation', type: 'checkbox' },
  { key: 'rechService', label: 'Recherche', type: 'checkbox' },
  { key: 'soutService', label: 'Soutien professionnel', type: 'checkbox' },

  /*Add table here */
  { key: 'tableHeure', label: 'Heures de travail – tableau de production', type: 'tableHeure',
    columns: [
      { key: 'Debut', label: 'Date de début du projet',type: 'text' },
      { key: 'Fin', label: 'Date de fin du projet', type: 'text' },
      { key: 'HeureMS', label: 'M/S', type: 'text' },
      { key: 'HeureSP', label: 'S/P', type: 'text' },
      { key: 'HeureZM', label: 'Z/M', type: 'text' },
      { key: 'HeureJL', label: 'J/L', type: 'text' },
      { key: 'HeureAutre', label: 'Autre', type: 'text' },
      { key: 'sousTotal', label: 'Sous-total', type: 'text' },
    ],
  },

  { label: 'Informations administratives', type: 'header3' },
  { key: 'facturableService', label: 'Réquisition facturable', type: 'checkbox', label2: 'Informations administratives' },
  { key: 'createurService', label: 'Réquisition préparée par', type: 'text' },
];

export const servicesFormFieldsAfterPhases = [

  { label: 'Facturation', type: 'header2' },
  { key: 'descriptionProjetFacturation', label: 'Description du projet', label2:"Facturation", type: 'text' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'quantite', label: 'Quantité', type: 'number' },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number' },
      { key: 'total', label: 'Sous total ($)', type: 'number' },
    ]
  },
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'textarea' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },



];