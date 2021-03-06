import React from 'react'
import Dashboard_Messages from '../components/Dashboard_Messages/Dashboard_Messages'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Messagerie">
        <LayoutDashboard>
          <Dashboard_Navbar/>
          <Dashboard_Messages/>
        </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
