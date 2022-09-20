import axios from "axios";
import React, {  useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Payment_accepted.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItemHandler, setUpdateQuantity, setUpdateQuantityMoins, totalAmount} from "../../redux/cart/actions";
import { BASE_URI } from '../../public/assets/app.config';
import Paypal from "../Paypal/Paypal";
import Link from "next/link";

export default function Payment_accepted() {
  return (
    <div className="global-container">
      <div className={styles.center}>
        <Image width={480}  height={300} src={'/images/bgjess.jpg'} alt="bg" />
      </div>
        <h1 className={styles.center_txt}>Paiement accepté !</h1>
        <p className={styles.center_txt}>Merci pour votre confiance.</p>
    </div>
  );
}



