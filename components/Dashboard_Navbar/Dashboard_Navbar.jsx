import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Dashboard_Navbar.module.css'

export default function Dashboard_Navbar() {
  return (
    <div className={styles.dashboard_navbar}>
    <ul className="menu">
        <h3 className={styles.title}>Main</h3>
        <li className={styles.li}>   
            <Image src="/images/dashboard.svg" alt="icon" width={30} height={30} />
            <Link href="/dashboard" >
                <a className={styles.link}>Dashboard</a>
            </Link>
        </li>
        <h3 className={styles.title}>Lists</h3>
        <li className={styles.li}>   
            <Image src="/images/orders.svg" alt="icon" width={30} height={30} />
            <Link href="/orders" >
                <a className={styles.link}>Orders</a>
            </Link>
        </li>
        <li className={styles.li}>   
            <Image src="/images/products.svg" alt="icon" width={30} height={30} />
            <Link href="/products" >
                <a className={styles.link}>Products</a>
            </Link>
        </li>
        <li className={styles.li}>   
            <Image src="/images/customers.svg" alt="icon" width={30} height={30} />
            <Link href="/customers" >
                <a className={styles.link}>Customers</a>
            </Link>
        </li>
        <h3 className={styles.title}>Services</h3>
        <li className={styles.li}>   
            <Image src="/images/messages.svg" alt="icon" width={30} height={30} />
            <Link href="/messages" >
                <a className={styles.link}>Messages</a>
            </Link>
        </li>
        <li className={styles.li}>   
            <Image src="/images/analytics.svg" alt="icon" width={30} height={30} />
            <Link href="/analytics" >
                <a className={styles.link}>Analytics</a>
            </Link>
        </li>
        <li className={styles.li}>   
            <Image src="/images/addproducts.svg" alt="icon" width={30} height={30} />
            <Link href="/addproducts" >
                <a className={styles.link}>Add a product</a>
            </Link>
        </li>
        <li className={styles.li}>   
            <Image src="/images/logout.svg" alt="icon" width={30} height={30} /> 
            <Link href="/logout" >
                <a className={styles.link}>Log out</a>
            </Link>
        </li>
    </ul>
            {/* <ul className="navigation">
                <li>
                    <Link href="/" >
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" >
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" >
                        <a>Gallery</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop" >
                        <a>Shop</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" >
                        <a>Contact</a>
                    </Link>
                </li>
            </ul> */}
          </div>
  )
}
