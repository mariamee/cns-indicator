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
        name: 'DATIS'
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
    colorClass: 'bg-sky-1200'
  }
]

export const MENUS = [
  { title: 'Mon équipe', src: 'group', route: '/' },
  { title: 'Mes équipements', src: 'equipements', route: 'equipments' },
  { title: 'Indicateur', src: 'indicateur', route: '/maintenance_prev' },
  { title: 'Maintenance', src: 'maintenance', route: '/maintenance' },
  { title: 'Cartographies', src: 'cartographie', route: '/ssss' },
  { title: 'Bilans', src: 'bilan', route: '/ssss' }
]
