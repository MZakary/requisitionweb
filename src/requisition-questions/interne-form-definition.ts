//import { productionFields } from './shared/productionFields';
export const interneFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionInterne', label: 'Numéro de réquisition', type: 'text' },
  { key: 'dateDemandeInterne', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseInterne', label: 'Date requise', type: 'text' },
  { key: 'nomDirectionInterne', label: 'Nom de la direction', type: 'text' },
  { key: 'nomProgramServiceInterne', label: 'Nom du program ou du service', type: 'text' },
  { key: 'nomDemandeurInterne', label: 'Nom du demandeur', type: 'text' },
  
  { label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjetInterne', label: 'Nom du projet', type: 'text' },
  { key: 'confidentielInterne', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'docSourceInterne', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailInterne', label: 'Dossier de travail', type: 'text' },
  { key: 'langueInterne', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'retourner' },
      { label: 'Anglais', value: 'telecharger' },
      { label: 'Espagnol', value: 'telecharger' },
      { label: 'Autre', value: 'telecharger' },
    ]
  },
  { key: 'langueAutreInterne', label: 'Si autre, spécifier', type: 'text' },
  { key: 'createurInterne', label: 'Réquisition préparée par', type: 'text' },
];