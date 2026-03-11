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