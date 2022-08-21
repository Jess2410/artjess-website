import React from "react";
import Shop from "../../components/Shop/Shop.jsx";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer.jsx";

export default function Products() {
  return (
    <div>
      <Layout title="Shop">
        <Shop />
      </Layout>
      <Footer />
    </div>
  );
}
