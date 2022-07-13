import React from 'react'

import Layout from '../components/Layout/Layout'
import LayoutDashboard from '../components/LayoutDashboardCustomers/LayoutDashboard'


export default function dashboard() {
  return (
    <div className='essai'>
      <Layout title="Dashboard - Customers">
      <LayoutDashboard>
      </LayoutDashboard>
      </Layout>
       
    </div>
  )
}
