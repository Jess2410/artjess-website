import React from 'react'
import Image from 'next/image'
import styles from './Dashboard_Products.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { BASE_URI } from '../../public/assets/app.config';
import { toast } from "react-toastify";


export default function Dashboard_Products() {


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

  const handleDeleteProduct = (id) => {
    const loader = toast.loading("Veuillez patienter...");
    axios
      .put(`${BASE_URI}/products/delete/${id}`)
      .then((res) => {
        getProducts();
        toast.update(loader, {
          render: res.data?.message,
          type: "success",
          autoClose: 3000,
          isLoading: false,
        });
      })
      .catch((err) => {
        toast.update(loader, {
          render: "Une erreur est survenue !",
          type: "error",
          autoClose: 3000,
          isLoading: false,
        });
      });
  };

  return (

    <div className={styles.column}>
      <Link href="/dashboard_add_product">
        <div className={styles.buttonBx}>
          <button className={styles.button}>Add product</button>
          <Image src="/images/plus.svg" alt="logo" width={30} height={30} />
        </div>
      </Link>

        <div className={styles.table}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Image</th>
                  <th className={styles.th}>Nom</th>
                  <th className={styles.th}>Catégorie</th>
                  <th className={styles.th}>Prix</th>
                  <th className={styles.th}>Stock</th>
                  <th className={styles.th}>Description</th>
                  <th className={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
          {products.map((product) => (
            
            <tr className={styles.tr} key={product._id}>
              <td className={styles.td_center}> <img width={60} height={60} style={{objectFit: "cover"}} src={`${BASE_URI}/file/images-store/${product.image}`} alt={product.image} />  </td>
              <td className={styles.td_left}>{product.name}</td>
              <td className={styles.td_left}>{product.category}</td>
              <td className={styles.td_left}>{product.price}</td>
              <td className={styles.td_left}>{product.stock}</td>
              <td className={styles.td_left}>{product.description}</td>
              <td className={styles.td_center}>
                <button className={styles.buttonNone} onClick={() => handleDeleteProduct(product?._id)}>
                  <Image src="/images/trashIcon.svg" alt="icon" width={30} height={30} />
                </button>
              </td>
            </tr>
            ))}
              </tbody>
            </table>
        </div>
       
        </div>
    )
  }
