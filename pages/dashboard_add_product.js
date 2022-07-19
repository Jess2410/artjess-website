import React from 'react'
import Add_product from '../components/Add_product/Add_product'
import Dashboard_Navbar from '../components/Dashboard_Sidebar/Dashboard_Sidebar'
import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'

export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Add a product">
        <LayoutDashboard>
          <Dashboard_Navbar/>
          <Add_product/>
        </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
