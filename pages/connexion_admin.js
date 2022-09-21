import React from "react";
import { Connexion_Admin } from "../components/Connexion_Admin/Connexion_Admin.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Layout from "../components/Layout/Layout";

export default function about() {
  return (
    <div>
      <Layout title="Connexion Admin">
        <Connexion_Admin />
      </Layout>
      <Footer />
    </div>
  );
}
