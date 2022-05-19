import { MESSAGES } from "../../data/api";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/UseAxios";
import styles from "./Enquiries.module.css";

function Enquiries() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enquiry, setEnquiry] = useState([]);
  const http = useAxios();
  useEffect(() => {
    getEnquiries();
  }, []);

  async function getEnquiries() {
    try {
      const response = await http.get("api/enquiries");
      setEnquiry(response.data.data);
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }
  // console.log(enquiry);

  if (loading) {
    return <div>Loading messages</div>;
  }

  return (
    <div className={styles.container}>
      <ul>
        {enquiry.map((message) => {
          return (
            <li key={message.id} className={styles}>
              <div>
                <span>Name: </span>
                {message.attributes.name}
              </div>
              <div>
                <span>Email: </span>
                {message.attributes.email}
              </div>
              <div>
                <span>Message: </span>
                {message.attributes.message}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Enquiries;
