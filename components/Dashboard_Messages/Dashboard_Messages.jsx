import React from 'react'
import Image from 'next/image'
import styles from './Dashboard_Messages.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { BASE_URI } from '../../public/assets/app.config';
import { toast } from "react-toastify";
import {formatDate} from '../../public/assets/utils/formatDate'
import Modal from './../Modal/Modal'


export default function Dashboard_Messages() {

  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null)

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

  const onReadMessage = (message) => {
    setMessage(message)
    setShowModal(true)
  }
  console.log("🚀 ~ file: Dashboard_Messages.jsx ~ line 39 ~ onReadMessage ~ message", message)

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

const troncate = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substr(0, maxLength - 3) + '...';
  }
  return str;
}

  return (
    <>
    {showModal && (
      <Modal
        onClose={() => setShowModal(false)}
        message={message}
        handleDeleteMessage={handleDeleteMessage}
      />
    )}
  
        <div className={styles.table}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Nom</th>
                  <th className={styles.th}>Prénom</th>
                  <th className={styles.th}>Email</th>
                  <th className={styles.th}>Message</th>
                  <th className={styles.th}>Reçu le</th>
                  <th className={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
          {messages.map((message) => (

            <tr onClick={() => onReadMessage(message)} className={styles.tr} key={message._id}>
              <td className={styles.td_left}>{message.lastname}</td>
              <td className={styles.td_left}>{message.firstname}</td>
              <td className={styles.td_left}>{message.email}</td>
              <td className={styles.td_left}>{troncate(message.message, 50)}</td>
              <td className={styles.td_center}>{formatDate(message.createdAt)}</td>
              <td className={styles.td_center}>
              <button className={styles.buttonNone} onClick={() => setShowModal(true)}>
                  <Image src="/images/open.svg" alt="icon" width={30} height={30} />
                </button>
                <button className={styles.buttonNone} onClick={() => handleDeleteMessage(message?._id)}>
                  <Image src="/images/trashIcon.svg" alt="icon" width={30} height={30} />
                </button>
              </td>
            </tr>
            ))}
              </tbody>
            </table>
        </div>
        </>
    )
  }
