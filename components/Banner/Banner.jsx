import React from 'react'
import Image from 'next/image'
import bg3 from './../../public/images/bg3.jpg'
// import './Banner.module.css'

export default function Banner() {
  return (
      <div> 
          <section className="banner" id="home">
            <h2><span>Live</span>Your Life</h2>
            <h3>Full of<br/><span>Colors</span></h3>
            <Image src={bg3} alt="frozen"  layout="fill" />
        </section>
    </div>
   
  )
}
