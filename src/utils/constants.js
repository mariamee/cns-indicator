export const DEPARTMENTS = [
  {
    depName: 'Navigation',
    colorClass: 'bg-sky-1000/70',
    ensembles: [
      {
        name: 'VOR/DME',
        equipments: [
          'VOR | Indra VRB 53D | N',
          'VOR | Indra VRB 53D | S',
          'DME/R | INDRA LDB 103 | N',
          'DME/R | INDRA LDB 103 | S',
          'Poste supervision et configuration',
          'Liaison FH',
          'Switches',
          'Ensemble Telecommande et Panneau d état'
        ]
      },
      {
        name: 'ILS/DME Att',
        equipments: [
          'LOCALIZER',
          'GLIDE PATH',
          'DME/L',
          'Poste supervision et configuration',
          'Liaison FH LOC',
          'Liaison FH GP',
          'Ensemble Telecommande et Panneau d état'
        ]
      }
    ]
  },
  {
    depName: 'Communication',
    colorClass: 'bg-grey-20',
    ensembles: [
      {
        name: 'VHF',
        equipments: [
          'Emetteurs Jotron TA7650 | N',
          'Emetteurs Jotron TA7650 | S',
          'Récepteurs Jotron RA7203 | N',
          'Récepteurs Jotron RA7203 | S',
          'Basculeurs Jotron ACU 81860 | N',
          'Basculeurs Jotron ACU 81860 | S'
        ]
      },
      {
        name: 'VHF',
        equipments: ['TX/RX VHF AM | Telerad 846', 'TX/RX VHF AM | icom']
      },
      {
        name: 'VHF',
        equipments: [
          'Emetteurs Jotron TA7650 | N',
          'Emetteurs Jotron TA7650 | S',
          'Récepteurs Jotron RA7203 | N',
          'Récepteurs Jotron RA7203 | S',
          'Basculeurs Jotron ACU 81860 | N',
          'Basculeurs Jotron ACU 81860 | S'
        ]
      },
      {
        name: 'VHF',
        equipments: ['Récepteurs | JotronRA7202 | N', 'Basculeurs | JotronACU 81860']
      },
      {
        name: 'UHF',
        equipments: ['TX/RX station | ICOM', 'Radios portatif | ICOM']
      },
      {
        name: 'VCS',
        equipments: [
          'Chaine radio et postes opérateurs | GAREX 220',
          'Serveur de supervision et de configuration'
        ]
      },
      {
        name: 'Enregistrement',
        equipments: [
          'Enregistreurs | RICOCHET | Serveur N',
          'Stations d administration et d ecoute des enregistrements'
        ]
      },
      {
        name: 'Telephone',
        equipments: [
          'Ligne directe CCR | BL(VPN)',
          'Ligne directe CCR | FXS',
          'Ligne directe CCR | E&M',
          'Ligne interne | BC',
          'Ligne interne | PABX'
        ]
      },
      {
        name: 'FH',
        equipments: ['CXR QX3440 |Tour de controle', 'CXR QX3440 |Antenne avance']
      }
    ]
  },
  {
    depName: 'Data',
    colorClass: 'bg-sky-1100',
    ensembles: [
      {
        name: 'DATIS',
        equipments: [
          'Server 1',
          'Server 2',
          'KVM Console',
          'Switch 1',
          'Switch 2',
          'PTT1',
          'PTT2',
          'VHF Transmetter N',
          'VHF Transmetter S',
          'Poste client Tower',
          'Poste client ATSEP',
          'Poste client CLA'
        ]
      },
      {
        name: 'RINAM',
        equipments: ['Modem| IAM', 'Routeur| Cisco', 'Switches| Cisco', 'Poste LVM']
      },
      {
        name: 'AMHS',
        equipments: ['Modem| IAM', 'Routeur| Cisco', 'Switches| Cisco', 'Poste LVM']
      }
    ]
  },
  {
    depName: 'Energie',
    colorClass: 'bg-sky-1200',
    ensembles: [
      {
        name: 'Tour de controle',
        equipments: ['Onduleur 20KVA', 'Chargeur Redresseur', 'Batteries', 'TGBT']
      },
      {
        name: 'VOR DME',
        equipments: ['Stabilisateur VOR', 'Stabilisateur DME', 'Batteries']
      },
      {
        name: 'ILS DME',
        equipments: ['Stabilisateur LOC', 'Stabilisateur GP', 'Batteries']
      }
    ]
  }
]

export const MENUS = [
  { title: 'Mon équipe', src: 'group', route: '/' },
  { title: 'Mes équipements', src: 'equipements', route: 'equipments' },
  { title: 'Indicateur', src: 'indicateur', route: '/maintenance_prev' },
  { title: 'Maintenance', src: 'maintenance', route: '/maintenance' },
  { title: 'Profile', src: 'profile', route: '/profile' },
  { title: 'Cartographies', src: 'cartographie', route: '/ssss' },
  { title: 'Bilans', src: 'bilan', route: '/ssss' }
]

export const PREVENTIVE_MOCK = {
  vor_dme: {
    voir_indra_vrb_53d_vor1: 2,
    voir_indra_vrb_53d_vor2: 15,
    dmr_r_indra_ldb_103_dme_n: 21,
    dmr_r_indra_ldb_103_dme_s: 10,
    poste_supervision_et_configuration: 20,
    liaison_fh: 15,
    switches: 8,
    ensemble_telecommande_et_panneau_detat: 4
  },
  todo_name: {
    localizer_thales_421_loc_n: 18,
    localizer_thales_421_loc_s: 13,
    glide_path_thales_422_gp_n: 22,
    glide_path_thales_422_gp_s: 14,
    dme_l_thales_415_dme_n: 19,
    dme_l_thales_415_dme_s: 1,
    poste_supervision_et_configuration: 24,
    liaison_fh_loc: 10,
    liaison_fh_gp: 12
  }
}

export const PREVENTIVE_NAMES = {
  vor_dme: 'VOR/DME',
  voir_indra_vrb_53d_vor1: 'VOR, INDRA VRB 53D,OR 1',
  voir_indra_vrb_53d_vor2: 'voir_indra_vrb_53d_vor2',
  dmr_r_indra_ldb_103_dme_n: 'dmr_r_indra_ldb_103_dme_n',
  dmr_r_indra_ldb_103_dme_s: 'dmr_r_indra_ldb_103_dme_s',
  liaison_fh: 'liaison_fh',
  switches: 'switches',
  ensemble_telecommande_et_panneau_detat: 'ensemble_telecommande_et_panneau_detat',
  todo_name: 'TODO CHANGE NAME',
  localizer_thales_421_loc_n: 'localizer_thales_421_loc_n',
  localizer_thales_421_loc_s: 'localizer_thales_421_loc_s',
  glide_path_thales_422_gp_n: 'glide_path_thales_422_gp_n',
  glide_path_thales_422_gp_s: 'glide_path_thales_422_gp_s',
  dme_l_thales_415_dme_n: 'dme_l_thales_415_dme_n',
  dme_l_thales_415_dme_s: 'dme_l_thales_415_dme_s',
  poste_supervision_et_configuration: 'poste_supervision_et_configuration',
  liaison_fh_loc: 'liaison_fh_loc',
  liaison_fh_gp: 'liaison_fh_gp'
}
