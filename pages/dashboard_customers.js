import React from 'react'
import Dashboard_Customers from '../components/Dashboard_Customers/Dashboard_Customers'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Customers">
        <LayoutDashboard>
          <Dashboard_Navbar/>
          <Dashboard_Customers/>
        </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
