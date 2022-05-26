import Head from "../components/utils/global/head/Head";
import Heading from "../components/utils/global/heading/Heading";
import Layout from "../components/layout/Layout";
import Cta from "../components/utils/buttons/Cta";
import SearchField from "../components/utils/buttons/SearchField";
import HotelNavCards from "../components/utils/index/HotelNavCards";
import styles from "../styles/index.module.css";
import cta from "../components/utils/buttons/Cta.module.css";
import Icons from "../components/utils/index/Icons";
import img from "../public/images/styling/customerImg.jpg";
import {
  faHotel,
  faMoneyCheckDollar,
  faHeadset,
  faSignsPost,
  faPeopleGroup,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AboutBergen from "../components/utils/index/AboutBergen";
import searchFieldStyles from "../components/utils/buttons/SearchField.module.css";
import { HOLIDAZE_BASE_URL, HOTELS } from "../components/data/api";

export default function Home({ hotels }) {
  // console.log(hotels);
  return (
    <Layout>
      <Head title="Home">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <Heading content="Holidaze" style={styles.headingOne} />
          <p className={styles.p}>
            Our goal is to make booking the easiest part of your journey!
          </p>
          <Cta
            content="Find your hotel"
            link="/accommodations"
            styles={cta.ctaBtn}
          />
          <div className={searchFieldStyles.formContainer}>
            <SearchField hotel={hotels} />
          </div>
        </div>
      </div>
      <div>
        <Heading size="2" content=" accommodation categories" style="srOnly" />
        <HotelNavCards />
      </div>
      <div className={styles.whyUsSection}>
        <Image
          src={img}
          alt="a woman and a man smiling while looking at an iphone"
          layout="responsive"
          objectFit="cover"
        />
        <div>
          <Heading
            size="3"
            content="Why choose us?"
            style={styles.headingThree}
          />
          <div className={styles.iconsContainer}>
            <Icons
              icon={faHotel}
              text="Easy booking"
              iconStyle={styles.icon}
              textStyle={styles.text}
              iconContainer={styles.iconContainer}
            />
            <Icons
              icon={faMoneyCheckDollar}
              text="Secure payment options"
              iconStyle={styles.icon}
              textStyle={styles.text}
              iconContainer={styles.iconContainer}
            />
            <Icons
              icon={faHeadset}
              text="24/hour support"
              iconStyle={styles.icon}
              textStyle={styles.text}
              iconContainer={styles.iconContainer}
            />
            <Icons
              icon={faSignsPost}
              text="Local knowledge"
              iconStyle={styles.icon}
              textStyle={styles.text}
              iconContainer={styles.iconContainer}
            />
            <Icons
              icon={faPeopleGroup}
              text="5000+ satisfied customers"
              iconStyle={styles.icon}
              textStyle={styles.text}
              iconContainer={styles.iconContainer}
            />
          </div>
        </div>
      </div>
      <div>
        <AboutBergen />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = HOLIDAZE_BASE_URL + HOTELS;
  let hotels = [];

  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result.data);
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
