import Head from "../components/utils/global/head/Head";
import Heading from "../components/utils/global/heading/Heading";
import Layout from "../components/layout/Layout";
import AddHotel from "../components/utils/forms/AddHotel";
import Messages from "../components/utils/admin/Messages";
import Enquiries from "../components/utils/admin/Enquiries";
import styles from "../styles/admin.module.css";

export default function Admin({ messages }) {
  console.log(messages);
  return (
    <Layout>
      <Head title="Admin">
        <link rel="stylesheet" href="https://use.typekit.net/ckg1pdt.css" />
      </Head>
      <div className={styles.container}>
        <Heading content="Admin" />
        <div>
          <Heading content="Messages" size="2" />
          <Messages />
        </div>
        <div>
          <Heading content="Enquiries" size="2" />
          <Enquiries />
        </div>
        <div>
          <Heading content="Add hotel" size="2" />
          <AddHotel />
        </div>
      </div>
    </Layout>
  );
}
