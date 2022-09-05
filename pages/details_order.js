import React from "react";
import Footer from "../components/Footer/Footer";
import Details_cart from "../components/Details_Cart/Details_cart";
import Layout from "../components/Layout/Layout";

export default function Details_order() {
  return (
    <div>
      <Layout title="Details Cart ">
        <Details_cart />
      </Layout>
      <Footer />
    </div>
  );
}
