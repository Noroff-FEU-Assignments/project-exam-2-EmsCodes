import { MESSAGES } from "../../data/api";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/UseAxios";
import styles from "./Enquiries.module.css";
import { Spinner } from "react-bootstrap";

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
      console.log(response.data.data);
      setEnquiry(response.data.data);
      setLoading(true);
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      {error ? (
        <div className="error-message">
          <p className="error-text">An error occured!</p>
          <p>Reload the page, or try logging out and in again.</p>
        </div>
      ) : (
        ""
      )}
      <ul>
        {loading
          ? "Loading enquiries"
          : enquiry.map((message) => {
              return (
                <li key={message.id}>
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
                  <div>
                    <span>Persons: </span>
                    {message.attributes.persons}
                  </div>
                  <div>
                    <span>Room: </span>
                    {message.attributes.room_type}
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default Enquiries;
