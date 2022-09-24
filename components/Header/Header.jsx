import React, { useState } from "react";
import Image from "next/image";
import menu from "/public/images/menu.png";
import close from "/public/images/close.png";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

export default function Header() {
 
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);

    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
  };
  return (
    <header className="header">
      <Navbar />
      <div className="banner" id="home">
        <div className="banner-text">
          <div className={styles.row}>
            <h2>
              <span>ART</span> Of{" "}
            </h2>
            <div className="sign"></div>
          </div>
          <div   className={styles.flex}>  
            <a className={styles.text} target="_blank" href="https://www.instagram.com/art.jess2410" rel="noreferrer">Follow me on Instagram </a>
            <div className={styles.imgBx}>
              <Image src="/images/instagram.svg" alt="icon" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
