import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setGetCustomerInfo } from "../../redux/customers/actions";
import DropdownMenu from "./DropDownMenu/DropDownMenu";
import { logOutFunction } from "../../redux/customers/actions";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URI } from "../../public/assets/app.config";
import { toast } from "react-toastify";
import Cart from "../Cart/Cart";
import { setGetCart } from "../../redux/cart/actions";
// import styles from './Navbar.module.css'

export default function Navbar() {
  const { cart } = useSelector((s) => s.cartReducer);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const customerStore = useSelector((s) => s.customerReducer);

  useEffect(() => {
    const customerData = localStorage.getItem("customer-infos");
    dispatch(setGetCustomerInfo(JSON.parse(customerData)));
  }, [dispatch]);
  useEffect(() => {
    let cartData = []
    if(typeof window !== "undefined"){
      cartData = localStorage.getItem("cart-infos");
    }
    console.log("cartData: " + cartData);
    dispatch(setGetCart(JSON.parse(cartData) ?? []));
  }, [dispatch]);

  const logOut = (customerId) => {
    setLoading(true);
    axios
      .post(`${BASE_URI}/customer/auth/${customerId})`, {
        token: customerStore?.customer_infos?._id,
      })
      .then((res) => {
        sessionStorage.clear();
        localStorage.clear();
        dispatch(logOutFunction());
        router.push("/connexion");
        setLoading(false);
      })
      .catch((err) => {
        toast.warning("Une erreur s'est produite !");
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <div className="navbar">
      <a href="#" className="logo"></a>
      <ul className="navigation active">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li onClick={() => setOpen(!open)}>
          {/* <Link href="/connexion" > */}

          {open ? (
            <div>
              <a>
                <Image
                  src="/images/close.svg"
                  alt="icon"
                  width={30}
                  height={30}
                />
              </a>
              <DropdownMenu />
            </div>
          ) : (
            <a>
              <Image
                src="/images/customers.svg"
                alt="icon"
                width={30}
                height={30}
              />
            </a>
          )}
        </li>
        <li onClick={() => logOut()}>
          <a>
            <Image src="/images/close.svg" alt="icon" width={30} height={30} />
          </a>
        </li>

        {/* <Link href="/cart">
                            <a>
                                <div className="img-notif-container">
                                    <Image src="/images/cart.svg" width={30} height={30} alt="icône cadi" />
                                    <span className="notif">0</span>
                                </div>
                                </a>
                        </Link> */}
        <li onClick={() => setOpenCart(!openCart)}>
          <div>
            <a>
              <div className="img-notif-container">
                <Image
                  src="/images/cart.svg"
                  width={30}
                  height={30}
                  alt="icône cadi"
                />
                <span className="notif">{cart?.length}</span>
              </div>
            </a>
            {openCart && <Cart />}
          </div>
          {/* {? 
                        :
                        <a>
                        <div className="img-notif-container">
                            <Image src="/images/cart.svg" width={30} height={30} alt="icône cadi" />
                            <span className="notif">{cart.length}</span>
                        </div>
                        </a>
                    // <Cart/>     
                        } */}
        </li>
      </ul>
    </div>
  );
}
