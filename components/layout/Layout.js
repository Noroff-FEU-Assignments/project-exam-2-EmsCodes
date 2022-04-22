// import { useRouter } from "next/router";
import Link from "next/link";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import styles from "../../styles/layout/Layout.module.css";
import logo from "../../public/images/white-logo.png";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import SearchField from "../utils/buttons/SearchField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Layout({ children }) {
  const [menuBtn, setMenuBtn] = useState(faBars);
  const [menuState, setMenuState] = useState(styles.hidden);

  function menuFunction() {
    if (menuBtn === faBars) {
      setMenuBtn(faXmark);
      setMenuState(styles.displayed);
    } else {
      setMenuBtn(faBars);
      setMenuState(styles.hidden);
    }
  }

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
        <button
          onClick={menuFunction}
          aria-label="Open menu"
          className={styles.burgerBtn}
        >
          <FontAwesomeIcon icon={menuBtn} aria-hidden="true" />
        </button>
        <div className={menuState}>
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
          <SearchField />
        </div>
      </div>

      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
