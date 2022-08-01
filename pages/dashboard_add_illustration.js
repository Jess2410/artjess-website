import React from 'react'
import Add_illustration from '../components/Add_illustration/Add_illustration'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Ajout de Produits">
        <LayoutDashboard>
          <Dashboard_Navbar/>
          <Add_illustration/>
        </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
