import SmartTable from 'react-next-table'

const headCells = [
  {
    id: 'name',
    numeric: false,
    label: 'Name',
    width: 200
  },
  {
    id: 'date',
    numeric: false,
    label: 'Date',
    width: 150
  },
  {
    id: 'Time',
    numeric: false,
    label: 'Time',
    width: 150
  },
  {
    id: 'Update',
    nume10ic: false,
    label: 'Update',
    width: 1000
  }
]

const data = [
  {
    _id: '6144145976c7fe',
    email: 'minageres123@gmail.com',
    name: 'Mina',
    phone: '+9617099995114',
    subject: 'test',
    message: 'ahlannn',
    date: '2021-09-17 19:10:50'
  },
  {
    _id: '6143989f9d87cc',
    email: 'as@a.com',
    name: 'as',
    phone: '+9617646699991',
    subject: 'as',
    message: 'as',
    date: '2021-09-16 22:18:31'
  },
  {
    _id: '614397edc9177d8c8',
    email: 'amine@amine.com',
    name: 'amine',
    phone: '+334343439393993',
    subject: '1234',
    message: '3434',
    date: '2021-09-16 22:15:57'
  },
  {
    _id: '6143be67dfca4985c',
    email: 'dominique.amine@gmail.com',
    name: 'Dominique',
    phone: '+96189904686',
    subject: 'Dev ',
    message: 'Ohmaga',
    date: '2021-09-16 21:33:04'
  },
  {
    _id: '61141e57a7dbd8a189e',
    email: 'amineamine19961996@gmail.com',
    name: 'amine amine',
    phone: '+96176776341',
    subject: 'qw',
    message: 'qw',
    date: '2021-08-11 22:00:39'
  }
]

export default function Exemple() {
  return (
    <h1>
      <SmartTable title="Upcommings" data={data} headCells={headCells} />
    </h1>
  )
}
