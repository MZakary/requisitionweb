//import { productionFields } from './shared/productionFields';
export const interneFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionInterne', label: 'Numéro de réquisition', type: 'text', defaultValue: 'AIRI', label2: 'Informations générales de la demande' },
  { key: 'dateDemandeInterne', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseInterne', label: 'Date requise', type: 'text' },
  { key: 'nomDirectionInterne', label: 'Nom de la direction', type: 'text' },
  { key: 'nomProgramServiceInterne', label: 'Nom du programme ou du service', type: 'text' },
  { key: 'nomDemandeurInterne', label: 'Nom du demandeur', type: 'text' },
  
  { label: 'Informations spécifiques du document', type: 'header2', label2: "Informations spécifiques du document" },
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
      { label: 'Français', value: 'fra' },
      { label: 'Anglais', value: 'ang' },
      { label: 'Espagnol', value: 'esp' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'langueAutreInterne', label: 'Si autre, spécifier', type: 'text' },
  { key: 'createurInterne', label: 'Réquisition préparée par', type: 'text' },
];

export const interneFormFieldsAfterPhases = [
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
  { key: 'adressesDestinatairesLivraison', label: 'Adresses du destinataire', type: 'text' },

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
  { key: 'livraisonCommentaire', label: 'Livraison - Commentaire', type: 'text' },


  { label: 'Tableau de livraisons', type: 'header2' },
  { key: 'tableauLivraisonsExterne', label: 'Tableau de livraisons', type: 'dynamicTable',
    columns: [
      { key: 'phasesExterne', label: 'Phases', type: 'text' },
      { key: 'typeDeProductionExterne', label: 'Type de production', type: 'text' },
      { key: 'dateLivraisonFichierExterne', label: 'Date de livraison (fichier)', type: 'text' },
      { key: 'dateLivraisonPostaleExterne', label: 'Date de livraison (postale)', type: 'text' },
      { key: 'archiveExterne', label: 'Archivé', type: 'text' },
    ]
  },

];