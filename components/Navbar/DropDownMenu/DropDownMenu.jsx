import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import styles from "./DropDownMenu.module.css";



export default function DropdownMenu() {


  return (
    <div className={styles.dropDownMenu_content}>
        <ul className={styles.link_content}>
            <li className={styles.link_button}>
                <Link href="/connexion" >
                    <a className={styles.link_button}><Image src="/images/customers.svg" alt="icon" width={30} height={30} />
                    <p>Log In</p></a>
                </Link>
            </li>
            <li>
                <Link href="/inscription" >
                    <a className={styles.link_button}><Image src="/images/plus.svg" alt="icon" width={30} height={30} /><p>Subscribe</p></a>
                </Link>
            </li>
        </ul>
            
    </div>
  )
}
