import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from "react-redux";
import { setGetCustomerInfo } from '../../redux/customers/actions';


export default function Navbar() {
    const dispatch = useDispatch()
    const customerStore = useSelector((s) => s.customerReducer);
    console.log(
      "🚀 ~ file: Header.jsx ~ line 11 ~ Header ~ customerStore",
      customerStore
    );

    useEffect(() => {
      const customerData = localStorage.getItem("customer-infos")
        dispatch(setGetCustomerInfo(JSON.parse(customerData)))
    }, [dispatch])
    

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
