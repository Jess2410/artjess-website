import React from "react";
import Image from "next/image";
import img1 from "./../../public/images/img1.jpg";
import img2 from "./../../public/images/img2.jpg";
import img3 from "./../../public/images/img3.jpg";
import styles from "./Shop.module.css";
import { ImageBoxShop } from "../Shared/ImageBoxShop";

const imagesBoxData = [
  { alt: "img1", src: img1, price: "100", title: "title1" },
  { alt: "img2", src: img2, price: "200", title: "title2" },
  { alt: "img3", src: img3, price: "300", title: "title3" },
  { alt: "img4", src: img1, price: "400", title: "title4" },
  { alt: "img5", src: img2, price: "500", title: "title5" },
  { alt: "img6", src: img3, price: "600", title: "title6" },
  { alt: "img7", src: img1, price: "700", title: "title7" },
  { alt: "img8", src: img2, price: "800", title: "title8" },
  { alt: "img9", src: img3, price: "900", title: "title9" },
  { alt: "img10", src: img1, price: "1000", title: "title10" },
  { alt: "img11", src: img2, price: "1100", title: "title11" },
  { alt: "img12", src: img3, price: "1200", title: "title12" },
];

export default function Shop() {
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
