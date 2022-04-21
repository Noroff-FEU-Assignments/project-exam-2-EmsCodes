import Image from "next/image";
import propTypes from "prop-types";

function Card({
  img,
  altText = "alt text missing",
  name,
  place = null,
  price = null,
  rating = null,
}) {
  return (
    <div>
      <Image src={img} alt={altText} />
      <p>{rating}</p>
      <div>
        <div>
          <p>{name}</p>
          <p>{place}</p>
        </div>
        {price}
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  img: propTypes.any.isRequired,
  altText: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  place: propTypes.string,
  price: propTypes.any,
  rating: propTypes.number,
};
