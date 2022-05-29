import { useEffect, useState } from "react";
import styles from "./Messages.module.css";
import useAxios from "../../hooks/UseAxios";
import { HOLIDAZE_BASE_URL, MESSAGES } from "../../data/api";
import Link from "next/link";

function Messages() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const http = useAxios();

  const url = HOLIDAZE_BASE_URL + MESSAGES;

  //   if (messages) {
  //     setLoading(false);
  //   }
  useEffect(() => {
    async function getMessages() {
      try {
        const res = await http.get(url);
        setLoading(false);
        console.log(res.data.data);
        setMessages(res.data.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMessages();
  }, []);

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
        {messages.map((message) => {
          //   console.log(message);
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
              <Link href={`mailto:${message.attributes.email}`}>
                <a>Reply</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Messages;
