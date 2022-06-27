import React from 'react'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Layout from '../components/Layout/Layout'

export default function about() {
  return (
    <div>
      <Layout title="Contact">
         <Contact/>
      </Layout>
      <Footer/>
    </div>
  )
}
