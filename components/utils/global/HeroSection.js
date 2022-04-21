import Image from "next/image";
import React from "react";

//  component used for several of the websites pages with
//  image on one side of the screen and whatever content added on the other

function HeroSection({ img, altText = "alt text missing", children }) {
  return (
    <div>
      <div>{children}</div>
      <Image src={img} alt={altText} />
    </div>
  );
}

export default HeroSection;
