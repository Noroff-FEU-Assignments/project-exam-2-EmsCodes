import Image from "next/image";
import Heading from "../global/heading/Heading";
import propTypes from "prop-types";

function HotelCards({ name, price, img }) {
  if (!name) {
    name = "Name missing";
  }
  if (!price) {
    price = "Price missing";
  }
  return (
    <>
      <Image
        src={img}
        alt={name}
        layout="responsive"
        width="250px"
        height="250px"
      />
      <div>
        <div>
          <Heading size="3" content={name} />
          <p>Place</p>
        </div>
        <p>
          <span className="srOnly">Price</span>From {price}
        </p>
      </div>
    </>
  );
}

export default HotelCards;

HotelCards.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  img: propTypes.any.isRequired,
};
