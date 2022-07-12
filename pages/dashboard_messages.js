import React from 'react'
import Dashboard_Sidebar from '../components/Dashboard_Sidebar/Dashboard_Sidebar.jsx'
import Dashboard from '../components/Dashboard/Dashboard.jsx'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboard/LayoutDashboard'
// import '*.module.css'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Mes Messages">
        
        {/* <Dashboard/> */}
      <LayoutDashboard>

      </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
