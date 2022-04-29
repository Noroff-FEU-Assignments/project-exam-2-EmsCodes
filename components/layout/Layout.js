import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../../styles/layout/Layout.module.css";
import logo from "../../public/holidaze-logo.png";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./Footer";
import SearchField from "../utils/buttons/SearchField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Layout({ children }) {
  const [menuBtn, setMenuBtn] = useState(faBars);
  const [menuState, setMenuState] = useState(styles.hidden);

  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  function menuFunction() {
    if (menuBtn === faBars) {
      setMenuBtn(faXmark);
      setMenuState(styles.displayed);
    } else {
      setMenuBtn(faBars);
      setMenuState(styles.hidden);
    }
  }

  function logOut() {
    setAuth(null);
    router.push("/");
  }
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src={logo} alt="Holidaze logo, white on blue background" />
            </a>
          </Link>
        </div>
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
                  <a className={router.pathname == "/" ? "active" : ""}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/accommodations">
                  <a
                    className={
                      router.pathname == "/accommodations" ? "active" : ""
                    }
                  >
                    Accommodations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={router.pathname == "/contact" ? "active" : ""}>
                    Contact
                  </a>
                </Link>
              </li>
              {auth ? (
                <>
                  <li>
                    <Link href="/admin">
                      <a
                        className={router.pathname == "/admin" ? "active" : ""}
                      >
                        Admin
                      </a>
                    </Link>
                  </li>
                  <button onClick={logOut}>Logout</button>
                </>
              ) : null}
            </ul>
          </nav>
          <div className={styles.menuSearchField}>
            <SearchField />
          </div>
        </div>
      </div>

      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
