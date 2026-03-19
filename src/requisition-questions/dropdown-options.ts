// dropdown-options.ts

// Braille difficulty levels
export const BRAILLE_DIFFICULTY_OPTIONS = [
  { label: 'Standard', value: 'standard' },
  { label: 'Complexe', value: 'complexe' },
  { label: 'Musical simple', value: 'musicalSimple' },
  { label: 'Musical intermédiaire', value: 'musicalIntermediaire' },
  { label: 'Musical complexe', value: 'musicalComplexe' },
];

// Braille code base options
export const BRAILLE_CODE_BASE_OPTIONS = [
  { label: 'CBFU', value: 'cbfu' },
  { label: 'Anglais UEB', value: 'aueb' },
  { label: 'Anglais BANA', value: 'abana' },
  { label: 'CBSQ/CBI', value: 'cbsq' },
  { label: 'Nemeth', value: 'nemeth' },
  { label: 'Informatique', value: 'informatique' },
  { label: 'Musique', value: 'musique' },
  { label: 'Signalisation', value: 'signalisation' },
  { label: 'Autre', value: 'autre' },
];

// Format options
export const FORMAT_BRAILLE_OPTIONS = [
  { label: '25x30', value: '25x30' },
  { label: '25x40', value: '25x40' },
  { label: 'Autre', value: 'autre' },
];

// Embossage options
export const EMBOSSAGE_OPTIONS = [
  { label: 'Braillo', value: 'braillo' },
  { label: 'ViewPlus', value: 'viewplus' },
  { label: 'Autre', value: 'autre' },
];

// Material options
export const MATERIAL_OPTIONS = [
  { label: 'Papier avec trous', value: 'papierAvecTrous' },
  { label: 'Papier sans trous', value: 'papierSansTrous' },
  { label: 'Plastique', value: 'plastique' },
  { label: 'Braille label', value: 'brailleLabel' },
  { label: 'Plaque argent', value: 'plaqueArgent' },
  { label: 'Plaque noire', value: 'plaqueNoire' },
  { label: 'Plaque dorée', value: 'plaqueDoree' },
  { label: 'Plaque de zinc', value: 'plaqueZinc' },
  { label: 'Autre', value: 'autre' },
];

// Tech names (for dynamic table dropdown)
export const TECH_NAME_OPTIONS = [
  { label: 'Dominic Beaudin', value: 'Dom_Beaudin' },
  { label: 'Julie Bordeleau', value: 'Julie_Bordeleau' },
  { label: 'Katia Daraîche', value: 'Katia_Daraiche' },
  { label: 'Janie Lachapelle', value: 'Janie_Lachapelle' },
  { label: 'Lisette Mazoué', value: 'Lisette_Mazoue' },
  { label: 'Karine Lefort', value: 'Karine_Lefort' },
  { label: 'Sabrina Pilon', value: 'Sabrina_Pilon' },
  { label: 'Marc-André Rémillard', value: 'MarcAndre_Remillard' },
  { label: 'Valérie Rémillard', value: 'Valerie_Remillard' },
  { label: 'Annie Rousseau', value: 'Annie_Rousseau' },
  { label: 'Marc St-Onge', value: 'Marc_StOnge' },
  { label: 'Zakary Mitrovic', value: 'Zakary_Mitrovic' },
  // { label: 'Marc-Antoine Boulet', value: 'MarcAntoine_Boulet' },

];

// Status options (example for future use)
export const STATUS_OPTIONS = [
  { label: 'En cours', value: 'en_cours' },
  { label: 'Terminé', value: 'termine' },
  { label: 'En attente', value: 'en_attente' },
  { label: 'À réviser', value: 'a_reviser' },
];

// Priority options (example for future use)
export const PRIORITY_OPTIONS = [
  { label: 'Basse', value: 'low' },
  { label: 'Normale', value: 'normal' },
  { label: 'Haute', value: 'high' },
  { label: 'Urgente', value: 'urgent' },
];

export const DIRECTIONS_OPTIONS = [

  { label: 'N/A', value: 'nonapplicable' },
  { label: 'Autre', value: 'autre' },
  { label: 'Direction des programmes déficiences (DI, TSA, DP et DV) (DPD)', value: 'dpd' },
  { label: 'DGA aux affaires administratives (DGA-AA)', value: 'dga_aa' },
  { label: 'DGA aux programmes sociaux et réadaptation (DGA-PSR)', value: 'dga_psr' },
  { label: "Direction de l’enseignement et des affaires universitaires (DEAU)", value: 'deau' },
  { label: 'Direction de la cancérologie (DC)', value: 'dc' },
  { label: 'Direction de la logistique (DL)', value: 'dl' },
  { label: "Direction de la recherche et de l'innovation (DR)", value: 'dr' },
  { label: 'Direction de la santé publique (DSPu)', value: 'dspu' },
  { label: 'Direction des activités hospitalières et de la fluidité Hôpital Charles-Le-Moyne (DAHF-HCLM)', value: 'dahf_hclm' },
  { label: 'Direction des activités hospitalières et de la fluidité Hôpital du Haut-Richelieu (DAHF-HHR)', value: 'dahf_hhr' },
  { label: 'Direction des affaires corporatives et partenariats (DACP)', value: 'dacp' },
  { label: 'Direction des communications et des affaires publiques (DCAP)', value: 'dcap' },
  { label: 'Direction des programmes santé mentale, dépendance et itinérance (DPSMDI)', value: 'dpsmdi' },
  { label: 'Direction des ressources financières (DRF)', value: 'drf' },
  { label: 'Direction des ressources humaines, du développement organisationnel et des affaires juridiques (DRHDO-AJ)', value: 'drhdo_aj' },
  { label: 'Direction des ressources informationnelles de la Montérégie (DRIM)', value: 'drim' },
  { label: 'Direction des services de soutien à domicile et de réadaptation (DSSADR)', value: 'dssadr' },
  { label: 'Direction des services hospitaliers - urgences, blocs opératoires et services généraux de 1er ligne (DSHPL)', value: 'dshpl' },
  { label: "Direction des services préhospitaliers d'urgence", value: 'services_prehospitaliers_urgence' },
  { label: 'Direction des services techniques (DST)', value: 'dst' },
  { label: 'Direction des soins infirmiers (DSI)', value: 'dsi' },
  { label: 'Direction du programme de soutien à l’autonomie des personnes âgées (DPSAPA)', value: 'dpsapa' },
  { label: 'Direction du programme jeunesse (DPJe)', value: 'dpje' },
  { label: 'Direction Équipe volante publique', value: 'equipe_volante_publique' },
  { label: 'Direction générale (DG)', value: 'dg' },
  { label: 'Direction générale adjointe (DGA)', value: 'dga' },
  { label: 'Direction médicale et des services professionnels (DMSP)', value: 'dmsp' },
  { label: 'Direction qualité, évaluation, performance, éthique et Lean (DQEPEL)', value: 'dqepel' },
  { label: "Direction régionale de l'accès aux services médicaux, des soins primaires intégrés et de proximité (DRASMSPIP)", value: 'drasmspip' },
  { label: 'Direction régionale des laboratoires (DRL)', value: 'drl' },
  { label: 'Direction des services multidisciplinaires de santé et de services sociaux (DSMSSS)', value: 'dsmsss' },
  { label: 'Conseils et comité du CISSSMC', value: 'conseils_comites_cisssmc' },
  { label: 'Fondation du CISSSMC', value: 'fondation_cisssmc' },
];


export const INLB_OPTIONS = [
  { label: 'N/A', value: 'non_applicable' },
  { label: 'Acheteur INLB', value: 'acheteur_inlb' },
  { label: 'Communication informatique adaptée (CIA)', value: 'cia' },
  { label: 'Comptoir des ventes (CDV)', value: 'cdv' },
  { label: 'Direction DI-TSA', value: 'direction_di_tsa' },
  { label: 'Direction DI-TSA - 715310 - Agrément', value: 'direction_di_tsa_agrement' },
  { label: 'Fondation INLB', value: 'fondation_inlb' },
  { label: 'Programme Adulte', value: 'programme_adulte' },
  { label: 'Programme Aîné Montérégie/Est de Montréal', value: 'programme_aine_monteregie_est_montreal' },
  { label: 'Programme Aîné Montréal/Laval', value: 'programme_aine_montreal_laval' },
  { label: 'Programme conduite automobile', value: 'programme_conduite_automobile' },
  { label: 'Programme Enfance/Jeunesse', value: 'programme_enfance_jeunesse' },
  { label: 'Programme réadaptation au travail', value: 'programme_readaptation_travail' },
  { label: 'Programme Surdicécité', value: 'programme_surdicecite' },
  { label: 'Programme régulier en déficience visuelle INLB', value: 'programme_deficience_visuelle_inlb' },
  { label: 'Service Accueil, Évaluation et Orientation (AEO)', value: 'aeo' },
  { label: 'Service de Basse vision', value: 'service_basse_vision' },
  { label: "Service de l'adaptation de l'information (SAI)", value: 'sai' },
  { label: 'Service de soutien aux partenaires et à la collectivité', value: 'service_soutien_partenaires' },
  { label: 'Service des aides techniques (SAT)', value: 'sat' },
  { label: 'Service Réception/Archives', value: 'service_reception_archives' },
  { label: 'Services administratifs DI-TSA, DP et DV', value: 'services_administratifs' },
  { label: 'Transport et hébergement', value: 'transport_hebergement' },
  // { label: 'N/A', value: 'na' },
];

export const SANTE_QUEBEC_OPTIONS = [
  { label: 'N/A', value: 'nonapplicable' },
  { label: 'CISSS du Bas-Saint-Laurent', value: 'cisss_bas_saint_laurent' },
  { label: 'CIUSSS du Saguenay – Lac-Saint-Jean', value: 'ciusss_saguenay_lac_saint_jean' },
  { label: 'CHU de Québec – Université Laval', value: 'chu_quebec_universite_laval' },
  { label: 'Institut universitaire de cardiologie et de pneumologie', value: 'institut_cardiologie_pneumologie' },
  { label: 'CIUSSS de la Capitale-Nationale', value: 'ciusss_capitale_nationale' },
  { label: 'CIUSSS de la Mauricie-et-du-Centre-du-Québec', value: 'ciusss_mauricie_centre_quebec' },
  { label: 'CIUSSS de l’Estrie – Centre hospitalier universitaire de Sherbrooke', value: 'ciusss_estrie_chu_sherbrooke' },
  { label: 'CIUSSS de l’Ouest-de-l’Île-de-Montréal', value: 'ciusss_ouest_ile_montreal' },
  { label: 'CIUSSS du Centre-Ouest-de-l’Île-de-Montréal', value: 'ciusss_centre_ouest_ile_montreal' },
  { label: 'CIUSSS du Centre-Sud-de-l’Île-de-Montréal', value: 'ciusss_centre_sud_ile_montreal' },
  { label: 'CIUSSS du Nord-de-l’Île-de-Montréal', value: 'ciusss_nord_ile_montreal' },
  { label: 'CIUSSS de l’Est-de-l’Île-de-Montréal', value: 'ciusss_est_ile_montreal' },
  { label: "Centre hospitalier de l'Université de Montréal (CHUM)", value: 'chum' },
  { label: 'Centre universitaire de santé McGill (CUSM)', value: 'cusm' },
  { label: 'Centre hospitalier universitaire (CHU) Sainte-Justine', value: 'chu_sainte_justine' },
  { label: 'Institut de cardiologie de Montréal (ICM)', value: 'icm' },
  { label: 'Institut national de psychiatrie légale Philippe-Pinel', value: 'institut_psychiatrie_legale' },
  { label: "CISSS de l'Outaouais", value: 'cisss_outaouais' },
  { label: "CISSS de l’Abitibi-Témiscamingue", value: 'cisss_abitibi_temiscamingue' },
  { label: 'CISSS de la Côte-Nord', value: 'cisss_cote_nord' },
  { label: 'Centre régional de santé et de services sociaux (CRSSS) de la Baie-James', value: 'crsss_baie_james' },
  { label: 'CISSS de la Gaspésie', value: 'cisss_gaspesie' },
  { label: 'CISSS des Îles', value: 'cisss_iles' },
  { label: 'CISSS de Chaudière-Appalaches', value: 'cisss_chaudiere_appalaches' },
  { label: 'CISSS de Laval', value: 'cisss_laval' },
  { label: 'CISSS de Lanaudière', value: 'cisss_lanaudiere' },
  { label: 'CISSS des Laurentides', value: 'cisss_laurentides' },
  { label: 'CISSS de la Montérégie-Centre', value: 'cisss_monteregie_centre' },
  { label: 'CISSS de la Montérégie-Est', value: 'cisss_monteregie_est' },
  { label: 'CISSS de la Montérégie-Ouest', value: 'cisss_monteregie_ouest' },
  { label: 'Régie régionale de la santé et des services sociaux du Nunavik', value: 'regie_nunavik' },
  { label: 'Conseil cri de la santé et des services sociaux de la Baie James', value: 'conseil_cri_baie_james' },
];