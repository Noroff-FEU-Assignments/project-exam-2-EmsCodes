import { HOLIDAZE_BASE_URL, HOTELS } from "../../components/data/api";
import Head from "../../components/utils/global/head/Head";
import Heading from "../../components/utils/global/heading/Heading";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/utils/global/hero-section/HeroSection";
import styles from "../../styles/detail/id.module.css";

function details({ hotel }) {
  console.log(hotel);
  return (
    <Layout>
      <Head title="Accommodation details page">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
      </Head>
      <div className={styles.heroContainer}>
        <HeroSection img={hotel.attributes.main_image.data.attributes.url}>
          {/* create breadcrumbs!!! */}
          <div>
            <Heading content="Accommodations" />
            <p>{hotel.short_description}</p>
          </div>
        </HeroSection>
      </div>
    </Layout>
  );
}

export default details;

export async function getStaticPaths() {
  try {
    const response = await fetch(HOLIDAZE_BASE_URL + HOTELS);

    const data = await response.json();

    const result = data.data;

    const paths = result.map((hotel) => ({
      params: { id: hotel.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${HOLIDAZE_BASE_URL}api/hotels/${params.id}?populate=*`;

  let hotel = null;

  try {
    const response = await fetch(url);
    const result = await response.json();
    hotel = result.data;
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel },
  };
}
