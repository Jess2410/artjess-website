import axios from "axios";
import React, {  useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Details_cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItemHandler, setUpdateQuantity, setUpdateQuantityMoins, totalAmount} from "../../redux/cart/actions";
import { BASE_URI } from '../../public/assets/app.config';
import Paypal from "../Paypal/Paypal";

export default function Details_cart() {
  const { cart } = useSelector((s) => s.cartReducer);
  const [products, setProducts] = useState([]);
  const [artSelected, setArtSelected] = useState(null);
  const [online, setOnline] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  useEffect(() => {
    let token
    if (typeof window !== 'undefined') {
       token = JSON.parse(localStorage.getItem('customer-infos'))?.token;
      }
      console.log(token)
    axios.get(`${BASE_URI}/check-auth-customer/${token}`).then(res => {
      setOnline(res.data?.success)
    })
  },[])

  const removeItemHandler = (article) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: article });
  };

  let totalPrice = 0;
  if(cart?.length !== 0){
      for(const item of cart){
          const itemPrice = item?.price * item?.quantity;
          totalPrice += itemPrice;
      }
    }

//     useEffect(() => {
//       setAmount(amount);
//     }, [amount]);
    
// const totalAmount = (amount) => {
//   dispatch({ type: "AMOUNT_CART", payload: amount = totalPrice });
//   }

//   console.log(totalAmount)


  return (
    <div className="global-container">
      {/* <p className="heading-cart">Votre panier :</p> */}
      <ul className="cart-list">
        {cart?.map((article) =>
        
        (
          
          <li key={article._id}>
            <img width={60} height={60} style={{objectFit: "cover"}} src={`${BASE_URI}/file/images-store/${article.image}`} alt={article.image} />
            <div className="bloc-cart-infos">
              <h4>{article.title}</h4>
              <p className={styles.price}>{article.price * Number(article.quantity)}€</p>
              <p>{article.name}</p>
            </div>
            <div className="bloc-input">
              {/* <label htmlFor="quantityInput">Quantity</label> */}
              <button className={styles.btn_qty}
                onClick={() =>
                  {
                    if(article.quantity > 1) {
                      dispatch(
                        setUpdateQuantityMoins({
                          ...article,
                          quantity: article.quantity - 1,
                        })
                        )
                      }
                    }
                  }
                
                
                  >
                -
              </button>
              <span>{article.quantity}</span>
              <button className={styles.btn_qty}
                onClick={() =>
                  dispatch(
                    setUpdateQuantity({
                      ...article,
                      quantity: article.quantity + 1,
                    })
                  )
                }
              >
                +
              </button>
            </div>
            <button
              className={styles.buttonNone}
              onClick={() => removeItemHandler(article)}
            >
              <Image
                src="/images/trashIcon.svg"
                alt="icon"
                width={30}
                height={30}
              />
            </button>
          </li>
        ))}
      </ul>
      <br />
      <p className={styles.total_price}>Total : {`${totalPrice.toFixed(2)}€`}</p>
      <br />
      {online ?  <Paypal amount={totalPrice.toFixed(2)} /> : <button>Connectez-vous !</button>}
     
    </div>
  );
}



