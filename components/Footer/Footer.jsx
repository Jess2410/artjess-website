import React from 'react'
import Image from 'next/image'
import styles from "./Footer.module.css";
import Link from 'next/link'
import facebook from './../../public/images/facebook.svg'
import instagram from './../../public/images/instagram.svg'
import linkedin from './../../public/images/linkedin.svg'

export default function Footer() {
  return (
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
    </footer>
  )
}
