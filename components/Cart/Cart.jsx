import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import styles from "./cart.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemHandler } from "../../redux/cart/actions";



export default function Cart() {

    const { cart } = useSelector((s) => s.cartReducer);
    const dispatch = useDispatch();

    const removeItemHandler = (article) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: article });
      };


  return (
    <div className={styles.dropDownMenu_content}>
        <ul>

            {cart?.map((article, index) => (
                <li key={index}>
                    <p>x{article?.quantity} - {article?.name} 
                        <button className={styles.buttonNone} onClick={() => removeItemHandler(article)}>
                            <Image src="/images/trashIcon.svg" alt="icon" width={30} height={30} />
                        </button>
                    </p> 
                </li>
            ))}
                    <hr />
                            {
                            cart?.length == 0 ?
                    <Link href="/products">
                        <a className={styles.link}>
                           Shop
                        </a>
                    </Link>
                    :
                    <Link href="/details_order">
                        <a>
                          
                            <button className={styles.link}>Passer la commande</button>
                            <p>{cart?.length} article(s)</p>
                        </a>
                    </Link>}
                            
            

        </ul>
      
    </div>
  )
}