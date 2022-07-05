import React from 'react'
import { ConnexionAdmin } from '../components/Connexion/Connexion.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Layout from '../components/Layout/Layout'

export default function about() {
  return (
    <div>
      <Layout title="Connexion Admin">
         <ConnexionAdmin/>
      </Layout>
      <Footer/>
       
    </div>
  )
}
