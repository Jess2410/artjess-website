import React, { useState } from "react";
import styles from "./DeliveryForm.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URI } from "../../public/assets/app.config";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function DeliveryForm({
  setSteps,
  deliveryForm,
  setDeliveryForm,
}) {
  const customer = useSelector((s) => s.customerReducer.customer_infos);
  console.log("🚀 ~ file: DeliveryForm.jsx ~ line 15 ~ customer", customer)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryForm({ ...deliveryForm, [name]: value });
    console.log(deliveryForm);
  };

  const handleCreateDeliveryAddress = (e) => {
    e.preventDefault();
    const loader = toast.loading("Veuillez patienter...");
    axios
      .post(`${BASE_URI}/customer/${customer?._id}`, {deliveryAddress: deliveryForm})
      .then((res) => {
        toast.update(loader, {
          render: "Adresse de livraison enregistré avec succès !",
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
    <div className={styles.wrapper}>
      <div className='line'></div>
      <section className={styles.contact} id='contact'>
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='lastnameDelivery'
                    placeholder='Last Name'
                    onChange={handleChange}
                    value={deliveryForm?.lastnameDelivery}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='firstnameDelivery'
                    placeholder='First Name'
                    onChange={handleChange}
                    value={deliveryForm?.firstnameDelivery}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <input
                    className={styles.inputBx50Input}
                    type='text'
                    name='addressDelivery'
                    placeholder='Address'
                    onChange={handleChange}
                    value={deliveryForm?.addressDelivery}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    className={styles.inputBx50Input}
                    type='text'
                    name='zipCodeDelivery'
                    placeholder='Zip Code'
                    onChange={handleChange}
                    value={deliveryForm?.zipCodeDelivery}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    className={styles.inputBx50Input}
                    type='text'
                    name='cityDelivery'
                    placeholder='City'
                    onChange={handleChange}
                    value={deliveryForm?.cityDelivery}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='countryDelivery'
                    placeholder='Country'
                    onChange={handleChange}
                    value={deliveryForm?.countryDelivery}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='informationsDelivery'
                    placeholder='Additional Informations'
                    onChange={handleChange}
                    value={deliveryForm?.informationsDelivery}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <button
                  className={styles.center}
                  onClick={handleCreateDeliveryAddress}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
            <div className={styles.flex }>
          {/* <div  className={styles.row100 }> */}
            <button className={styles.button} onClick={() => setSteps("cart")}>Previous</button>
            <button className={styles.button} onClick={() => setSteps("payment")}>Next</button>
          {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
