import React from "react";
import Footer from "../components/Footer/Footer.jsx";
import Inscription from "../components/Inscription/Inscription.jsx";
import Layout from "../components/Layout/Layout";

const InscriptionPage = () => {
  return (
    <div>
      <Layout title="Inscription">
        <Inscription />
      </Layout>
      <Footer />
    </div>
  );
};

export default InscriptionPage;
