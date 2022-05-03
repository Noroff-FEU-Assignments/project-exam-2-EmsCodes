import Image from "next/image";
import Heading from "../global/heading/Heading";
import propTypes from "prop-types";
import styles from "../../../styles/components/accommodations/HotelCards.module.css";

function HotelCards({ name, price, img }) {
  if (!name) {
    name = "Name missing";
  }
  if (!price) {
    price = "Price missing";
  }
  return (
    <div className={styles.cardContainer}>
      <Image
        src={img}
        alt={name}
        layout="responsive"
        width="250px"
        height="250px"
      />
      <div className={styles.content}>
        <div>
          <Heading size="3" content={name} />
          <p>Place</p>
        </div>
        <p>
          <span className="srOnly">Price</span>From {price}
        </p>
      </div>
    </div>
  );
}

export default HotelCards;

HotelCards.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  img: propTypes.any.isRequired,
};
