import React from 'react'
import Image from 'next/image'
import facebook from './../../public/images/facebook.png'
import styles from "./Contact.module.css";


export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
    <div className={styles.content}>
        <div className={styles.mxw800p}>
            <h3 className={styles.title}>Contact</h3>
            <p>Pour tout renseignement complémentaire, n&rsquo;hésitez pas à me contacter</p>
        </div>
        <div className={styles.contactForm}>
            <form>
                <div className={styles.row100}>
                    <div className={styles.inputBx50}>
                        <input type="text" name="" placeholder="Full Name"/>
                    </div>
                    <div className={styles.inputBx50}>
                        <input type="mail" name="" placeholder="Email Address"/>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                        <textarea placeholder="Message"></textarea>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                        <input type="submit" name="" value="Send"/>
                    </div>
                </div>
            </form>
        </div>
        <div className={styles.sci}>
            <ul>
                <li><a href="#"><Image src={facebook} alt="fb"/></a></li>
                <li><a href="#"><Image src={facebook} alt="fb"/></a></li>
                <li><a href="#"><Image src={facebook} alt="fb"/></a></li>
            </ul>
        </div>
    </div>
</section> 
  )
}
