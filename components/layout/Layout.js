// import { useRouter } from "next/router";
import Link from "next/link";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import styles from "../../styles/layout/Layout.module.css";
import logo from "../../public/images/white-logo.png";
import React from "react";
import Image from "next/image";

function Layout({ children }) {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="Holidaze logo, white on blue background"
              className={styles.logo}
            />
          </a>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/accommodations">
                <a>Accommodations</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">{children}</div>
    </>
  );
}

export default Layout;
