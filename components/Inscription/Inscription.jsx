import React, { useState } from "react";
import styles from "./Inscription.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URI } from "../../public/assets/app.config";
import { useRouter } from "next/router";

const initCustomer = {
  lastname: "",
  firstname: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  password: "",
  deliveryAddress: {
    lastnameDelivery: "",
    firstnameDelivery: "",
    addressDelivery: "",
    zipCodeDelivery: "",
    cityDelivery: "",
    countryDelivery: "",
    informationsDelivery: ""
  }
};

export default function Inscription() {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState(initCustomer);

  const handleChange = (e, isDeliveryItem=false) => {
    const { name, value } = e.target;
    if(isDeliveryItem) return setCustomer((s) => ({ ...s, deliveryAddress: {...s.deliveryAddress, [name]: value}  }));
    setCustomer({ ...customer, [name]: value });
  };
 

  const handleCreateCustomer = (e) => {
    e.preventDefault();
    if (confirmPassword === customer?.password) {
      const loader = toast.loading("Veuillez patienter...");
      axios
        .post(`${BASE_URI}/customer/add`, {
          ...customer,
          email: customer.email.toLowerCase(),
        })
        .then((res) => {
          toast.update(loader, {
            render: "Inscription réalisée avec succès !",
            type: "success",
            autoClose: 3000,
            isLoading: false,
          });
          setCustomer(initCustomer);
          router.push("/connexion");
        })
        .catch((err) => {
          toast.update(loader, {
            render: "Une erreur est survenue !",
            type: "error",
            autoClose: 3000,
            isLoading: false,
          });
        });
    } else {
      toast.warning("Le mot de passe ne correspond pas !");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="line"></div>
      <section className={styles.contact} id="contact">
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <div>
          <p>Client Informations</p>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={customer?.lastname}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={customer?.firstname}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    className={styles.inputBx50Input}
                    type="email"
                    name="email"
                    placeholder="Address Email"
                    onChange={handleChange}
                    value={customer?.email}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    className={styles.inputBx50Input}
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    value={customer?.phone}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <input
                    className={styles.inputBx100Input}
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    value={customer?.address}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    onChange={handleChange}
                    value={customer?.zipCode}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    value={customer?.city}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={customer?.password}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span style={{ color: "red" }}>
                    {confirmPassword !== customer?.password &&
                      "Le mot de passe ne correspond pas !"}
                  </span>
                </div>
              </div>
              <p>Delivery Address</p>
              <div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='lastnameDelivery'
                    placeholder='Last Name'
                    onChange={e => handleChange(e, true)}
                    value={customer?.deliveryAddress.lastnameDelivery}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='firstnameDelivery'
                    placeholder='First Name'
                    onChange={e => handleChange(e, true)}
                    value={customer?.deliveryAddress.firstnameDelivery}
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
                    onChange={e => handleChange(e, true)}
                    value={customer?.deliveryAddress?.addressDelivery}
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
                    onChange={e => handleChange(e, true)}
                    value={customer?.deliveryAddress?.zipCodeDelivery}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    className={styles.inputBx50Input}
                    type='text'
                    name='cityDelivery'
                    placeholder='City'
                    onChange={e => handleChange(e, true)}
                    value={customer?.deliveryAddress?.cityDelivery}
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='countryDelivery'
                    placeholder='Country'
                    onChange={e => handleChange(e, true)}
                    value={customer?.deliveryAddress?.countryDelivery}
                  />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='informationsDelivery'
                    placeholder='Additional Informations'
                    onChange={e => handleChange(e, true)}
                    value={customer?.deliveryAddress?.informationsDelivery}
                  />
                </div>
              </div>

            </div>

              <div className={styles.row100}>
                <button
                  className={styles.center}
                  onClick={handleCreateCustomer}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
