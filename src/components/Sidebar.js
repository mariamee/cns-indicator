import Image from 'next/image'
import { useState } from 'react'
import control from '/src/components/assets/control.png'
const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Mon équipe', src: 'group' },
    { title: 'Mes équipements', src: 'equipement' },
    { title: 'Indicateur', src: 'indicateur' },
    { title: 'Maintenance', src: 'maintenance' },
    { title: 'Cartographies', src: 'cartographie' },
    { title: 'Bilans', src: 'bilan' }
  ]

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-sky-100 text-background h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          src={control}
          alt="/"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col items-center justify-center"></div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-l font-semibold items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}
            >
              <img src={`./src/components/assets/${Menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex space-x-20 p-7">
        <h1 className="text-left font-semibold">Meséquipements</h1>
        <div className="flex justify-center space-x-20 text-white ">
          <div className="flex-1 text-lg font-medium text-white px-0">
            <figure className="flex d-flex rounded-xl px-20 pt-1 pb-5 bg-sky-1000/70 text-xl shadow-xl leading-loose">
              Navigation
              <ul className="list-disc text-lg flex-row leading-relaxed tracking-wide">
                <li>
                  VOR/DME
                  <ul className="list-disc m text-xs">
                    <li>VOR | Indra VRB 53D | N</li>
                    <li>VOR | Indra VRB 53D | S</li>
                    <li>DME/R | INDRA LDB 103 | N</li>
                    <li>DME/R | INDRA LDB 103 | S</li>
                    <li>Poste supervision et configuration</li>
                    <li>Liaison FH</li>
                    <li>Switches</li>
                    <li>Ensemble Telecommande et Panneau d état</li>
                  </ul>
                </li>
                <li>
                  ILS/DME Att
                  <ul className="list-disc m text-xs">
                    <li>LOCALIZER</li>
                    <li>GLIDE PATH</li>
                    <li> DME/L</li>
                    <li>Poste supervision et configuration</li>
                    <li>Liaison FH LOC</li>
                    <li>Liaison FH GP</li>
                    <li>Ensemble Telecommande et Panneau d état</li>
                  </ul>
                </li>
              </ul>
            </figure>
          </div>
          <div className="flex-1 text-lg font-medium ">
            <figure className="rounded-xl p-5 bg-grey-20 d-flex text-xl shadow-xl">
              Communication
              <ul className="list-disc m text-xs">
                <li className="text-lg">
                  <li>VHF</li>
                  <ul className="list-disc m text-xs">
                    <li> Emetteurs Jotron TA7650 | N</li>
                    <li> Emetteurs Jotron TA7650 | S</li>
                    <li> Récepteurs Jotron RA7203 | N</li>
                    <li> Récepteurs Jotron RA7203 | S</li>
                    <li> Basculeurs Jotron ACU 81860 | N</li>
                    <li> Basculeurs Jotron ACU 81860 | S</li>
                  </ul>
                  <li className="text-lg">
                    <li>VHF</li>
                    <ul className="list-disc m text-xs">
                      <li> TX/RX VHF AM | Telerad 846</li>
                      <li> TX/RX VHF AM | icom</li>
                    </ul>
                  </li>
                  <li className="text-lg">
                    <li>VHF</li>
                    <ul className="list-disc m text-xs">
                      <li> Emetteurs Jotron TA7650 | N</li>
                      <li> Emetteurs Jotron TA7650 | S</li>
                      <li> Récepteurs Jotron RA7203 | N</li>
                      <li> Récepteurs Jotron RA7203 | S</li>
                      <li> Basculeurs Jotron ACU 81860 | N</li>
                      <li> Basculeurs Jotron ACU 81860 | S</li>
                    </ul>
                  </li>

                  <li className="text-lg">
                    <li>VHF</li>
                    <ul className="list-disc m text-xs">
                      <li>Récepteurs | JotronRA7202 | N</li>
                      <li>Basculeurs | JotronACU 81860</li>
                    </ul>
                  </li>
                  <li className="text-lg">
                    <li>UHF</li>
                    <ul className="list-disc m text-xs">
                      <li>TX/RX station | ICOM </li>
                      <li>Radios portatif | ICOM</li>
                    </ul>
                  </li>
                  <li className="text-lg">
                    <li>VCS</li>
                    <ul className="list-disc m text-xs">
                      <li>Chaine radio et postes opérateurs | GAREX 220</li>
                      <li>Serveur de supervision et de configuration</li>
                    </ul>
                  </li>

                  <li className="text-lg">
                    <li>Enregistrement</li>
                    <ul className="list-disc m text-xs">
                      <li>Enregistreurs | RICOCHET | Serveur N</li>
                      <li>Stations d administration et d ecoute des enregistrements</li>
                    </ul>
                  </li>

                  <li className="text-lg">
                    <li>Telephone</li>
                    <ul className="list-disc m text-xs">
                      <li>Ligne directe CCR | BL(VPN)</li>
                      <li>Ligne directe CCR | FXS</li>
                      <li>Ligne directe CCR | E&M</li>
                      <li>Ligne interne | BC</li>
                      <li>Ligne interne | PABX</li>
                    </ul>
                  </li>
                </li>
                <li className="text-lg">
                  <li>FH</li>
                  <ul className="list-disc m text-xs">
                    <li>CXR QX3440 |Tour de controle</li>
                    <li>CXR QX3440 |Antenne avance</li>
                  </ul>
                </li>
              </ul>
            </figure>
          </div>
          <div className="flex-1 text-lg font-medium">
            <figure className="rounded-xl p-5 bg-sky-1100 shadow-xl">
              Data
              <ul className="list-disc m text-xs">
                <li>DATIS</li>
                <li className="text-lg">
                  <li>RINAM</li>
                  <ul className="list-disc m text-xs">
                    <li> Modem| IAM</li>
                    <li> Routeur| Cisco</li>
                    <li> Switches| Cisco</li>
                    <li> Poste LVM</li>
                  </ul>
                </li>
                <li className="text-lg">
                  <li>AMHS</li>
                  <ul className="list-disc m text-xs">
                    <li> Modem| IAM</li>
                    <li> Routeur| Cisco</li>
                    <li> Switches| Cisco</li>
                    <li> Poste LVM</li>
                  </ul>
                </li>
              </ul>
            </figure>
          </div>

          <div className="flex-1 text-lg font-medium">
            <figure className="rounded-xl p-5 bg-sky-1200 shadow-3xl">Energie</figure>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
