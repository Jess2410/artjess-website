import React from 'react'
import Image from 'next/image'
import styles from './Dashboard.module.css'
import Link from 'next/link'



export default function Dashboard() {
  return (
      <>
      <div className={styles.line}></div>
    {/* <section className={styles.contact} id="contact"> */}
    {/* <div className={styles.content}> */}
        
        {/* <div className={styles.contactForm}>
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
    <footer className={styles.footer}>
      <p className={styles.footer}>2022 - Jessica TOUNKARA</p>
      <div className={styles.sci}>
        <ul>
            <li>
                <Link href="#">
                    <a> 
                        <Image src={instagram} width={30} height={30} alt="instagram"/>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a> 
                        <Image src={linkedin} width={30} height={30} alt="linkedin"/>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a> 
                        <Image src={facebook} width={30} height={30} alt="facebook"/>
                    </a>
                </Link>
            </li>
        </ul>
      </div>
    </footer> */}
</>
  )
}
