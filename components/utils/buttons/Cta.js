import React from "react";
import styles from "../../../styles/components/utils/buttons/Cta.module.css";
import Link from "next/link";

function Cta({ content }) {
  return (
    <Link href="/accommodations">
      <a className={styles.btn}>{content}</a>
    </Link>
  );
}

export default Cta;
