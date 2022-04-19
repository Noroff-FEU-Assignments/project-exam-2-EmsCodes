import Head from "../components/utils/head/Head";
import Heading from "../components/utils/heading/Heading";
import Layout from "../components/layout/Layout";
import Cta from "../components/utils/buttons/Cta";
import SearchField from "../components/utils/buttons/SearchField";

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <Heading content="Holidaze" />
      <Heading
        size="2"
        content="Booking company in Bergen.  
        Easy and safe, with some of the best prices"
      />
      <Cta content="Find your hotel" />
      <SearchField />
    </Layout>
  );
}
