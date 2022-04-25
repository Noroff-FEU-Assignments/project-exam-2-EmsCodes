import Head from "../components/utils/global/head/Head";
import Heading from "../components/utils/global/heading/Heading";
import Layout from "../components/layout/Layout";
import Cta from "../components/utils/buttons/Cta";
import SearchField from "../components/utils/buttons/SearchField";
import HotelNavCards from "../components/utils/index/HotelNavCards";
import styles from "../styles/Home.module.css";
import Icons from "../components/utils/index/Icons";
import img from "../public/images/styling/customerImg.jpg";
import {
  faHotel,
  faMoneyCheckDollar,
  faHeadset,
  faSignsPost,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AboutBergen from "../components/utils/index/AboutBergen";

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <Heading content="Holidaze" />
          <Heading
            size="2"
            content="  
            Our goal is to make booking the easiest part of your journey!"
          />
          <Cta content="Find your hotel" link="/accommodations" />
          <SearchField />
          <HotelNavCards />
        </div>
      </div>
      <div>
        <Image
          src={img}
          alt="a woman and a man smiling while looking at an iphone"
        />
        <div>
          <Heading size="4" content="Why choose us?" />
          <div>
            <Icons icon={faHotel} text="Easy booking" />
            <Icons icon={faMoneyCheckDollar} text="Secure pay" />
            <Icons icon={faHeadset} text="24/hour support" />
            <Icons icon={faSignsPost} text="Local knowledge" />
            <Icons icon={faPeopleGroup} text="5000+ satisfied customers" />
          </div>
        </div>
        <div>
          <AboutBergen />
        </div>
      </div>
    </Layout>
  );
}
