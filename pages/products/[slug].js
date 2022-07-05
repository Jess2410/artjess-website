import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Shop from '../../components/Shop/Shop.jsx'
import Layout from '../../components/Layout/Layout'
import Footer from '../../components/Footer/Footer.jsx'


export default function ProductScreen() {
  return (
    <div>
    <Layout title="Product">
         {/* <Shop/> */}
      </Layout>
      <Footer/>
    </div>
  );
}