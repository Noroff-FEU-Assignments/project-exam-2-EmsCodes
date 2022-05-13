import { useState, useEffect } from "react";
import Head from "../components/utils/global/head/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/utils/global/heading/Heading";
import HeroSection from "../components/utils/global/hero-section/HeroSection";
import hotelImg from "../public/images/hotel-images/hotel-image.jpg";
import SearchField from "../components/utils/buttons/SearchField";
import MenuBtn from "../components/utils/accommodations/MenuBtn";
import searchFieldStyles from "../styles/components/utils/buttons/SearchField.module.css";
import styles from "../styles/accommodations.module.css";
import Link from "next/link";
import { HOLIDAZE_BASE_URL, HOTELS } from "../components/data/api";
import HotelCards from "../components/utils/accommodations/HotelCards";

function Accommodations(props) {
  const [hotelTest, setHotel] = useState(props.hotels);
  // const [loading, setLoading] = useState(true);
  const [isActive, setActive] = useState(false);

  console.log(props.hotels);

  function allHotels() {
    console.log("yo");
  }
  function onlyHotels() {
    setActive(true);
  }

  return (
    <Layout>
      <Head title="accommodations">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.heroContainer}>
        <HeroSection
          img={hotelImg}
          alt="modern looking hotel room, with big twin bed, and walk-in-closet"
        >
          {/* create breadcrumbs!!! */}
          <div className={styles.heroContent}>
            <Heading content="Accommodations" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
          </div>
          <div className={searchFieldStyles.formContainer}>
            <SearchField />
          </div>
        </HeroSection>
      </div>
      <MenuBtn onclickFunction={allHotels} name="All" />
      <MenuBtn
        onclickFunction={onlyHotels}
        name="Hotels"
        style={isActive ? "active" : "nav"}
      />
      <MenuBtn onclickFunction={allHotels} name="B&B" />
      <MenuBtn onclickFunction={allHotels} name="Guesthouse" />
      {/* <p>Result:{props.hotels.length}</p> */}
      <ul className={styles.ul}>
        {hotelTest.map((hotel) => {
          return (
            <li key={hotel.id}>
              <Link href={`detail/${hotel.id}`}>
                <a>
                  <HotelCards
                    name={hotel.attributes.name}
                    price={hotel.attributes.price_1}
                    img={hotel.attributes.main_image.data.attributes.url}
                    priceText="From"
                  />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default Accommodations;

export async function getStaticProps() {
  const url = HOLIDAZE_BASE_URL + HOTELS;
  let hotels = [];

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.data);
    hotels = result.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      hotels: hotels,
    },
  };
}
