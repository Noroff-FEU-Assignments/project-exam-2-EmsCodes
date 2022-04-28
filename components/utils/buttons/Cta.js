import React from "react";

import Link from "next/link";
import propTypes from "prop-types";

function Cta({ content, link = "/", styles }) {
  return (
    <Link href={link}>
      <a className={styles}>{content}</a>
    </Link>
  );
}

export default Cta;

Cta.propTypes = {
  content: propTypes.string.isRequired,
  link: propTypes.string,
};
