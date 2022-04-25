import React from "react";
import Head from "../components/utils/global/head/Head";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/utils/global/hero-section/HeroSection";
import Heading from "../components/utils/global/heading/Heading";
import mainImg from "../public/images/main-images/home-main-img.jpg";
import LoginForm from "../components/utils/forms/LoginForm";

function Login() {
  return (
    <Layout>
      <div>
        <Head title="Admin login" />
        <HeroSection
          img={mainImg}
          alt="modern looking hotel room, with big twin bed, and walk-in-closet"
        >
          <Heading content="Admin login" />
          <LoginForm />
        </HeroSection>
      </div>
    </Layout>
  );
}

export default Login;
