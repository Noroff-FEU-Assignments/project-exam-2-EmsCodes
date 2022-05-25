import React from "react";
import Head from "../components/utils/global/head/Head";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/utils/global/hero-section/HeroSection";
import mainImg from "../public/images/main-images/home-main-img.jpg";
import LoginForm from "../components/utils/forms/LoginForm";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <Layout>
      {/* <div className={styles.loginContainer}> */}
      <Head title="Admin login">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
      </Head>
      <HeroSection
        containerStyle={styles.container}
        img={mainImg}
        alt="modern looking hotel room, with big twin bed, and walk-in-closet"
        style={styles.absolutePositioning}
      >
        <LoginForm />
      </HeroSection>
      {/* </div> */}
    </Layout>
  );
}

export default Login;
