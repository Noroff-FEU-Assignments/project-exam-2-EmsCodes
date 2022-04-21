import React from "react";
import styles from "../../../styles/components/utils/buttons/Cta.module.css";
import Link from "next/link";
import propTypes from "prop-types";

function Cta({ content }) {
  return (
    <Link href="/accommodations">
      <a className={styles.btn}>{content}</a>
    </Link>
  );
}

export default Cta;

Cta.propTypes = {
  content: propTypes.string.isRequired,
};
