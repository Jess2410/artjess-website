import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import Gallery from '../components/Gallery/Gallery.jsx'
import Layout from '../components/Layout/Layout'

export default function about() {
  return (
    <div>
      <Layout title="Gallery">
         <Gallery/>
      </Layout>
      <Footer/>
       
    </div>
  )
}
