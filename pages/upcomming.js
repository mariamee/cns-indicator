// import React, { useState } from 'react'
// import Map from './Map'
// import Table, { SelectColumnFilter, StatusPill, LocateCell } from './Table'
// import './styles.css'
// import { MapProvider } from './map-context'


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
