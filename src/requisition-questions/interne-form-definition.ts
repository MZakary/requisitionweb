//import { productionFields } from './shared/productionFields';
export const interneFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionInterne', label: 'Numéro de réquisition', type: 'text', defaultValue: 'AIRI', label2: 'Informations générales de la demande' },
  // { key: 'dateDemande', label: 'Date de la demande', type: 'text' },
  // { key: 'dateRequise', label: 'Date requise', type: 'text' },
  {
    key: 'typeClientInterne', label: 'Type de client', type: 'select',
    options: [
      { label: 'CISSSMC', value: 'cisssmc_interne' },
      { label: 'Santé Québec', value: 'sq_interne' },
    ]
  },
  {
    key: 'nomClientInterne', label: 'Nom du client (direction)', type: 'select',
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
  { key: 'nomClientAutreInterne', label: 'Autre nom du client', type: 'text' },
  // { key: 'nomDirectionInterne', label: 'Nom de la direction', type: 'text' },
  // { key: 'nomProgramServiceInterne', label: 'Nom du programme ou du service', type: 'text' },
  {
    key: 'nomProgramServiceInterne', label: "Nom du programme ou du service", type: 'select',
    options: [
      { label: 'N/A', value: 'non_applicable' },
      { label: "Service de l'Adaptation de l'Information", value: 'service_adaptation_information' },
      { label: 'Service des aides techniques', value: 'service_aides_techniques' },
      { label: 'Comptoir des ventes CDV', value: 'comptoir_ventes_cdv' },
      { label: 'Acheteur INLB', value: 'acheteur_inlb' },
      { label: 'Programme Adultes', value: 'programme_adultes' },
      { label: 'Programme Aînés Montérégie-Est de Montréal', value: 'programme_aines_monteregie_est_montreal' },
      { label: 'Programme Aînés Montréal-Laval', value: 'programme_aines_montreal_laval' },
      { label: 'Programme Enfance-Jeunesse', value: 'programme_enfance_jeunesse' },
      { label: 'Programme Réadaptation', value: 'programme_readaptation' },
      { label: 'Programme Surdicécité', value: 'programme_surdicecite' },
      { label: 'Programmes réguliers en déficience visuelle INLB', value: 'programmes_reguliers_deficience_visuelle_inlb' },
      { label: 'Programme Conduite-Auto', value: 'programme_conduite_auto' },
      { label: 'Services administratifs DI-TSA, DP et DV', value: 'services_administratifs_di_tsa_dp_dv' },
      { label: 'Direction DI-TSA - 715310 - Agrément', value: 'direction_di_tsa_agrement_715310' },
      { label: 'Service de Basse vision', value: 'service_basse_vision' },
      { label: 'AEO (Accueil - Évaluation - Orientation)', value: 'aeo_accueil_evaluation_orientation' },
      { label: 'Service de soutien aux partenaires et à la collectivité', value: 'service_soutien_partenaires_collectivite' },
      { label: 'Direction DI-TSA', value: 'direction_di_tsa' },
      { label: 'Transport et hébergement', value: 'transport_hebergement' },
      { label: 'Fondation INLB', value: 'fondation_inlb' },
      { label: 'Réception Archives INLB', value: 'reception_archives_inlb' },
    ]
  },
  { key: 'nomContactInterne', label: 'Nom du contact', type: 'text' },

  { label: 'Informations spécifiques du document', type: 'header2', label2: "Informations spécifiques du document" },
  { key: 'nomProjetInterne', label: 'Nom du projet', type: 'text' },
  {
    key: 'confidentielInterne', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  {
    key: 'docSourceInterne', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À télécharger', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailInterne', label: 'Dossier de travail', type: 'text' },
  {
    key: 'langueInterne', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'fra' },
      { label: 'Anglais', value: 'ang' },
      { label: 'Espagnol', value: 'esp' },
      { label: 'Autre', value: 'autre' },
    ]
  },
  { key: 'langueAutreInterne', label: 'Si autre, spécifier', type: 'text' },
  { key: 'createurInterne', label: 'Réquisition préparée par', type: 'text' },
];

export const interneFormFieldsAfterPhases = [
  { label: 'Archivage', type: 'header2' },
  { key: 'nomResponsableArchivage', label: 'Responsable de l\archivage', type: 'text', label2: 'Archivage' },
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
  {
    key: 'retourDocumentDropDown', label: 'Retour du document', type: 'select',
    options: [
      { label: 'N/A', value: 'NA' },
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

];