import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import styles from "./Layout.module.css";

function AdminSection() {
  const router = useRouter();
  const [auth, setAuth] = useContext(AuthContext);

  function logOut() {
    setAuth(null);
    router.push("/");
  }

  return (
    <>
      {auth && (
        <>
          <li>
            <Link href="/admin">
              <a className={router.pathname == "/admin" ? "active" : ""}>
                Admin
              </a>
            </Link>
          </li>
          <button className={styles.logOutBtn} onClick={logOut}>
            Logout
          </button>
        </>
      )}
    </>
  );
}

export default AdminSection;
