import Image from "next/image";
import Heading from "../heading/Heading";
import Link from "next/link";
import styles from "../../../styles/components/index/HotelNavCards.module.css";

function HotelNavCards() {
  return (
    <nav aria-label="accommodation navigation" className={styles.cardContainer}>
      <ul className={styles.ul}>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a>
              <p>Hotels</p>
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a>
              <p>B&B</p>
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a>
              <p>Guesthouses</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HotelNavCards;
