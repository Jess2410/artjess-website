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
};

export default function Inscription() {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState(initCustomer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };
  console.log(
    "🚀 ~ file: Inscription.jsx ~ line 37 ~ handleCreateCustomer ~ confirmPassword",
    confirmPassword
  );

  const handleCreateCustomer = (e) => {
    e.preventDefault();

    console.log(
      "🚀 ~ file: Inscription.jsx ~ line 37 ~ handleCreateCustomer ~ customer?.password",
      customer?.password
    );
    if (confirmPassword === customer?.password) {
      const loader = toast.loading("Veuillez patienter...");
      console.log(customer);
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
