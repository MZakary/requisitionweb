
// import { productionFields } from './shared/productionFields';

export const externeFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'createur', label: 'Réquisition créé par', type: 'text' },
  { key: 'noRequisition', label: 'Numéro de réquisition', type: 'text' },
  { key: 'noDemande', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemande', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequise', label: 'Date requise', type: 'text' },
  { key: 'nomClient', label: 'Nom du client', type: 'text' },
  { key: 'noClient', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContact', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContact', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephone', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturation', label: 'Adresse de facturation postale et courriel', type: 'text' },
  { label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjet', label: 'Nom du projet', type: 'text' },
  { key: 'confidentiel', label: 'Confidentiel', type: 'checkbox' },
  { key: 'docSource', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravail', label: 'Dossier de travail', type: 'text' },
  { key: 'langue', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'retourner' },
      { label: 'Anglais', value: 'telecharger' },
      { label: 'Espagnol', value: 'telecharger' },
      { label: 'Autre', value: 'telecharger' },
    ]
  },
  { key: 'langueAutre', label: 'Si autre, spécifier', type: 'text' },
];
  