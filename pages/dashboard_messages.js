import React from 'react'

import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboard/LayoutDashboard'
// import '*.module.css'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Messagerie">
        
        {/* <Dashboard/> */}
      <LayoutDashboard>

      </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
