import React from 'react'
import Dashboard_Products from '../components/Dashboard_Products/Dashboard_Products'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Liste de Produits">
        <LayoutDashboard>
          <Dashboard_Navbar/>
          <Dashboard_Products/>
        </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
