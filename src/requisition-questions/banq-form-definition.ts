export const banqFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noBonCommandeBANQ', label: 'Numéro bon de commande', type: 'text', defaultValue: 'GBQ', label2: 'Informations générales de la demande' },
  { key: 'noContratBANQ', label: 'Contrat no:', type: 'text', defaultValue: '2023-5213' },
  { key: 'dateDemandeBANQ', label: 'Date de la demande', type: 'text' },
  { key: 'dateReceptionBANQ', label: "Date de la réception de l'ouvrage", type: 'text' },
  { key: 'dateRequiseBANQ', label: 'Date requise', type: 'text' },
  { key: 'prioritaireBANQ', label: 'Prioritaire', type: 'checkbox' },
  { key: 'regulierBANQ', label: 'Régulier', type: 'checkbox' },

  { label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'titreProjetBANQ', label: "Titre", type: 'text', label2: "Informations spécifiques du document" },
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

export const banqFormFieldsAfterPhases = [

  { label: 'Facturation', type: 'header2' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'typeDeBraille', label: 'Type de braille', type: 'text' },
      { key: 'quantite', label: `Nbr page`, type: 'number', calculate: true },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number', calculate: true },
      { key: 'total', label: 'Sous total ($)', type: 'number', calculated: true },
    ],
    calculateTotal: true, // Add this to enable grand total calculation
    defaultValues: {
      0: { typeDeBraille: 'Abrégé', quantite: '', prix: '1.95', total: '0' },
      1: { typeDeBraille: 'Intégral', quantite: '', prix: '1.95', total: '0' },
      2: { typeDeBraille: 'Intégral (ab + in)', quantite: '', prix: '0.90', total: '0' },
      3: { typeDeBraille: 'Duo-médias (-12 pages)', quantite: '', prix: '50.00', total: '0' },
      4: { typeDeBraille: 'Duo-médias (+12 pages)', quantite: '', prix: '100.00', total: '0' },
      5: { typeDeBraille: 'Trio-médias', quantite: '', prix: '1.95', total: '0' },
      6: { typeDeBraille: 'Ré-impression', quantite: '', prix: '0.35', total: '0' },
      7: { typeDeBraille: 'Couvertures', quantite: '', prix: '6.00', total: '0'},
      8: { typeDeBraille: 'Réparation cartable', quantite: '', prix: '15.00', total: '0' },
    },
    defaultRowCount: 9
  },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-85873' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },

  { label: 'SVP envoyer la facture par courriel à acquisitions.gb@banq.qc.ca', type: 'header2' },

];
