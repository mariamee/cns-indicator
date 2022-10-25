import SmartTable from 'react-next-table';
        const headCells = [
            {
              id: 'email',
              numeric: false,
              label: 'Email',
              width: 200,
            },
            {
              id: 'name',
              numeric: false,
              label: 'Name',
              width: 150,
            },
            {
              id: 'phone',
              numeric: false,
              label: 'Phone',
              width: 100,
            },
            
            {
              id: 'role',
              numeric: false,
              label: 'Title',
              width: 700,
            },
          ];
          
          const data = [
            {
              _id: '6144145976c7fe',
              email: 'a.maftouh@onda.ma',
              name: 'Abdelhak Maftouh',
              phone: '+212662234578',
              subject: 'test',
              role: 'Chef de Service de communication et navigation aérienne',
              date: '2021-09-17 19:10:50',
            },
            {
              _id: '6143989f9d87cc',
              email: 'rachid@onda.ma',
              name: 'Rachid',
              phone: '+212662070798',
              subject: 'as',
              role: 'Chef d equipe',
              date: '2021-09-16 22:18:31',
            },
            {
              _id: '614397edc9177d8c8',
              email: 'q.hanine@onda.ma',
              name: 'Qamar Hanine',
              phone: '+212662100798',
              subject: '1234',
              role: 'Ingénieur en électricité',
              date: '2021-09-16 22:15:57',
            },
            {
              _id: '6143be67dfca4985c',
              email: 'dominique.amine@gmail.com',
              name: 'Dounia',
              phone: '+212662100701',
              subject: 'Dev ',
              role: 'Technicien spécialisé en sécurité aérienne',
              date: '2021-09-16 21:33:04',
            },
            {
              _id: '61141e57a7dbd8a189e',
              email: 'aminea6@onda.ma',
              name: 'Amine Alouali',
              phone: '+21266200711',
              role: 'Ingénieur réseaux et télécommunications',
              date: '2021-08-11 22:00:39',
            },
          ];
          
          export default function Exemple() {
            return <SmartTable title="Emails" data={data} headCells={headCells} />;
          }