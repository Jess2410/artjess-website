import React, { useState } from "react";
import Image from "next/image";
import styles from "./Connexion.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";
import { BASE_URI } from "../../public/assets/app.config";
import { Toast } from "../../public/assets/Toast";
import {useDispatch} from "react-redux"
import { setGetCustomerInfo } from "../../redux/customers/actions";

export const Connexion = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URI}/customer/auth`, {
        email: form.email.toLowerCase(),
        password: form.password,
      })
      .then((res) => {
        sessionStorage.setItem("jess-art-token", res.data.token)
        localStorage.setItem("customer-infos", JSON.stringify(res.data.customer))
        dispatch(setGetCustomerInfo(res.data.customer))
        router.push("/products")
        setLoading(false);
      })
      .catch((err) => {
        Toast("error", "Une erreur s'est produite !")
        setLoading(false);
      });
      setLoading(false);
  };

  if(loading) return <p>En Cours....</p>

  return (
    <div className={styles.wrapper}>
      <div className="line"></div>
      <section className={styles.contact} id="contact">
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <div className={styles.center}>
                    <div>
                      <input type="submit" name="" value="Se connecter" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.center}>
                <span className={styles.span}>
                  Vous n&rsquo;avez pas de compte ?{" "}
                </span>
                <br />
                <Link href={"/inscription"}>
                  <a className={styles.a}>Inscrivez-vous</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ConnexionAdmin = () => {
  return (
    <div className={styles.wrapper}>
      <div className="line"></div>
      <section className={styles.contact} id="contact">
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <input type="email" name="" placeholder="Email" />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <input type="password" name="" placeholder="Password" />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <div className={styles.center}>
                    <div>
                      <input type="submit" name="" value="Se connecter" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
