import Head from "../components/utils/global/head/Head";
import Heading from "../components/utils/global/heading/Heading";
import Layout from "../components/layout/Layout";
import AddHotel from "../components/utils/forms/AddHotel";
export default function Admin() {
  return (
    <Layout>
      <Head title="Admin">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
      </Head>
      <Heading content="Admin" />
      <AddHotel />
    </Layout>
  );
}
