import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Formulaire_qualifs from 'components/Formulaire_qualifs'
import Head from 'next/head'
import Formulaire_formation from './Formulaire_formation'
import Formulaire_experience from './Formulaire_experience'
import Formulaire_stage from './Formulaire_stage'
import Example from 'components/data'
import Fiche_perso from './Fiche_perso'

import CV from 'react-cv'
import { CVData } from './data';



const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ONDA CNS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="container flex justify-center">{children}</div>
        <div>
        <CV {...CVData} />
      </div>
        <div className="container flex justify-center">{children}</div>
      </div>
    </>
  )
}

export default Layout
