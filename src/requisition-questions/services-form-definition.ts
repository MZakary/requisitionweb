//import { productionFields } from './shared/productionFields';
import {
  TECH_NAME_OPTIONS
} from '../requisition-questions/dropdown-options'
export const servicesFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionService', label: 'Numéro de Réquisition', type: 'text', defaultValue: 'AIRA', label2: 'Informations générales de la demande' },
  { key: 'noCommandeService', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemandeService', label: 'Date de la demande', type: 'text' },
  { key: 'dateRequiseService', label: 'Date requise', type: 'text' },
  {
    key: 'typeClientService', label: 'Type de client', type: 'select',
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
    key: 'nomClientService', label: 'Nom du client (direction)', type: 'select',
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
  { key: 'nomClientAutreService', label: 'Autre nom du client', type: 'text' },
  { key: 'noClientService', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContactService', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContactService', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephoneService', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturationService', label: 'Adresse de facturation postale et courriel', type: 'textarea' },

  { label: 'Informations spécifiques', type: 'header2', label2: 'Informations spécifiques du document' },
  { key: 'nomProjetService', label: 'Nom du projet', type: 'text' },
  {
    key: 'confidentielService', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'dosTravailService', label: 'Dossier de travail', type: 'text' },

  { label: 'Catégorie de la demande', type: 'header3' },
  { key: 'devService', label: 'Développement', type: 'checkbox', label2: 'Catégorie de la demande' },
  { key: 'evalService', label: 'Évaluation', type: 'checkbox' },
  { key: 'rechService', label: 'Recherche', type: 'checkbox' },
  { key: 'soutService', label: 'Soutien professionnel', type: 'checkbox' },

  /*Add table here */
  // {
  //   key: 'tableHeure', label: 'Heures de travail – tableau de production', type: 'tableHeure',
  //   needsTotal: true,
  //   columns: [
  //     { key: 'Debut', label: 'Date de début du projet', type: 'text' },
  //     { key: 'Fin', label: 'Date de fin du projet', type: 'text' },
  //     { key: 'HeureMS', label: 'M/S', type: 'text' },
  //     { key: 'HeureSP', label: 'S/P', type: 'text' },
  //     { key: 'HeureZM', label: 'Z/M', type: 'text' },
  //     { key: 'HeureJL', label: 'J/L', type: 'text' },
  //     { key: 'HeureAutre', label: 'Autre', type: 'text' },
  //     { key: 'sousTotal', label: 'Sous-total', type: 'text' },
  //   ],
  // },

  { key: 'tableauHeureTitreService', label: 'Heures de Travail - Tableau de production', type: 'header3' },

  {
    key: 'tableHeureService',
    type: 'dynamicTable',
    addTotal: true,
    totalKey: 'noHeurePrisService',
    columns: [
      {
        key: 'nomService',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      { key: 'dateDebutService', label: 'Date Début', type: 'date' },
      { key: 'dateDebutService', label: 'Date Fin', type: 'date' },
      { key: 'noHeurePrisService', label: "Nombre d'heure(s)", type: 'time' },
    ]
  },

  { label: 'Informations administratives', type: 'header3' },
  { key: 'facturableService', label: 'Réquisition facturable', type: 'checkbox', label2: 'Informations administratives' },
  { key: 'createurService', label: 'Réquisition préparée par', type: 'text' },
];

export const servicesFormFieldsAfterPhases = [

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
      { key: 'total', label: 'Sous total ($)', type: 'number', calculated: true }
    ],
    calculateTotal: true
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