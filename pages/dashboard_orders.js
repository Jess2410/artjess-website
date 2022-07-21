import React from 'react'
import Dashboard_Orders from '../components/Dashboard_Orders/Dashboard_Orders'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Liste de Commandes">
        <LayoutDashboard>
          <Dashboard_Navbar/>
          <Dashboard_Orders/>
        </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
