import React from 'react'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Deconnect from '../components/Deconnect/Deconnect'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

function dashboard_logout() {
  return (
    <div className='essai'>
      <Layout title="Déconnexion">
        <LayoutDashboard>
          <Dashboard_Navbar/>
            <Deconnect/>
        </LayoutDashboard>
      </Layout>
    </div>
        
  )
}

export default dashboard_logout
