import React, { useState } from 'react'
import styles from "./Inscription.module.css";
import { toast } from "react-toastify";
import axios from 'axios'
import { BASE_URI } from '../../public/assets/app.config';


const initCustomer = {
  lastname: "",
  firstname: "",
  email: "",
  phone :"",
  adress :"",
  zipCode :"",
  city :"",
  street :"",
  products: [],
  orders: [],
  password :"",
  blocked: { type: Boolean, default: false },
  token :"",
  }
console.log("🚀 ~ file: Inscription.jsx ~ line 23 ~ initCustomer", initCustomer)



export default function Inscription() {
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [customer, setCustomer] = useState(initCustomer);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
      };
    
      const handleCreateCustomer = (e) => {
        e.preventDefault();
        const loader = toast.loading("Veuillez patienter...");
        axios
          .post(`${BASE_URI}/customer/add`, customer)
          .then((res) => {
            toast.update(loader, {
              render: "Inscription réalisée avec succès !",
              type: "success",
              autoClose: 3000,
              isLoading: false,
            });
            setCustomer(initCustomer);
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
              <form onSubmit={handleCreateCustomer}>
                  <div className={styles.row100}>
                      <div className={styles.inputBx50}>
                          <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange}
                          value={customer?.lastname}/>
                      </div>
                      <div className={styles.inputBx50}>
                          <input type="text" name="firstname" placeholder="First Name" onChange={handleChange}
                          value={customer?.firstname}/>
                      </div>
                  </div>
                  <div className={styles.row100}>
                      <div className={styles.inputBx50}>
                          <input type="email" name="email" placeholder="Adress Email" onChange={handleChange}
                          value={customer?.email}/>
                      </div>
                      <div className={styles.inputBx50}>
                          <input type="text" name="phone" placeholder="Phone" onChange={handleChange}
                          value={customer?.phone}/>
                      </div>
                  </div>
                  <div className={styles.row100}>
                      <div className={styles.inputBx100}>
                          <input type="text" name="adress" placeholder="Adress" onChange={handleChange}
                          value={customer?.adress}/>
                      </div>
                  </div>
                  <div className={styles.row100}>
                      <div className={styles.inputBx100}>
                          <input type="text" name="street" placeholder="Street" onChange={handleChange}
                          value={customer?.street}/>
                      </div>
                  </div>
                  <div className={styles.row100}>
                      <div className={styles.inputBx50}>
                          <input type="text" name="zipCode" placeholder="ZIP Code" onChange={handleChange}
                          value={customer?.zipCode}/>
                      </div>
                      <div className={styles.inputBx50}>
                          <input type="text" name="city" placeholder="City" onChange={handleChange}
                          value={customer?.city}/>
                      </div>
                  </div>
                  <div className={styles.row100}>
                      <div className={styles.inputBx50}>
                          <input type="password" name="password" placeholder="Password" onChange={handleChange}
                          value={customer?.password}/>
                      </div>
                      {/* <div className={styles.inputBx50}>
                          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}
                          />
                          <span style={{ color: "red" }}>{confirmPassword !== customer?.password && "Le mot de passe ne correspond pas !"}</span>
                      </div> */}
                  </div>
                  <div className={styles.row100}>
                    <button className={styles.center} type="submit" >SEND</button>
                  </div>
              </form>
          </div>
      </div>
    </section>
  </div>
  )
}
