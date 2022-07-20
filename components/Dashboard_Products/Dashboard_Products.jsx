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


export default function Dashboard() {


  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMessages = useCallback(() => {
    setLoading(true);
    axios
      .get(`${BASE_URI}/messages`)
      .then((res) => {
        setMessages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  const handleDeleteMessage = (id) => {
  console.log("🚀 ~ file: Dashboard_Messages.jsx ~ line 41 ~ handleDeleteMessage ~ id", id)
    const loader = toast.loading("Veuillez patienter...");
    axios
      .put(`${BASE_URI}/messages/delete/${id}`)
      .then((res) => {
        getMessages();
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
                  <th className={styles.th}>Adresse</th>
                  <th className={styles.th}>Code Postal</th>
                  <th className={styles.th}>Ville</th>
                  <th className={styles.th}>Téléphone</th>
                  <th className={styles.th}>Commandes</th>
                  <th className={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
          {messages.map((message) => (
            
            <tr className={styles.tr} key={message._id}>
              <td className={styles.td_left}>{message.lastname}</td>
              <td className={styles.td_left}>{message.firstname}</td>
              <td className={styles.td_left}>{message.email}</td>
              <td className={styles.td_left}>{message.message}</td>
              <td className={styles.td_left}>{message.firstname}</td>
              <td className={styles.td_left}>{message.firstname}</td>
              <td className={styles.td_left}>{message.firstname}</td>
              <td className={styles.td_left}>{message.firstname}</td>
              <td className={styles.td_center}>
                <button className={styles.buttonNone} onClick={() => handleDeleteMessage(message?._id)}>
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
