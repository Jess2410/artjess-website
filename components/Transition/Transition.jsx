import React from 'react'
import Image from 'next/image'
import bg3 from './../../public/images/bg3.jpg'

export default function Transition() {
  return (
    <section className="transition">
    <div className='overlay'>
    <div className='transition'>
      <h2><span>Dreamin&rsquo;</span></h2>
            <h3>Your<br/><span>Dreams</span></h3>
       <Image src={bg3} layout="fill" alt="transition"/>
    </div></div>
    </section>
  )
}
