import React from 'react'
import Image from 'next/image'
import styles from './Dashboard_Messages.module.css'
import Link from 'next/link'
// import Table from 'react-bootstrap/Table';
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
<table>
            {/* <Table> */}
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Reçu le</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
            
          {messages.map((message) => (
            <>
            <tr key={message._id}>
            <td>{message.lastname}</td>
            <td>{message.firstname}</td>
            <td>{message.email}</td>
            <td>{message.message}</td>
            <td>{message.createdAt}</td>
            <td><button onClick={() => handleDeleteMessage(message?._id)} >Supprimer</button></td>
            </tr>
            </>
            ))}
              </tbody>
            {/* </Table> */}
            </table>
        </div>

    )
  }
