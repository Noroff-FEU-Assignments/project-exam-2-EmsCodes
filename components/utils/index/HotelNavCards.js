import Image from "next/image";
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
              <p className={styles.linkText}>Hotels</p>
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a className={styles.listLink}>
              <Image src={img} alt="alt text" className={styles.cardImage} />
              <p className={styles.linkText}>Hotels</p>
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a className={styles.listLink}>
              <Image src={img} alt="alt text" className={styles.cardImage} />
              <p className={styles.linkText}>Hotels</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HotelNavCards;
