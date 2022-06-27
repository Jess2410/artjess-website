import React from 'react'
import Image from 'next/image'
import styles from "./Contact.module.css";
import Link from 'next/link'


export default function Contact() {
  return (
      <div className={styles.wrapper}>
      <div className="line"></div>
    <section className={styles.contact} id="contact">
    <div className={styles.content}>
        
        <div className={styles.contactForm}>
            <form>
                <div className={styles.row100}>
                    <div className={styles.inputBx50}>
                        <input type="text" name="" placeholder="Last Name"/>
                    </div>
                    <div className={styles.inputBx50}>
                        <input type="mail" name="" placeholder="First Name"/>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                    <input type="mail" name="" placeholder="Email Address"/>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                        <textarea placeholder="Message"></textarea>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100 }>
                        <div className={styles.center}>
                            <input type="submit" name="" value="Send"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>                  
</section> 
    
</div>
  )
}
