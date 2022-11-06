import React from "react";
import Footer from "../components/Footer/Footer";
import Details_cart from "../components/Details_Cart/Details_cart";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import DeliveryForm from "../components/DelievryForm/DeliveryForm";
import { useSelector } from "react-redux";
import Paypal from "../components/Paypal/Paypal";
import styles from "../components/Details_cart/Details_cart.module.css";


const initDeliveryAdress = {
    lastnameDelivery: "",
    firstnameDelivery: "",
    addressDelivery: "",
    zipCodeDelivery: "",
    cityDelivery: "",
    countryDelivery: "",
    informationsDelivery: "",
  };

export default function Order() {
  const customer = useSelector((s) => s.customerReducer.customer_infos);
  const { cart } = useSelector((s) => s.cartReducer);
  const [steps, setSteps] = useState("cart");
  const [deliveryForm, setDeliveryForm] = useState(customer?.deliveryAddress || initDeliveryAdress);
  let totalPrice = 0;
  if(cart?.length !== 0){
      for(const item of cart){
          const itemPrice = item?.price * item?.quantity;
          totalPrice += itemPrice;
      }
    }
  return (
    <div>
      <Layout
        title={
          steps === "cart"
            ? "Cart Items"
            : steps === "delivery"
            ? "Delivery Address"
            : "Payment"
        }
      >
        {steps === "cart" && <Details_cart setSteps={setSteps} />}
        {steps === "delivery" && (
          <DeliveryForm
            setSteps={setSteps}
            deliveryForm={deliveryForm}
            setDeliveryForm={setDeliveryForm}
          />
        )}
        {steps === "payment" && <>
            <div className="global-container">
            <p className={styles.total_price}>Total : {`${totalPrice.toFixed(2)}€`}</p>
            <br></br>
                <Paypal amount={totalPrice.toFixed(2)} />
                <button className={styles.button} onClick={() => setSteps("delivery")}>Previous</button>
            </div>
        </>  }
      </Layout>
      <Footer />
    </div>
  );
}
