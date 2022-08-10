import React from "react";
import Footer from "../components/Footer/Footer";
import Inscription from "../components/Inscription/Inscription";
import Layout from "../components/Layout/Layout";
import Subscription from "../components/Subscription/Subscription.jsx";

export default function subscription() {
  return (
    <div>
      <Layout title="Inscription ">
        <Inscription />
      </Layout>
      <Footer />
    </div>
  );
}
