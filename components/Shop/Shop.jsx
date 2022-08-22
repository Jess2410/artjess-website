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
        console.log("🚀 ~ file: Shop.jsx ~ line 35 ~ getProducts ~ err", err)
        setLoading(false);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const id = "products"
  return (
    <>
      <div className="line"></div>
    {/* <div className={styles.shop}> */}
      <div className={styles.shop_content}>
        
        {products.map((product, index) => (
          
          <Link href={`/products/${product._id}`} key={index}>
            <a>
            <ImageBoxShop key={index} product={product}/>;
            </a>
          </Link>
        ))}
      </div> 
    
    {/* </div> */}

    </>
  );
}
