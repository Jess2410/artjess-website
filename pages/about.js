import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

export default function about() {
  return (
    <div>
      <Layout title="About">
        <About />
      </Layout>
    </div>
  );
}
