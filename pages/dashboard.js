import React from 'react'
import Dashboard_Sidebar from '../components/Dashboard_Sidebar/Dashboard_Sidebar.jsx'
import Dashboard from '../components/Dashboard/Dashboard.jsx'
import Layout from '../components/Layout/Layout'

export default function dashboard() {
  return (
    <div>
      <Layout title="Dashboard">
          
        <Dashboard_Sidebar />
        <Dashboard/>
      </Layout>
       
    </div>
  )
}
