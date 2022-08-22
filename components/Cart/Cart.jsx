import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { deletedItemCart } from "../../redux/cart/actions";



export default function Cart() {

    const { cart } = useSelector((s) => s.cartReducer);
    const dispatch = useDispatch();

    const deletedItem = () => {
        dispatch(deletedItemCart())
    }


  return (
    <div className={styles.dropDownMenu_content}>
        <ul>

            {cart.map((article, index) => (
                <li key={index}>
                    <p>x{article?.quantity} - {article?.name} 
                        {/* <button className={styles.buttonNone} onClick={() => deletedItem(cart?._id)}>
                            <Image src="/images/trashIcon.svg" alt="icon" width={30} height={30} />
                        </button> */}
                    </p> 
                    
                </li>
            ))}
            

        </ul>
      
    </div>
  )
}