import React from "react";
import styles from "./BreadCrumbs.module.css";

function BreadCrumbs({ children }) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
}

export default BreadCrumbs;
