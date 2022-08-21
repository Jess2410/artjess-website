import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from "react-redux";
import { setGetCustomerInfo } from '../../redux/customers/actions';
import DropdownMenu from './DropDownMenu/DropDownMenu';
import { logOutFunction } from "../../redux/customers/actions";
import axios from 'axios';
import { useRouter } from 'next/router';
import { BASE_URI } from "../../public/assets/app.config";
import { toast } from "react-toastify";
import Cart from '../Cart/Cart';
// import styles from './Navbar.module.css'



export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [loading, setLoading] = useState(false);

    const router = useRouter()
    const dispatch = useDispatch()
    const customerStore = useSelector((s) => s.customerReducer);
    const cartStore = useSelector((s) => s.cartReducer);
    console.log("🚀 ~ file: Navbar.jsx ~ line 27 ~ Navbar ~ cartStore", cartStore)
    


    useEffect(() => {
      const customerData = localStorage.getItem("customer-infos")
        dispatch(setGetCustomerInfo(JSON.parse(customerData)))
    }, [dispatch])

    const logOut = (customerId) => {

        setLoading(true);
        axios.post(`${BASE_URI}/customer/auth/${customerId})`, {
          token : customerStore?.customer_infos?._id
        })
        .then((res) => {
          sessionStorage.clear()
          localStorage.clear()
          dispatch(logOutFunction())
          router.push("/connexion")
          setLoading(false);
        })
        .catch((err) => {
          toast.warning("Une erreur s'est produite !")
          setLoading(false);
        });
        setLoading(false);
    }

    // let totalItems = 0;
    // for(const item of cartStore.cart) {
    //     totalItems += item.quantity;
    // }
    // console.log("🚀 ~ file: Navbar.jsx ~ line 48 ~ Navbar ~ totalItems", totalItems)
    

  return (
    <div className="navbar">
            <a href="#" className="logo"></a>
            <ul className="navigation active">
                <li >
                    <Link href="/" >
                        <a >Home</a>
                    </Link>
                </li>
                <li >
                    <Link href="/about" >
                        <a >About</a>
                    </Link>
                </li>
                <li >
                    <Link href="/gallery" >
                        <a >Gallery</a>
                    </Link>
                </li>
                <li >
                    <Link href="/products" >
                        <a >Shop</a>
                    </Link>
                </li>
                <li >
                    <Link href="/contact" >
                        <a >Contact</a>
                    </Link>
                </li>
                <li  onClick={()=> setOpen(!open)}>
                    {/* <Link href="/connexion" > */}
                   
                        {open? 
                        <div>
                        <a><Image src="/images/close.svg" alt="icon" width={30} height={30} /></a>
                        <DropdownMenu/>    
                        </div>
                        :
                   
                         <a><Image src="/images/customers.svg" alt="icon" width={30} height={30} /></a>
                        }
                </li>
                <li  onClick={()=> logOut()}>
                        
                        <a><Image src="/images/close.svg" alt="icon" width={30} height={30} /></a>
                </li>
             
                         {/* <Link href="/cart">
                            <a>
                                <div className="img-notif-container">
                                    <Image src="/images/cart.svg" width={30} height={30} alt="icône cadi" />
                                    <span className="notif">0</span>
                                </div>
                                </a>
                        </Link> */}
                <li  onClick={()=> setOpenCart(!openCart)}> 

                   
                   
                    {openCart? 
                        <div>
                            <a>
                                <div className="img-notif-container">
                                    <Image src="/images/cart.svg" width={30} height={30} alt="icône cadi" />
                                    <span className="notif">0</span>
                                </div>
                                </a>
                            <Cart/>    
                        </div>
                        :
                   
                        <a><Image src="/images/cart.svg" alt="icon" width={30} height={30} /></a>
                        }
                        
                </li>
            </ul>
          </div>
  )
}
