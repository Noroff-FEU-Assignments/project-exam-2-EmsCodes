import { MESSAGES } from "../../data/api";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/UseAxios";
import styles from "./Messages.module.css";

function Messages() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const http = useAxios();
  useEffect(() => {
    getMessages();
  }, []);

  async function getMessages() {
    try {
      const response = await http.get("api/messages");
      setMessages(response.data.data);
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }
  console.log(messages);

  if (loading) {
    return <div>Loading messages</div>;
  }

  return (
    <div className={styles.container}>
      <ul>
        {messages.map((message) => {
          console.log(message);
          return (
            <li key={message.id}>
              <div>{message.attributes.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Messages;
