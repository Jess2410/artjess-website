import React from 'react'
import Image from 'next/image'
import styles from "./Subscription.module.css";
import Link from 'next/link'


export default function Subscription() {
    return (
        <>
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
                      <div className={styles.inputBx50}>
                      <input type="password" name="" placeholder="Password"/>
                      </div>
                      <div className={styles.inputBx50}>
                      <input type="password" name="" placeholder="Confirm Password"/>
                      </div>
                  </div>
                  <div className={styles.row100}>
                      <div className={styles.inputBx100}>
                      <input type="text" name="" placeholder="Address"/>
                      </div>
                  </div>
                  <div className={styles.row100}>
                      <div className={styles.inputBx50}>
                      <input type="text" name="" placeholder="City"/>
                      </div>
                      <div className={styles.inputBx50}>
                      <input type="text" name="" placeholder="Code City"/>
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
  </>
    )
}
