import React from "react";
import Image from "next/image";
import img1 from "./../../public/images/img1.jpg";
import img2 from "./../../public/images/img2.jpg";
import img3 from "./../../public/images/img3.jpg";
import styles from "./Shop.module.css";
import { ImageBoxShop } from "../Shared/ImageBoxShop";
import Link from "next/link";


export default function Shop() {
  const imagesBoxData = [
    { id: "1", slug: "img1", alt: "img1", src: img1, price: "100", title: "title1" },
    { id: "2", slug: "img2", alt: "img2", src: img2, price: "200", title: "title2" },
    { id: "3", slug: "img3", alt: "img3", src: img3, price: "300", title: "title3" },
    { id: "4", slug: "img4", alt: "img4", src: img1, price: "400", title: "title4" },
    { id: "5", slug: "img5", alt: "img5", src: img2, price: "500", title: "title5" },
    { id: "6", slug: "img6", alt: "img6", src: img3, price: "600", title: "title6" },
    { id: "7", slug: "img7", alt: "img7", src: img1, price: "700", title: "title7" },
    { id: "8", slug: "img8", alt: "img8", src: img2, price: "800", title: "title8" },
    { id: "9", slug: "img9", alt: "img9", src: img3, price: "900", title: "title9" },
    { id: "10", slug: "img10", alt: "img10", src: img1, price: "1000", title: "title10" },
    { id: "11", slug: "img11", alt: "img11", src: img2, price: "1100", title: "title11" },
    { id: "12", slug: "img12,", alt: "img12", src: img3, price: "1200", title: "title12" },
  ];
  
  const id = "product"
  return (
    <>
      <div className="line"></div>
    <div className={styles.shop}>
      <section className={styles.shop_content}>
        {imagesBoxData.map((img, index) => {
          return <ImageBoxShop key={index} img={img.src} alt={img.alt} title={img.title} price={img.price}/>;
        })}
      </section> 
    
    </div>
    </>
  );
}
