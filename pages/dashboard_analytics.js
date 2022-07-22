import React from 'react'
import Analytics from '../components/Analytics/Analytics'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

export default function dashboard() {
  return (
    <div className='essai'>
        <Layout title="Dashboard - Mes Stats">
          <LayoutDashboard>
            <Dashboard_Navbar/>
            <Analytics/>
          </LayoutDashboard>
        </Layout>
       
    </div>
  )
}
