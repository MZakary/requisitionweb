//import { productionFields } from './shared/productionFields';
export const scolaireFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionScolaire', label: 'Numéro de réquisition', type: 'text', label2: 'Informations générales de la demande' },
  { key: 'noDemandeScolaire', label: 'Numéro de commande', type: 'text' },
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
  { key: 'docSourceScolaire', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailScolaire', label: 'Dossier de travail', type: 'text' },
  { key: 'langueScolaire', label: 'Langue', type: 'select',
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

  { label: 'Facturation', type: 'header2' },
  { key: 'descriptionProjetFacturation', label: 'Description du projet', label2:"Facturation", type: 'text' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'description', label: 'Type de production demandé', type: 'text' },
      { key: 'quantite', label: 'Quantité', type: 'number' },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number' },
      { key: 'total', label: 'Sous total ($)', type: 'number' },
    ],
    defaultValues: {
      0: { description: 'E-Text standard (coût par 1000 caractères)',  prix: '2.85' },
      1: { description: 'E-Text complexe (coût par 1000 caractères)',  prix: '4.65' },
      2: { description: 'Braille standard (coût par page)',  prix: '2.60' },
      3: { description: 'Braille complexe (coût par page)',  prix: '8.50' },
      4: { description: 'Braille réimpression (coût par page)',  prix: '0.35' },
      5: { description: 'Caractères agrandis standard (coût par 1000 caractères)',  prix: '2.85' },
      6: { description: 'Caractères agrandis complexe (coût par 1000 caractères)',  prix: '4.65' },
      7: { description: 'Dessin standard (coût par dessin)',  prix: '30.00' },
      8: { description: 'Dessin complexe (coût par dessin)',  prix: '60.00' },
      9: { description: 'Dessin réimpression (coût par dessin)',  prix: '0.70' },
      10: { description: 'PDF et formulaire accessible standard (coût par page)',  prix: '4.90' },
      11: { description: 'PDF et formulaire accessible complexe (coût par page)',  prix: '13.60' },
      12: { description: 'PDF sans balise avec signet (coût par page)',  prix: '3.60' },
      13: { description: 'Numérisation (coût par page)',  prix: '2.05' },
      14: { description: 'Agrandissement (coût par page)',  prix: '2.05' },
      15: { description: 'Sonore standard (Audio DAISY ou MP3) (coût par minute d\'enregistrement)',  prix: '0.95' },
      16: { description: 'Numérisation de livre que l\'on ne peut brisé (coût la page source)',  prix: '0.30' },
      17: { description: 'Copies sur CD (coût par copie)',  prix: '5.25' },
      18: { description: 'Expédition (coût par envoi)',  prix: '12.00' },
    },
    defaultRowCount: 19,
  },
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'text' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-85833' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },



];
  