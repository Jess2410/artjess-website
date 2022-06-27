import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout({children, title}) {
  return (
    <div className={styles.wrapper}>
    <Navbar/>
    <h1 className='title-page' title={title}>{title}</h1>
    {children}
    </div>
  )
}
