export const hydroqcFormFields = [
  { label: 'Informations générales de la demande', type: 'header2' },
  { key: 'noRequisitionHydro', label: 'Numéro de réquisition', type: 'text' },
  { key: 'noDemandeHydro', label: 'Numéro de commande', type: 'text' },
  { key: 'dateDemandeHydro', label: 'Date de la demande', type: 'text' },
  { key: 'nomClientHydro', label: 'Nom du client', type: 'text' },
  { key: 'noClientHydro', label: 'Numéro du client (si connu)', type: 'text' },
  { key: 'nomContactHydro', label: 'Nom du contact', type: 'text' },
  { key: 'courrielContactHydro', label: 'Courriel du contact', type: 'text' },
  { key: 'noTelephoneHydro', label: 'Numéro de téléphone', type: 'text' },
  { key: 'adresseFacturationHydro', label: 'Adresse de facturation postale et courriel', type: 'text' },

  { key: 'infoGeneralHydro', label: 'Informations spécifiques du document', type: 'header2' },
  { key: 'nomProjetHydro', label: 'Nom du projet', type: 'text' },
  { key: 'confidentielHydro', type: 'checkbox-list', label: 'Confidentiel',
    options: [
      { label: 'Oui', value: 'recto' },
      { label: 'Non', value: 'rectoVerso' }
    ]
  },
  { key: 'docSourceHydro', label: 'Document source', type: 'select',
    options: [
      { label: 'À retourner', value: 'retourner' },
      { label: 'À téléchargé', value: 'telecharger' }
    ]
  },
  { key: 'dosTravailHydro', label: 'Dossier de travail', type: 'text' },
  { key: 'langueHydro', label: 'Langue', type: 'select',
    options: [
      { label: 'Français', value: 'retourner' },
      { label: 'Anglais', value: 'telecharger' },
      { label: 'Espagnol', value: 'telecharger' },
      { label: 'Autre', value: 'telecharger' },
    ]
  },
  { key: 'langueAutreHydro', label: 'Si autre, spécifier', type: 'text' },
];