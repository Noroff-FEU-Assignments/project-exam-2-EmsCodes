import HeroSection from "../components/utils/global/hero-section/HeroSection";
import Head from "../components/utils/global/head/Head";
import Heading from "../components/utils/global/heading/Heading";
import Layout from "../components/layout/Layout";
import CreateMessage from "../components/utils/forms/Contact";

function contact() {
  return (
    <Layout>
      <Head title="Contact">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
      </Head>
      <Heading content="Contact" />
      <CreateMessage />
    </Layout>
  );
}

export default contact;
