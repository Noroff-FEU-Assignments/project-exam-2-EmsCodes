import React from "react";
import Head from "../components/utils/global/head/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/utils/global/heading/Heading";
import HeroSection from "../components/utils/global/hero-section/HeroSection";
import hotelImg from "../public/images/hotel-images/hotel-image.jpg";
import SearchField from "../components/utils/buttons/SearchField";
import MenuBtn from "../components/utils/accommodations/MenuBtn";

function accommodations() {
  function allHotels() {
    console.log("yo");
  }

  return (
    <Layout>
      <Head title="accommodations" />
      <HeroSection
        img={hotelImg}
        alt="modern looking hotel room, with big twin bed, and walk-in-closet"
      >
        {/* create breadcrumbs!!! */}
        <Heading content="Accommodations" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
        <SearchField />
      </HeroSection>
      <MenuBtn onclickFunction={allHotels} name="All" />
      <MenuBtn onclickFunction={allHotels} name="Hotels" />
      <MenuBtn onclickFunction={allHotels} name="B&B" />
      <MenuBtn onclickFunction={allHotels} name="Guesthouse" />
    </Layout>
  );
}

export default accommodations;
