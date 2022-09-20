import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Payment_accepted.module.css";
import CheckBox from "react-animated-checkbox";
import { useEffect } from "react";


export default function Payment_accepted() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="global-container">
      <div className={styles.center}>
        <Image width={480}  height={300} src={'/images/bgjess.jpg'} alt="bg" />
      </div>
      <div className={styles.flex}>
      <CheckBox
        checked={checked}
        checkBoxStyle={{
          checkedColor: "#34b93d",
          size: 80,
          unCheckedColor: "#DA727B"
        }}
        duration={700}
        onClick={() => setChecked(true)}
      />
        <div> 
          <h1 className={styles.center_txt}>Paiement accepté !</h1>
          <p className={styles.center_txt}>Merci pour votre confiance.</p>
        </div>
      </div>

        
    </div>
  );
}



