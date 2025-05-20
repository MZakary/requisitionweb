//import { productionFields } from './shared/productionFields';
export const scolaireFormFields = [
  { key: 'infoGeneral', label: 'Informations générales de la demande', type: 'header2' },
  { key: 'createur', label: 'Réquisition créé par', type: 'text' },
  { key: 'noRequisition', label: 'Numéro de réquisition', type: 'text' },
  { key: 'noDemande', label: 'Numéro de commande', type: 'text' },
  { key: 'nomClient', label: 'Nom du client', type: 'text' },
  { key: 'noClient', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'dateDemande', label: 'Date de la demande', type: 'text' },
  { key: 'etablissementEnseignement', label: "Établissement d'enseignement", type: 'text' },
  { key: 'sigleCours', label: "Sigle du cours", type: 'text' },
  { key: 'titreCours', label: "Titre du cours", type: 'text' },
  { key: 'nomEtudiant', label: "Nom de l'étudiant", type: 'text' },
  { key: 'courrielEtudiant', label: "Courriel de l'étudiant", type: 'text' },
  { key: 'nomRepondant', label: "Nom du répondant", type: 'text' },
  { key: 'courrielRepondant', label: "Courriel du répondant", type: 'text' },
  { key: 'livrerEtudiant', label: "Livrer à l'étudiant", type: 'checkbox' },

  { key: 'infoGeneral', label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjet', label: 'Nom du projet', type: 'text' },
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
  { key: 'titreProjet', label: "Titre", type: 'text' },
  { key: 'soustitreProjet', label: "Sous-Titre", type: 'text' },
  { key: 'auteur', label: "Auteur", type: 'text' },
  { key: 'editeur', label: "Éditeur", type: 'text' },
  { key: 'lieuEdition', label: "Lieu d'édition", type: 'text' },
  { key: 'dateEdition', label: "Date d'édition", type: 'text' },
  { key: 'isbn', label: "ISBN", type: 'text' },
];
  