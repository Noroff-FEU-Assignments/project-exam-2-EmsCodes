import Image from "next/image";
import React from "react";

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
