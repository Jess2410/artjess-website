import React, { useState } from 'react'
import styles from "./Contact.module.css";
import { toast } from "react-toastify";
import axios from 'axios'
import { BASE_URI } from '../../public/assets/app.config';


const initMessage = {
    lastname: "",
    firstname: "",
    email : "",
    message : "",
    read: false,
  }
console.log("🚀 ~ file: Contact.jsx ~ line 15 ~ initMessage", initMessage)

export default function Contact() {

    const [message, setMessage] = useState(initMessage);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setMessage({ ...message, [name]: value });
      };
    
      const handleCreateMessage = (e) => {
        e.preventDefault();
        const loader = toast.loading("Veuillez patienter...");
        axios
          .post(`${BASE_URI}/message/add`, message)
          .then((res) => {
            toast.update(loader, {
              render: "Message envoyé avec succès !",
              type: "success",
              autoClose: 3000,
              isLoading: false,
            });
            setMessage(initMessage);
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
      <div className={styles.wrapper}>
      <div className="line"></div>
    <section className={styles.contact} id="contact">
    <div className={styles.content}>
        
        <div className={styles.contactForm}>
            <form onSubmit={handleCreateMessage}>
                <div className={styles.row100}>
                    <div className={styles.inputBx50}>
                        <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange}
                        value={message?.lastname}/>
                    </div>
                    <div className={styles.inputBx50}>
                        <input type="text" name="firstname" placeholder="First Name" onChange={handleChange}
                        value={message?.firstname}/>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                    <input type="email" name="email" placeholder="Email Address" onChange={handleChange}
                        value={message?.email}/>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100}>
                        <textarea placeholder="Message" name="message"
                        onChange={handleChange}
                        value={message?.message}
                        ></textarea>
                    </div>
                </div>
                <div className={styles.row100}>
                    <div className={styles.inputBx100 }>
                        <div className={styles.center}>
                            <button type="submit" >SEND</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>                  
</section> 
    
</div>
  )
}
