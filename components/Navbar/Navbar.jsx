import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='navbar'>
            <a href="#" className="logo"></a>
            <ul className="navigation active">
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
                <li>
                    <Link href="/connexion" >
                        <a><Image src="/images/customers.svg" alt="icon" width={30} height={30} /></a>
                    </Link>
                </li>
            </ul>
          </div>
  )
}
