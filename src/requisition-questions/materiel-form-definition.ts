import {
  TECH_NAME_OPTIONS
} from '../requisition-questions/dropdown-options'

export const materielFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionMateriel', label: 'Numéro de réquisition', type: 'text', defaultValue: 'AIRM', label2: 'Informations générales de la demande' },
  { key: 'noCommandeMateriel', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemandeMateriel', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseMateriel', label: 'Date requise', type: 'text' },
  {
    key: 'typeClientExterne', label: 'Type de client', type: 'select',
    options: [
      { label: 'Éducation', value: 'education_externe' },
      { label: 'Entreprise & particulier', value: 'entreprise_particulier_externe' },
      { label: 'Gouvernemental', value: 'gouvernemental_externe' },
      { label: 'Milieu associatif', value: 'milieu_associatif_externe' },
      { label: 'CISSSMC', value: 'cisssmc_interne' },
      { label: 'Santé Québec', value: 'sante_quebec_interne' },
      { label: 'BANQ', value: 'banq_externe' },
    ]
  },
  {
    key: 'nomClientMateriel', label: 'Nom du client (direction)', type: 'select',
    options: [
      { label: 'Autre', value: 'autre_client' },
      { label: 'Direction des programmes déficiences DI TSA DP et DV', value: 'dp_deficiences_di_tsa_dp_dv' },
      { label: 'Direction de la cancérologie', value: 'dp_cancerologie' },
      { label: 'Direction de santé publique', value: 'dp_sante_publique' },
      { label: 'Direction des services de soutien à domicile et de réadaptation', value: 'dp_soutien_domicile_readaptation' },
      { label: 'Direction des services hospitaliers volets urgences, blocs opératoires et services généraux de première ligne', value: 'dp_services_hospitaliers_urgences_blocs_premiere_ligne' },
      { label: 'Direction des services multidisciplinaires de santé et de services sociaux', value: 'dp_services_multidisciplinaires' },
      { label: 'Direction des services professionnels et à la fluidité hospitalière', value: 'dp_services_professionnels_fluidite' },
      { label: 'Direction des soins infirmiers', value: 'dp_soins_infirmiers' },
      { label: "Direction de l'accès aux services médicaux de première ligne de la Montérégie", value: 'dp_acces_services_premiere_ligne_monteregie' },
      { label: 'Direction des programmes santé mentale, dépendance et itinérance', value: 'dp_sante_mentale_dependance_itinerance' },
      { label: "Direction du programme de soutien à l’autonomie des personnes âgées", value: 'dp_soutien_autonomie_aines' },
      { label: 'Direction du programme jeunesse', value: 'dp_programme_jeunesse' },
      { label: 'Direction qualité, évaluation, performance, éthique et Lean', value: 'dp_qualite_evaluation_performance_ethique_lean' },
      { label: 'Direction régionale des laboratoires', value: 'dp_laboratoires_regionaux' },
      { label: 'Direction de la logistique', value: 'dp_logistique' },
      { label: 'Direction des communications et des affaires publiques', value: 'dp_communications_affaires_publiques' },
      { label: 'Direction des ressources financières', value: 'dp_ressources_financieres' },
      { label: 'Direction des ressources humaines, du développement organisationnel et des affaires juridiques', value: 'dp_rh_developpement_organisationnel_affaires_juridiques' },
      { label: 'Direction des ressources informationnelles de la Montérégie', value: 'dp_ressources_informationnelles_monteregie' },
      { label: 'Direction des services techniques', value: 'dp_services_techniques' },
      { label: 'Direction de la recherche', value: 'dp_recherche' },
      { label: 'Direction de l’enseignement et des affaires universitaires', value: 'dp_enseignement_affaires_universitaires' },
      { label: 'Direction générale', value: 'dp_direction_generale' },
      { label: 'Commissaire aux plaintes et à la qualité des services Maltraitance', value: 'commissaire_plaintes_qualite_maltraitance' },
      { label: 'Conseils et comité du CISSSMC', value: 'conseils_comites_cisssmc' },
      { label: 'Éthique', value: 'ethique' },
      { label: 'Fondation du CISSSMC', value: 'fondation_cisssmc' },
      { label: 'Direction des affaires corporatives et partenariats', value: 'dp_affaires_corporatives_partenariats' },
    ]
  },
  { key: 'nomClientAutreMateriel', label: 'Autre nom du client', type: 'text' },
  { key: 'noClientMateriel', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContactMateriel', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContactMateriel', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephoneMateriel', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturationMateriel', label: 'Adresse de facturation postale et courriel', type: 'textarea' },

  { label: 'Informations spécifiques', type: 'header2' },
  { key: 'nomProjetMateriel', label: 'Nom du projet', type: 'text', label2: 'Informations spécifiques' },
  {
    key: 'confidentielMateriel', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'dosTravailMateriel', label: 'Dossier de travail', type: 'text' },

  { key: 'categorieMateriel', label: 'Catégorie de la demande', type: 'header3' },
  { key: 'matReadaptMateriel', label: 'Matériel réadaptation', type: 'checkbox', label2: 'Catégorie de la demande' },
  { key: 'gabElectroMateriel', label: 'Gabarit électroménager', type: 'checkbox' },
  { key: 'matPromoMateriel', label: 'Matériel promotion ', type: 'checkbox' },
  { key: 'autreCatMateriel', label: 'Autres ', type: 'checkbox' },
  { key: 'autreCatExplicationMateriel', label: 'Si autres, expliquer', type: 'text' },

  // {
  //   key: 'tableHeure', label: 'Heures de travail – tableau de production', type: 'tableHeure',
  //   needsTotal: true,
  //   columns: [
  //     { key: 'Debut', label: 'Date Début', type: 'text' },
  //     { key: 'Fin', label: 'Date Fin', type: 'text' },
  //     { key: 'HeureDB', label: 'D/B', type: 'text' },
  //     { key: 'HeureMR', label: 'M/R', type: 'text' },
  //     { key: 'HeureVR', label: 'V/R', type: 'text' },
  //     { key: 'HeureZM', label: 'Z/M', type: 'text' },
  //     { key: 'HeureAutre', label: 'Autre', type: 'text' },
  //     { key: 'sousTotal', label: 'Sous-total', type: 'text' },
  //   ],
  // },

  { key: 'tableauHeureTitreMateriel', label: 'Heures de Travail - Tableau de production', type: 'header3' },

  {
    key: 'tableHeureMateriel',
    type: 'dynamicTable',
    addTotal: true,
    totalKey: 'noHeurePrisMateriel',
    columns: [
      {
        key: 'nomMateriel',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      { key: 'dateDebutMateriel', label: 'Date Début', type: 'date' },
      { key: 'dateDebutMateriel', label: 'Date Fin', type: 'date' },
      { key: 'noHeurePrisMateriel', label: "Nombre d'heure(s)", type: 'time' },
    ]
  },

  { key: 'infoAdminMateriel', label: 'Informations administratives', type: 'header3' },
  { key: 'facturableMateriel', label: 'Réquisition facturable', type: 'checkbox' },
  { key: 'materielCommentaire', label: 'Commentaire', type: 'textarea' },

  { key: 'createurMateriel', label: 'Réquisition préparée par', type: 'text' },
];

export const materielFormFieldsAfterPhases = [

  { label: 'Facturation', type: 'header2' },
  { key: 'descriptionProjetFacturation', label: 'Description du projet', label2: "Facturation", type: 'text' },
  {
    key: 'facturation',
    label: 'Tableau de facturation',
    type: 'facturationTable',
    columns: [
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'quantite', label: 'Quantité', type: 'number', calculate: true },
      { key: 'prix', label: 'Prix unitaire ($)', type: 'number', calculate: true },
      {
        key: 'total',
        label: 'Sous total ($)',
        type: 'number',
        calculated: true,
      }
    ],
    calculateTotal: true // Enable grand total calculation
  },
  { key: 'facturationCommentaire', label: 'Commentaire', type: 'textarea' },
  { key: 'dateLivraisonFacturation', label: 'Date de livraison', type: 'text' },
  { key: 'codeBudgetaireFacturation', label: 'Code budgétaire', type: 'text', defaultValue: '720320-' },
  { key: 'autorisationFacturation', label: 'Autorisation', type: 'text' },

  {
    key: 'tableNote', label: 'Notes', type: 'tableHeure',
    needsTotal: false,
    columns: [
      { key: 'Date', label: 'Date', type: 'text' },
      { key: 'Note', label: 'Note', type: 'textarea' },
    ],
  },

];