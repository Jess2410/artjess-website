import React from "react";
import Image from "next/image";
import img1 from "./../../public/images/img1.jpg";
import img2 from "./../../public/images/img2.jpg";
import img3 from "./../../public/images/img3.jpg";
import styles from "./Shop.module.css";
import { ImageBoxShop } from "../Shared/ImageBoxShop";
import Link from "next/link";



import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { BASE_URI } from '../../public/assets/app.config';
import { toast } from "react-toastify";

export default function Shop() {



  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(() => {
    setLoading(true);
    axios
      .get(`${BASE_URI}/products`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const id = "product"
  return (
    <>
      <div className="line"></div>
    <div className={styles.shop}>
      <section className={styles.shop_content}>
        
        {products.map((product, index) => {
          return <ImageBoxShop key={index} product={product}/>;
        })}
      </section> 
    
    </div>

    </>
  );
}
