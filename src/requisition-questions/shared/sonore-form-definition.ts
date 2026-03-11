import {
  TECH_NAME_OPTIONS
} from '../dropdown-options'

export const sonoreFormFields = [
  { label: 'Sonore - informations générales', type: 'header4' },
  { key: 'noFichierSonore', label: 'Numéro du fichier', label2: "Sonore - Informations générales", type: 'text' },
  { key: 'dateDemandeSonore', label: 'Date de la demande', type: 'text' },

  { key: 'dateRequiseSonore', label: 'Date requise', type: 'text' },
  { key: 'quantiteSonore', label: 'Quantité', type: 'text' },
  { key: 'nbsDePageImprime', label: 'Nombre de pages imprimées', type: 'text' },
  {
    key: 'typeFichierSonore', type: 'checkbox-list',
    options: [
      { label: 'MP3', value: 'mp3' },
      { label: 'DAISY', value: 'daisy' },
      { label: 'DAISY plein texte', value: 'daisyPleinTexte' }
    ]
  },
  { key: 'lecteurSonore', label: 'Lecteur(s)', type: 'text' },
  { key: 'graphiqueSonore', label: 'Graphique (si coché, voir section dessin)', type: 'checkbox' },

  { label: 'Sonore - finition et montage', type: 'header4' },
  {
    key: 'livraisonSonore', type: 'checkbox-list',
    options: [
      { label: 'Courriel', value: 'courriel', label2: "Sonore - Finition et montage" },
      { label: 'CD', value: 'CD' },
    ]
  },
  { key: "imageSurDisqueSonore", label: 'Image sur le disque', type: 'checkbox' },
  { key: 'detailDeLImageSonore', label: "Détail de l'image", type: 'text' },
  {
    key: 'typeBoitierSonore', label: 'Type de boîtier', type: 'select',
    options: [
      { label: 'Papier', value: 'papier' },
      { label: 'Plastique', value: 'plastique' },
      { label: 'Autocollant', value: 'autocollant' }
    ]
  },
  {
    key: 'typeEtiquetteSonore', type: 'checkbox-list',
    options: [
      { label: 'Étiquette braille', value: 'etiquetteBraille' },
      { label: 'Étiquette imprimée', value: 'etiquetteImprimee' },
    ]
  },
  { key: 'libelleEtiquetteSonore', label: "Libellé de l'étiquette", type: 'text' },
  { key: 'autreEtiquetteSonore', label: "Autre", type: 'text' },

  { label: 'Sonore - nom du fichier source ou description de la production', type: 'header4' },
  { key: 'nomFichierSourceSonore', label: 'Nom/Description', label2: "Sonore - nom du fichier source ou description de la production", type: 'textarea' },

  { label: 'Sonore - spécifications du client', type: 'header4' },
  { key: 'specificationsClientSonore', label: 'Spécifications du client', type: 'textarea', label2: "Sonore - spécifications du client" },

  { label: 'Sonore - commentaire', type: 'header4' },
  { key: 'commentaireSonore', label: 'Commentaire', type: 'textarea', label2: "Sonore - commentaire" },

  { label: 'Sonore - informations tech.', type: 'header4' },
  {
    key: 'tableTechSonore',
    addTotal: true,
    label2: "Sonore - informations tech.",
    totalKey: 'noHeureTechSonore',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomTechSonore',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineTechSonore', label: 'Terminé le', type: 'date' },
      { key: 'noHeureTechSonore', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireTechSonore', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Sonore - contrôle de qualité', type: 'header4' },
  { key: 'checkboxCQTermineSonore', label: 'Terminé?', label2: "Sonore - Contrôle de qualité", type: 'checkbox' },
  {
    key: 'tableContQualSonore',
    addTotal: true,
    // label2: "Sonore - informations tech.",
    totalKey: 'noHeureContQualSonore',
    type: 'dynamicTable',
    columns: [
      {
        key: 'nomContQualSonore',
        label: 'Nom',
        type: 'select',
        options: TECH_NAME_OPTIONS
      },
      // { key: 'datePossessionTactileBrailleDuoMediaBANQ', label: 'Date de prise de possession de l\ouvrage', type: 'date' },
      { key: 'dateTermineContQualSonore', label: 'Terminé le', type: 'date' },
      { key: 'noHeureContQualSonore', label: "Nombre d'heure(s) de travail", type: 'time' },
      { key: 'commentaireContQualSonore', label: 'Commentaire', type: 'textarea' }
    ]
  },

  { label: 'Sonore - tableau de production', type: 'header4' },
  {
    key: 'tableProductionSonore',
    label: 'Sonore - Tableau de production',
    type: 'dynamicTable',
    columns: [
      { key: 'noFichProdSonore', label: 'Numéro du fichier', type: 'text' },
      { key: 'nbsDeCaracteresSonore', label: 'Nombre de caractères', type: 'text' },
      { key: 'nombreMinEnregistrementSonore', label: "Nombre de minutes d'enregistrement", type: 'text' },
    ]
  },

];