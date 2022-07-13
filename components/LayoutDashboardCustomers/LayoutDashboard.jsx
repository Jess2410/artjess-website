import React from 'react'
import Dashboard_Navbar from '../Dashboard_Sidebar/Dashboard_Sidebar'
import Dashboard_Customers from '../Dashboard_Customers/Dashboard_Customers'
import Navbar from '../Navbar/Navbar'
import styles from './LayoutDashboard.module.css'

export default function Layout({children, title}) {
  return (
    <div className={styles.wrapper}>
    <h1 className='title-page' title={title}>{title}</h1>
    <div className={styles.line}></div>
    {children}
      <div className={styles.flexrow}>
        <Dashboard_Navbar/>
        <Dashboard_Customers/>
      </div>
    </div>
  )
}
