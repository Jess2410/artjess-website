import React from "react";
import DeliveryForm from "../components/DelievryForm/DeliveryForm.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Layout from "../components/Layout/Layout";

const AdressDeliveryPage = () => {
  return (
    <div>
      <Layout title="Address Delivery">
        <DeliveryForm />
      </Layout>
      <Footer />
    </div>
  );
};

export default AdressDeliveryPage;
