import Image from "next/image";
import Heading from "../global/heading/Heading";

function HotelCards({ name, price, img }) {
  return (
    <>
      <Image
        src={img}
        alt={name}
        layout="responsive"
        width="100px"
        height="100px"
      />
      <Heading size="3" content={name} />
      <p>
        <span className="srOnly">Price</span>From {price}
      </p>
      <p>Place</p>
    </>
  );
}

export default HotelCards;
