import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'
import Footer from '../Footer/Footer'

export default function Layout({children, title}) {
  return (
    <div className={styles.wrapper}>
    <Navbar/>
    <h1 className='title-page' title={title}>{title}</h1>
    <div className={styles.children}>
      <div className={styles.grow}>
       {children}
      </div>
      {/* <Footer/> */}
    </div>
    </div>
  )
}
