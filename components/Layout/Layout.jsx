import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Layout({children, title}) {
  return (
      <>
    <Navbar/>
    <h1 className='title-page' title={title}>{title}</h1>
    {children}
    </>
  )
}
