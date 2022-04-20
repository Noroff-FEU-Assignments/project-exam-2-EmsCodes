import Head from "../components/utils/head/Head";
import Heading from "../components/utils/heading/Heading";
import Layout from "../components/layout/Layout";
import Cta from "../components/utils/buttons/Cta";
import SearchField from "../components/utils/buttons/SearchField";
import HotelNavCards from "../components/utils/index/HotelNavCards";
import styles from "../styles/Home.module.css";
import Icons from "../components/utils/index/Icons";
import {
  faSolid,
  faHotel,
  faMoneyCheckDollar,
  faHeadset,
  faSignsPost,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <Heading content="Holidaze" />
          <Heading
            size="2"
            content="Booking company in Bergen.  
            Easy and safe, with some of the best prices"
          />
          <Cta content="Find your hotel" />
          <SearchField />
          <HotelNavCards />
        </div>
      </div>
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
    </Layout>
  );
}
