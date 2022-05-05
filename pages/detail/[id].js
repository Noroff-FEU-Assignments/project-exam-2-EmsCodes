import { HOLIDAZE_BASE_URL, HOTELS } from "../../components/data/api";
import Head from "../../components/utils/global/head/Head";
import Heading from "../../components/utils/global/heading/Heading";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/utils/global/hero-section/HeroSection";
import styles from "../../styles/detail/id.module.css";
import Cta from "../../components/utils/buttons/Cta";
import HotelCards from "../../components/utils/accommodations/HotelCards";

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
            <Heading content={hotel.attributes.name} />
            <p>{hotel.attributes.short_description}</p>
          </div>
          <button>Book now</button>
        </HeroSection>
      </div>
      <div className={styles.container}>
        <div>
          <Heading size="2" content={`Welcome to ${hotel.attributes.name}`} />
          <Heading size="3" content="Rooms" />
          <div className={styles.roomsContainer}>
            <HotelCards
              name="Room type"
              img={hotel.attributes.images.data[0].attributes.url}
            />
            <HotelCards
              name="Room type"
              img={hotel.attributes.images.data[1].attributes.url}
            />
            <HotelCards
              name="Room type"
              img={hotel.attributes.images.data[2].attributes.url}
            />
          </div>
        </div>
        <div>
          <Heading size="3" content="About us" />
          <p>{hotel.attributes.description}</p>
        </div>
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
