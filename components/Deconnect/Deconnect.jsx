import React from 'react'
import Image from 'next/image'
import bgjess from './../../public/images/bgjess.jpg'
import sign from './../../public/images/sign.png'
import Layout from '../Layout/Layout'
import styles from './Deconnect.module.css'

export default function Deconnect() {
  return (
        <section className={styles.deconnect}>

                    {/* <div className="col50"> */}
                        <div className="imgBx">
                         <Image src={bgjess} alt="dessin"  layout="responsive"/>
                         <h3 className='title'>{"Vous allez être redirigé(e) vers l'accueil..."}</h3>     
                        {/* </div> */}
                    </div>
       {/* <div className="col50"> */}
               
                    {/* <div className="imgBx-signature"> */}
                    {/* <Image className="signature" src={sign} alt='sign' width={80} height={80} />
                    </div> */}
       {/* </div> */}

</section>

  )
}
