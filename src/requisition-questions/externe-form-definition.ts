
// import { productionFields } from './shared/productionFields';

export const externeFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionExterne', label: 'Numéro de réquisition', type: 'text' },
  { key: 'noCommandeExterne', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemandeExterne', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseExterne', label: 'Date requise', type: 'text' },
  { key: 'nomClientExterne', label: 'Nom du client', type: 'text' },
  { key: 'noClientExterne', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContactExterne', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContactExterne', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephoneExterne', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturationExterne', label: 'Adresse de facturation postale et courriel', type: 'text' },
  
  { label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjetExterne', label: 'Nom du projet', type: 'text' },
  { key: 'confidentielExterne', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'docSourceExterne', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailExterne', label: 'Dossier de travail', type: 'text' },
  { key: 'langueExterne', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'retourner' },
      { label: 'Anglais', value: 'telecharger' },
      { label: 'Espagnol', value: 'telecharger' },
      { label: 'Autre', value: 'telecharger' },
    ]
  },
  { key: 'langueAutreExterne', label: 'Si autre, spécifier', type: 'text' },
  
  { key: 'createurExterne', label: 'Réquisition préparée par', type: 'text' },
];
