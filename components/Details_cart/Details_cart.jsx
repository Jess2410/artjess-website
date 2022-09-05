import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Details_cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItemHandler, setUpdateQuantity, setUpdateQuantityMoins} from "../../redux/cart/actions";
import { addItemCart } from "../../redux/cart/actions";

export default function Details_cart() {
  const { cart } = useSelector((s) => s.cartReducer);
  console.log(
    "🚀 ~ file: Details_cart.jsx ~ line 11 ~ Details_cart ~ cart",
    cart
  );
  const [products, setProducts] = useState([]);
  const [artSelected, setArtSelected] = useState(null);

  const dispatch = useDispatch();



    // dispatch({ type: "CART_REMOVE_ITEM", payload: article });

      const setUpdateQuantityPlus=(article)=>{
        dispatch({ type: "UPDATE_QUANTITY", payload: article });
      }

      // const setUpdateQuantityMoins=(article)=>{
      //   dispatch({ type: "UPDATE_QUANTITY_MOINS", payload: article });
      // }
    

  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  const removeItemHandler = (article) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: article });
  };

  let totalPrice = 0;
  if(cart.length !== 0){
      for(const item of cart){
          const itemPrice = item.price * item.quantity;
          totalPrice += itemPrice;
      }
  }

  return (
    <div className="global-container">
      {/* <p className="heading-cart">Votre panier :</p> */}
      <ul className="cart-list">
        {cart.map((article) => (
          
          <li key={article._id}>
            {/* <img
                  src={}
                  alt=""
                /> */}
            <div className="bloc-cart-infos">
              <h4>{article.title}</h4>
              <p>Price: {article.price * Number(article.quantity)}€</p>
              <p>{article.name}</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantity</label>
              <button
                onClick={() =>
                  dispatch(
                    setUpdateQuantityMoins({
                      ...article,
                      quantity: article.quantity - 1,
                    })
                  )
                }
              >
                -
              </button>
              <span>{article.quantity}</span>
              <button
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
      <p className="total-price">Total : {`${totalPrice.toFixed(2)}€`}</p>
      <button className="btn-cart">Procéder au paiement</button>
    </div>
  );
}