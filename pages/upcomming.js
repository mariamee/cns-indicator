// import React, { useState } from 'react'
// import Map from './Map'
// import Table, { SelectColumnFilter, StatusPill, LocateCell } from './Table'
// import './styles.css'
// import { MapProvider } from './map-context'

// const getData = () => [
//   {
//     name: 'Abdelhak Maftouh',
//     email: 'abdelhak@onda.ma',
//     title: 'Chef deService de Communication Navigation et Sécurité',
//     status: 'Active',
//     role: 'SuperAdmin',
//     posCoords: [260, 900],
//     imgUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
//   },
//   {
//     name: 'Qamar Hanine',
//     email: 'qamar@onda.ma',
//     title: 'Ingénieur en éléctricité',
//     status: 'Active',
//     role: 'Member',
//     imgUrl:
//       'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
//   },
//   {
//     name: 'Rachid ',
//     email: 'rachid@onda.ma',
//     title: "Chef d'équipe de Communication et Navigation",
//     department: 'Directives',
//     status: 'Active',
//     role: 'Admin',
//     locate: 'Locate',
//     imgUrl:
//       'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
//   },
//   {
//     name: 'Amine Mouchahid',
//     email: 'amine@onda.ma',
//     title: 'Ingénieur Réseaux et Télécommunication',
//     status: 'Active',
//     role: 'Member',
//     locate: 'Locate',
//     imgUrl:
//       'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
//   },
//   {
//     name: 'Dounia',
//     email: 'dounia@onda.ma',
//     title: 'Technicien spécialisé en sécurité aérienne',
//     department: 'Mobility',
//     status: 'Active',
//     role: 'Admin',
//     locate: 'Locate',
//     imgUrl:
//       'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
//   }
// ]

// export default function App() {
//   const [mapFly, setMapFly] = useState(null)

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Nom Complet',
//         accessor: 'name'
//       },
//       {
//         Header: 'Title',
//         accessor: 'title'
//       },

//       {
//         Header: 'Status',
//         accessor: 'status',
//         Cell: StatusPill
//       },
//       {
//         Header: 'Role',
//         accessor: 'role',
//         Filter: SelectColumnFilter,
//         filter: 'includes'
//       }
//     ],
//     []
//   )

//   const data = React.useMemo(() => getData(), [])

//   return (
//     <>
//       <div className="App" style={{ height: '100%' }}>
//         <div className="min-h-screen bg-gray-100 text-gray-900">
//           <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
//             <div className="">
//               <h1 className="text-2xl font-semibold ">Mon équipe</h1>
//             </div>
//             <div className="mt-4">
//               <Table columns={columns} data={data} />
//               {/* <Table columns={columns} data={data} map={mapFly} /> */}
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   )
// }
