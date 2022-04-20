import React from "react";
import styles from "../../../styles/components/utils/buttons/Cta.module.css";

function Cta({ content }) {
  return <button className={styles.btn}>{content}</button>;
}

export default Cta;
