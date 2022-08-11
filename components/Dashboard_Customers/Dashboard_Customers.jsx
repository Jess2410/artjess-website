import React from 'react'
import Image from 'next/image'
import styles from './Dashboard_Customers.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { BASE_URI } from '../../public/assets/app.config';
import { toast } from "react-toastify";


export default function Dashboard_Customers() {


  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCustomers = useCallback(() => {
    setLoading(true);
    axios
      .get(`${BASE_URI}/customers`)
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const handleDeleteCustomer = (id) => {
    const loader = toast.loading("Veuillez patienter...");
    axios
      .put(`${BASE_URI}/customers/delete/${id}`)
      .then((res) => {
        getCustomers();
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
  
        <div className={styles.table}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Nom</th>
                  <th className={styles.th}>Prénom</th>
                  <th className={styles.th}>Email</th>
                  <th className={styles.th}>Téléphone</th>
                  <th className={styles.th}>Adresse</th>
                  <th className={styles.th}>Complément Adresse</th>
                  <th className={styles.th}>Code Postal</th>
                  <th className={styles.th}>Ville</th>
                  <th className={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
          {customers.map((customer) => (
            
            <tr className={styles.tr} key={customer._id}>
              <td className={styles.td_left}>{customer.lastname}</td>
              <td className={styles.td_left}>{customer.firstname}</td>
              <td className={styles.td_left}>{customer.email}</td>
              <td className={styles.td_left}>{customer.phone}</td>
              <td className={styles.td_left}>{customer.adress}</td>
              <td className={styles.td_left}>{customer.street}</td>
              <td className={styles.td_left}>{customer.zipCode}</td>
              <td className={styles.td_left}>{customer.city}</td>
              <td className={styles.td_center}>
                <button className={styles.buttonNone} onClick={() => handleDeleteCustomer(customer?._id)}>
                  <Image src="/images/trashIcon.svg" alt="icon" width={30} height={30} />
                </button>
              </td>
            </tr>
            ))}
              </tbody>
            </table>
        </div>

    )
  }
