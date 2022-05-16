import Image from "next/image";
import Heading from "../global/heading/Heading";
import propTypes from "prop-types";
import styles from "../../../styles/components/accommodations/HotelCards.module.css";
import { useEffect } from "react";

function HotelCards({ name, price, img, priceText, rating }) {
  if (!name) {
    name = "Name missing";
  }
  if (!price) {
    price = "Price missing";
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.rating}>
        <p>{rating}</p>
      </div>
      <Image src={img} alt={name} layout="fill" />
      <div className={styles.content}>
        <div>
          <Heading size="3" content={name} />
          <p>Place</p>
        </div>
        <p className={styles.price}>
          <span className="srOnly">Price</span>
          <span>{priceText}</span> {price}
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
