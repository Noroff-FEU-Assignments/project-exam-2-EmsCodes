import React from "react";
import Head from "../components/utils/head/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/utils/heading/Heading";
import HeroSection from "../components/utils/global/HeroSection";
import hotelImg from "../public/images/hotel-images/hotel-image.jpg";
import SearchField from "../components/utils/buttons/SearchField";

function accommodations() {
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
    </Layout>
  );
}

export default accommodations;
