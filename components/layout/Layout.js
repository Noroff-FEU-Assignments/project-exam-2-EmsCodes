// import { useRouter } from "next/router";
import Link from "next/link";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

import React from "react";

function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
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

      <div className="container">{children}</div>
    </>
  );
}

export default Layout;
