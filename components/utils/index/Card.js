import Image from "next/image";
import propTypes from "prop-types";

function Card({
  img,
  altText = "alt text missing",
  name,
  containerStyle,
  contentStyle,
  imageStyle,
}) {
  return (
    <div className={containerStyle}>
      <div>
        <Image
          src={img}
          alt={altText}
          className={imageStyle}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className={contentStyle}>{name}</p>
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
