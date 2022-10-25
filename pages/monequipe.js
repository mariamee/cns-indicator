import Layout from "components/Layout";
import Monequipe from "components/Monequipe"


const Data = () => [
    {
      name: 'Abdelhak Maftouh',
      email: 'abdelhak@onda.ma',
      title: 'Chef deService de Communication Navigation et Sécurité',
      status: 'Active',
      role: 'SuperAdmin',
      posCoords: [260, 900],
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      name: 'Qamar Hanine',
      email: 'qamar@onda.ma',
      title: 'Ingénieur en éléctricité',
      status: 'Active',
      role: 'Member',
      imgUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      name: 'Rachid ',
      email: 'rachid@onda.ma',
      title: "Chef d'équipe de Communication et Navigation",
      department: 'Directives',
      status: 'Active',
      role: 'Admin',
      locate: 'Locate',
      imgUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      name: 'Amine Mouchahid',
      email: 'amine@onda.ma',
      title: 'Ingénieur Réseaux et Télécommunication',
      status: 'Active',
      role: 'Member',
      locate: 'Locate',
      imgUrl:
        'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      name: 'Dounia',
      email: 'dounia@onda.ma',
      title: 'Technicien spécialisé en sécurité aérienne',
      department: 'Mobility',
      status: 'Active',
      role: 'Admin',
      locate: 'Locate',
      imgUrl:
        'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    }
  ]
const monequipe=()=>{
    return(
        <Layout>
            <Monequipe/>
        </Layout>

        );
}
export default monequipe;