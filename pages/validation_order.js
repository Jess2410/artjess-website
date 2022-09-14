import React from "react";
import Footer from "../components/Footer/Footer";
import Details_cart from "../components/Details_Cart/Details_cart";
import Layout from "../components/Layout/Layout";

export default function Validation_order() {
  return (
    <div>
      <Layout title="Validation Order ">
        <Details_cart />
      </Layout>
      <Footer />
    </div>
  );
}
