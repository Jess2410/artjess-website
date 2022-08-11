import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import img1 from "./../../public/images/img1.jpg";
import img2 from "./../../public/images/img2.jpg";
import img3 from "./../../public/images/img3.jpg";
import styles from "./Gallery.module.css";
import { ImageBox } from "../Shared/ImageBox";

import axios from "axios";
import { BASE_URI } from '../../public/assets/app.config';


export default function Gallery() {
  
  const [illustrations, setIllustrations] = useState([]);

  const [loading, setLoading] = useState(false);
  
  const getIllustrations = useCallback(() => {
    setLoading(true);
    axios
      .get(`${BASE_URI}/illustrations`)
      .then((res) => {
        setIllustrations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setLoading(false);
  }, []);
  
  useEffect(() => {
    getIllustrations();
  }, [getIllustrations]);
  
  const id = "illustration"
  return (
    <>
      <div className="line"></div>
    {/* <div className={styles.gallery}> */}
    <div className={styles.gallery}>
      <section className={styles.gallery_content}>
      {/* <div className={styles.box}>
      <div className={styles.iconBx}> */}
        
        {illustrations.map((illustration, index) => {
        console.log("my clg",illustration)
          return <ImageBox key={index} i illustration={illustration}/>;
        })}
        {/* </div> */}
        {/* </div> */}
      </section> 
    </div>
    </>
  );
}
