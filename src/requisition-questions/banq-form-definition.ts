export const banqFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noBonCommandeBANQ', label: 'Numéro bon de commande', type: 'text' },
  { key: 'dateDemandeBANQ', label: 'Date de la demande', type: 'text' },
  { key: 'dateReceptionBANQ', label: "Date de la réception de l'ouvrage", type: 'text' },
  { key: 'dateRequiseBANQ', label: 'Date requise', type: 'text' },
  { key: 'prioritaireBANQ', label: 'Prioritaire', type: 'checkbox' },
  { key: 'regulierBANQ', label: 'Régulier', type: 'checkbox' },
  
  { label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'titreProjetBANQ', label: "Titre", type: 'text' },
  { key: 'soustitreProjetBANQ', label: "Sous-Titre", type: 'text' },
  { key: 'genreProjectBANQ', label: "Genre", type: 'text' },
  { key: 'auteurBANQ', label: "Auteur", type: 'text' },
  { key: 'traductionBANQ', label: "Traduction", type: 'text' },
  { key: 'editeurBANQ', label: "Éditeur", type: 'text' },
  { key: 'lieuEditionBANQ', label: "Lieu d'édition", type: 'text' },
  { key: 'dateEditionBANQ', label: "Date d'édition", type: 'text' },
  { key: 'collectionBANQ', label: "Collection", type: 'text' },
  { key: 'isbnBANQ', label: "ISBN", type: 'text' },

  { key: 'createurBANQ', label: 'Réquisition préparée par', type: 'text' },
];
  