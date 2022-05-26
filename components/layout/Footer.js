import Link from "next/link";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "../../public/holidaze-logo.png";

function Footer() {
  return (
    <footer className={`${styles.footer} footer`}>
      <div className={styles.container}>
        <div>
          <div>
            <Link href="/">
              <a className={styles.footerLogo}>
                <Image
                  src={logo}
                  alt="Holidaze logo, white on blue background"
                  layout="responsive"
                  objectFit="contain"
                />
              </a>
            </Link>
            <p>
              A booking website with offices in Bergen, Norway. Our main goal is
              to make booking a home away from home the easiest part of your
              journey, by providing a wide selection of accommodations, good
              prices, safe transactions, and the Holidaze team always ready to
              help if needed.
            </p>
          </div>
          <nav aria-label="social media links" className={styles.socialLinks}>
            <ul>
              <li>
                <Link href="https://www.facebook.com/">
                  <a>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <a>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.contentFlex}>
          <div>
            <nav aria-label="footer navigation" className={styles.footerNav}>
              <p>Menu</p>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/accommodation">
                    <a>Hotels</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="/FAQ">
                    <a>FAQ</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <p className="srOnly">Contact info</p>
          <address>
            <p>
              <span>Address:</span> Holidaze 10B
            </p>
            <p>
              <span>Email:</span> holidaze@holidaze.com
            </p>
            <p>
              <span>Phone:</span> 123 32 123
            </p>
          </address>
        </div>
      </div>
      <nav
        aria-label="terms and conditions, and admin login navigation"
        className={styles.termsAndLoginNav}
      >
        <ul>
          <li>
            <Link href="/404">
              <a>Terms and conditions</a>
            </Link>
          </li>
          <div aria-hidden="true">|</div>
          <li>
            <Link href="/login">
              <a>Admin login</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copy}>&copy;2022 Holidaze</p>
    </footer>
  );
}

export default Footer;
