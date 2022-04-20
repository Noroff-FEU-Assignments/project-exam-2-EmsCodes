import Head from "../components/utils/head/Head";
import Heading from "../components/utils/heading/Heading";
import Layout from "../components/layout/Layout";
import Cta from "../components/utils/buttons/Cta";
import SearchField from "../components/utils/buttons/SearchField";
import HotelNavCards from "../components/utils/index/HotelNavCards";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout className={styles.wrapper}>
      <Head title="Home" />
      <main className={styles.main}>
        <Heading content="Holidaze" />
        <Heading
          size="2"
          content="Booking company in Bergen.  
        Easy and safe, with some of the best prices"
        />
        <Cta content="Find your hotel" />
        <SearchField />
        <HotelNavCards />
      </main>
    </Layout>
  );
}
