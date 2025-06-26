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

export const interneFormFieldsAfterPhases = [
  { label: 'Archivage', type: 'header2' },
  { key: 'nomResponsableArchivage', label: 'Responsable de l\'archivage', type: 'text' },
  { key: 'finalArchivage', label: 'Archivage final', type: 'checkbox' },

  { label: 'Livraison', type: 'header2' },
  { key: 'dateDeLivraison', label: 'Date de livraison', type: 'text' },
  { key: 'GLCLivraison', label: 'GLC', type: 'checkbox' },
  { key: 'posteCanadaLivraison', label: 'Poste Canada', type: 'checkbox' },
  { key: 'courrielLivraison', label: 'Courriel', type: 'checkbox' },
  { key: 'ramassageParLeClientLivraison', label: 'Ramassage par le client', type: 'checkbox' },
  { key: 'courrierInterneLivraisonCheckbox', label: 'Courrier interne', type: 'checkbox' },
  { key: 'courrierInterneLivraisonText', label: 'Courrier', type: 'text' },
  { key: 'adressesDestinatairesLivraison', label: 'Adresses du destinataire', type: 'text' },

  { label: 'Retour du document', type: 'header2' },
  { key: 'retourDocument', label: 'Retour du document', type: 'text' },
  
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