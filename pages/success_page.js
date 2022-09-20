import React from "react";
import Footer from "../components/Footer/Footer";
import Payment_accepted from "../components/Payment_accepted/Payment_accepted";
import Layout from "../components/Layout/Layout";

export default function Success_page() {
  return (
    <div>
      <Layout title="Payment Accepted">
        <Payment_accepted />
      </Layout>
      <Footer />
    </div>
  );
}
