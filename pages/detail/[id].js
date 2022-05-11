import { HOLIDAZE_BASE_URL, HOTELS } from "../../components/data/api";
import Head from "../../components/utils/global/head/Head";
import Heading from "../../components/utils/global/heading/Heading";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/utils/global/hero-section/HeroSection";
import styles from "./id.module.css";
import Cta from "../../components/utils/buttons/Cta";
import HotelCards from "../../components/utils/accommodations/HotelCards";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import BookingEnquiry from "../../components/utils/forms/BookingForm";

function Details({ hotel }) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Layout>
      <Head title="Accommodation details page">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.heroContainer}>
        <HeroSection img={hotel.attributes.main_image.data.attributes.url}>
          {/* create breadcrumbs!!! */}
          <div>
            <Heading content={hotel.attributes.name} />
            <p>{hotel.attributes.short_description}</p>
          </div>
          {/* <button onClick={handleShow}>Book now</button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <BookingEnquiry />
            </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal> */}
        </HeroSection>
        <div>
          <BookingEnquiry />
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <Heading size="2" content={`Welcome to ${hotel.attributes.name}`} />
          <Heading size="3" content="Rooms" />
          <div className={styles.roomsContainer}>
            <HotelCards
              name="Room type"
              img={hotel.attributes.images.data[0].attributes.url}
              price={hotel.attributes.price_1}
            />
            <HotelCards
              name="Room type"
              img={hotel.attributes.images.data[1].attributes.url}
              price={hotel.attributes.price_2}
            />
            <HotelCards
              name="Room type"
              img={hotel.attributes.images.data[2].attributes.url}
              price={hotel.attributes.price_3}
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

export default Details;

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
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel },
  };
}
