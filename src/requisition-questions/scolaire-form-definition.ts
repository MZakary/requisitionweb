//import { productionFields } from './shared/productionFields';
export const scolaireFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionScolaire', label: 'Numéro de réquisition', type: 'text', label2: 'Informations générales de la demande' },
  { key: 'noDemandeScolaire', label: 'Numéro de commande', type: 'text' },
  // { key: 'typeEcole', type: 'checkbox-list',
  //   options: [
  //     { label: 'CCSI', value: 'ccsi'},
  //     { label: 'Université', value: 'universite' }
  //   ]
  // },
  { key: 'nomClientScolaire', label: 'Nom du client', type: 'text' },
  { key: 'noClientScolaire', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'dateDemandeScolaire', label: 'Date de la demande', type: 'text' },
  { key: 'etablissementEnseignementScolaire', label: "Établissement d'enseignement", type: 'text' },
  { key: 'sigleCoursScolaire', label: "Sigle du cours", type: 'text' },
  { key: 'titreCoursScolaire', label: "Titre du cours", type: 'text' },
  { key: 'nomEtudiantScolaire', label: "Nom de l'étudiant", type: 'text' },
  { key: 'courrielEtudiantScolaire', label: "Courriel de l'étudiant", type: 'text' },
  { key: 'nomRepondantScolaire', label: "Nom du répondant", type: 'text' },
  { key: 'courrielRepondantScolaire', label: "Courriel du répondant", type: 'text' },
  { key: 'livrerEtudiantScolaire', label: "Livrer à l'étudiant", type: 'checkbox' },

  { label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjetScolaire', label: 'Nom du projet', type: 'text', label2: 'Informations spécifiques du document' },
  {
    key: 'docSourceScolaire', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À télécharger', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailScolaire', label: 'Dossier de travail', type: 'text' },
  {
    key: 'langueScolaire', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'fra' },
      { label: 'Anglais', value: 'ang' },
      { label: 'Espagnol', value: 'esp' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'langueAutreScolaire', label: 'Si autre, spécifier', type: 'text' },
  { key: 'titreProjetScolaire', label: "Titre", type: 'text' },
  { key: 'soustitreProjetScolaire', label: "Sous-Titre", type: 'text' },
  { key: 'auteurScolaire', label: "Auteur", type: 'text' },
  { key: 'editeurScolaire', label: "Éditeur", type: 'text' },
  { key: 'lieuEditionScolaire', label: "Lieu d'édition", type: 'text' },
  { key: 'dateEditionScolaire', label: "Date d'édition", type: 'text' },
  { key: 'isbnScolaire', label: "ISBN", type: 'text' },

  { key: 'createurScolaire', label: 'Réquisition préparée par', type: 'text' },
];

export const scolaireFormFieldsAfterPhases = [
  { label: 'Archivage', type: 'header2' },
  { key: 'nomResponsableArchivage', label: 'Responsable de l\'archivage', type: 'text', label2: 'Archivage' },
  { key: 'finalArchivage', label: 'Archivage final', type: 'checkbox' },

  { label: 'Livraison', type: 'header2' },
  { key: 'dateDeLivraison', label: 'Date de livraison', type: 'text', label2: 'Livraison' },
  { key: 'GLSLivraison', label: 'GLS', type: 'checkbox' },
  { key: 'posteCanadaLivraison', label: 'Poste Canada', type: 'checkbox' },
  { key: 'courrielLivraison', label: 'Courriel', type: 'checkbox' },
  { key: 'ramassageParLeClientLivraison', label: 'Ramassage par le client', type: 'checkbox' },
  { key: 'courrierInterneLivraisonCheckbox', label: 'Courrier interne', type: 'checkbox' },
  { key: 'courrierInterneLivraisonText', label: 'Coordonnées interne', type: 'text' },
  { key: 'adressesDestinatairesLivraison', label: 'Adresses du destinataire', type: 'textarea' },

  { label: 'Retour du document', type: 'header2' },
  { key: 'retourDocumentDropDown', type: 'checkbox-list',
    options: [
      { label: 'N/A', value: 'NA', label2: 'Retour du document' },
      { label: 'envoyer le', value: 'envoyer' }
    ]
  },
  { key: 'dateRetourDocumentText', label: 'Date de retour du document', type: 'text' },

  { label: 'Livraison - commentaire', type: 'header2' },
  { key: 'livraisonCommentaire', label: 'Livraison - Commentaire', type: 'textarea' },


  { label: 'Tableau de livraisons', type: 'header2' },
  {
    key: 'tableauLivraisonsExterne', label: 'Tableau de livraisons', type: 'dynamicTable',
    columns: [
      { key: 'phasesExterne', label: 'Phases', type: 'textarea' },
      { key: 'typeDeProductionExterne', label: 'Type de production', type: 'textarea' },
      { key: 'dateLivraisonFichierExterne', label: 'Date de livraison (fichier)', type: 'textarea' },
      { key: 'dateLivraisonPostaleExterne', label: 'Date de livraison (postale)', type: 'textarea' },
      { key: 'archiveExterne', label: 'Archivé', type: 'textarea' },
    ]
  },

  { label: 'Facturation', type: 'header2' },
  { key: 'descriptionProjetFacturation', label: 'Nom du projet', label2: "Facturation", type: 'textarea' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'description', label: 'Type de production demandé', type: 'textarea' },
      { key: 'quantite', label: 'Quantité', type: 'number', calculate: true },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number', calculate: true },
      { key: 'total', label: 'Sous total ($)', type: 'number', calculated: true },
    ],
    calculateTotal: true, // This enables the grand total
    defaultValues: {
      0: { description: 'E-Text standard (coût par 1000 caractères)', prix: '3.25', total: '0.00' },
      1: { description: 'E-Text complexe (coût par 1000 caractères)', prix: '5.30', total: '0.00' },
      2: { description: 'Braille standard (coût par page)', prix: '3.25', total: '0.00' },
      3: { description: 'Braille complexe (coût par page)', prix: '9.75', total: '0.00' },
      4: { description: 'Braille réimpression (coût par page)', prix: '0.50', total: '0.00' },
      5: { description: 'Caractères agrandis standard (coût par 1000 caractères)', prix: '3.25', total: '0.00' },
      6: { description: 'Caractères agrandis complexe (coût par 1000 caractères)', prix: '5.30', total: '0.00' },
      7: { description: 'Dessin standard (coût par dessin)', prix: '35.00', total: '0.00' },
      8: { description: 'Dessin complexe (coût par dessin)', prix: '65.00', total: '0.00' },
      9: { description: 'Dessin réimpression (coût par dessin)', prix: '1.00', total: '0.00' },
      10: { description: 'PDF et formulaire accessible standard (coût par page)', prix: '25.00', total: '0.00' },
      11: { description: 'PDF et formulaire accessible complexe (coût par page)', prix: '65.00', total: '0.00' },
      12: { description: 'PDF sans balise avec signet (coût par page) - PDF navigable', prix: '4.10', total: '0.00' },
      13: { description: 'Numérisation PDF non accessible (coût par page)', prix: '2.35', total: '0.00' },
      14: { description: 'Agrandissement avec reliure (coût par page)', prix: '2.75', total: '0.00' },
      15: { description: 'Numérisation de livre que l\'on ne peut brisé', prix: '0.55', total: '0.00' },
      16: { description: 'Livraison', prix: '15.50', total: '0.00' },
    },
    defaultRowCount: 17,
  },
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'textarea' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-85833' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },

];
