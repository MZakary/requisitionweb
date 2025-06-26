
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
  {
    key: 'confidentielExterne', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  {
    key: 'docSourceExterne', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailExterne', label: 'Dossier de travail', type: 'text' },
  {
    key: 'langueExterne', label: 'Langue', type: 'select',
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

export const externeFormFieldsAfterPhases = [
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
  { key: 'livraisonCommentaire', label: 'Livraison - Commentaire', type: 'textarea' },


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
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'textarea' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },



];
