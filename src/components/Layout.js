import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import FormExample from 'components/FormExample'
import Head from 'next/head'

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
        <FormExample />
        <div className="container flex justify-center">{children}</div>
      </div>
    </>
  )
}

export default Layout
