import Link from "next/link";
import styles from "../../styles/layout/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div>
        <div>
          <h6>Holidaze</h6>
          <p>
            A booking website with offices in Bergen, Norway. Our main goal is
            to make booking a home away from home the easiest part of your
            journey, by providing a wide selection of accommodations, good
            prices, safe transactions, and the Holidaze team always ready to
            help if needed.
          </p>
        </div>
        <nav aria-label="social media links">
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
      <div>
        <p>Menu</p>
        <nav aria-label="footer navigation">
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
      <nav aria-label="terms and conditions, and admin login navigation">
        <ul>
          <li>
            <Link href="/404">
              <a>Terms and conditions | </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Admin login</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>&copy;2022 Holidaze</p>
    </div>
  );
}

export default Footer;
