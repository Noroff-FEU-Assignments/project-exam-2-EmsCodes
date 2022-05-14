import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/components/index/HotelNavCards.module.css";
import hotelImg from "../../../public/images/hotel-images/hotel-image.jpg";
import b_and_bImg from "../../../public/images/hotel-images/b&b.jpg";
import guesthouse from "../../../public/images/hotel-images/guesthouse.jpg";
function HotelNavCards() {
  return (
    <nav aria-label="accommodation navigation" className={styles.cardContainer}>
      <ul className={styles.ul}>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a className={styles.listLink}>
              <div>
                <Image
                  src={hotelImg}
                  alt="alt text"
                  className={styles.cardImage}
                  layou="fill"
                  objectFit="cover"
                />
              </div>
              <p className={styles.linkText}>Hotels</p>
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a className={styles.listLink}>
              <div>
                <Image
                  src={b_and_bImg}
                  alt="alt text"
                  className={styles.cardImage}
                  layou="fill"
                  objectFit="cover"
                />
              </div>
              <p className={styles.linkText}>B&B</p>
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/accommodations">
            <a className={styles.listLink}>
              <div>
                <Image
                  src={guesthouse}
                  alt="alt text"
                  className={styles.cardImage}
                  layou="fill"
                  objectFit="cover"
                />
              </div>
              <p className={styles.linkText}>Guesthouses</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HotelNavCards;
