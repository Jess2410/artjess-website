import React from 'react'
import Image from 'next/image'
import styles from "./Connexion.module.css";
import Link from 'next/link'


export default function Connexion() {
  return (
      <div className={styles.wrapper}>
      <div className="line"></div>
    <section className={styles.contact} id="contact">
    <div className={styles.content}>
        
        <div className={styles.contactForm}>
            <form>
            <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                    <input type="email" name="" placeholder="Email"/>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                    <input type="password" name="" placeholder="Password"/>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100 }>
                        <div className={styles.center}>
                            <div>
                                <input type="submit" name="" value="Se connecter"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                <span className={styles.span}>Vous n&rsquo;avez pas de compte ? </span> 
                <br />
                <Link href={"/subscription"}><a className={styles.a}>Inscrivez-vous</a></Link>
                </div>
            </form>
            
        </div>
    </div>                  
</section> 
</div>
  )
}
