import HeroSection from "../components/utils/global/hero-section/HeroSection";
import Head from "../components/utils/global/head/Head";
import Heading from "../components/utils/global/heading/Heading";
import Layout from "../components/layout/Layout";
import CreateMessage from "../components/utils/forms/Contact";
import mainImg from "../public/images/main-images/home-main-img.jpg";
import styles from "../styles/contact.module.css";

function contact() {
  return (
    <Layout>
      <Head title="Contact">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
      </Head>
      <HeroSection
        containerStyle={styles.container}
        img={mainImg}
        alt="modern looking hotel room, with big twin bed, and walk-in-closet"
        style={styles.absolutePositioning}
      >
        <CreateMessage />
      </HeroSection>
    </Layout>
  );
}

export default contact;
