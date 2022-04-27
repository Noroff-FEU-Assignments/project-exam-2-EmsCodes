import Image from "next/image";
import Heading from "../global/heading/Heading";
import Link from "next/link";
import styles from "../../../styles/components/index/HotelNavCards.module.css";
import img from "../../../public/images/hotel-images/hotel-image.jpg";
function HotelNavCards() {
  return (
    <nav aria-label="accommodation navigation" className={styles.cardContainer}>
      <ul className={styles.ul}>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a className={styles.listLink}>
              <Image src={img} alt="alt text" className={styles.cardImage} />
              Hotels
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Image src={img} alt="alt text" className={styles.cardImage} />
          <Link href="/accommodations">
            <a className={styles.listLink}>B&B</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Image src={img} alt="alt text" className={styles.cardImage} />
          <Link href="/accommodations">
            <a className={styles.listLink}>Guesthouses</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HotelNavCards;
