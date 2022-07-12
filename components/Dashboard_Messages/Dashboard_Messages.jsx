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



export default function Dashboard() {


  const [messages, setMessages] = useState([]);
  console.log("🚀 ~ file: Dashboard_Messages.jsx ~ line 17 ~ Dashboard ~ messages", messages)

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
  console.log("🚀 ~ file: Dashboard_Messages.jsx ~ line 34 ~ getMessages ~ getMessages", getMessages)

  useEffect(() => {
    getMessages();
  }, [getMessages]);


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
            <td><button>Supprimer</button></td>
            </tr>
            </>
            ))}
     
            {console.log("🚀 ~ file: Dashboard_Messages.jsx ~ line 57 ~ Dashboard ~ message", messages)}
              </tbody>
            {/* </Table> */}
            </table>
        </div>

    )
  }
