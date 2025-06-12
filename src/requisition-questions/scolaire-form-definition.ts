//import { productionFields } from './shared/productionFields';
export const scolaireFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionScolaire', label: 'Numéro de réquisition', type: 'text' },
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
  { key: 'nomProjetScolaire', label: 'Nom du projet', type: 'text' },
  { key: 'docSourceScolaire', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailScolaire', label: 'Dossier de travail', type: 'text' },
  { key: 'langueScolaire', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'retourner' },
      { label: 'Anglais', value: 'telecharger' },
      { label: 'Espagnol', value: 'telecharger' },
      { label: 'Autre', value: 'telecharger' },
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
  