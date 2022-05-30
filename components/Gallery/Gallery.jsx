import React from "react";
import Image from "next/image";
import img1 from "./../../public/images/img1.jpg";
import img2 from "./../../public/images/img2.jpg";
import img3 from "./../../public/images/img3.jpg";
import styles from "./Gallery.module.css";
import { ImageBox } from "../Shared/ImageBox";

const imagesBoxData = [
  { alt: "img1", src: img1 },
  { alt: "img2", src: img2 },
  { alt: "img3", src: img3 },
  { alt: "img4", src: img1 },
  { alt: "img5", src: img2 },
  { alt: "img6", src: img3 },
  { alt: "img7", src: img1 },
  { alt: "img8", src: img2 },
  { alt: "img9", src: img3 },
  { alt: "img10", src: img1 },
  { alt: "img11", src: img2 },
  { alt: "img12", src: img3 },
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h3 className="title">Gallery</h3>
      <section className={styles.gallery_content}>
        {imagesBoxData.map((img, index) => {
          return <ImageBox key={index} img={img.src} alt={img.alt} />;
        })}
      </section>
    </div>
  );
}
