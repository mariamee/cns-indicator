import CV from 'react-cv'
import Layout from 'components/Layout'
import { CVData } from 'components/data'

const ProfilePage = () => {
  return (
    <Layout>
      <CV {...CVData} />
    </Layout>
  )
}

export default ProfilePage
