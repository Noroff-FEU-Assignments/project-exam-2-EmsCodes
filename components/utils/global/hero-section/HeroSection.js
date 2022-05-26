import Image from "next/image";
import propTypes from "prop-types";
import styles from "../../../../styles/components/global/hero-section/HeroSection.module.css";

//  component used for several of the websites pages with
//  image on one side of the screen and whatever content added on the other

function HeroSection({
  img,
  altText = "alt text missing",
  children,
  style,
  containerStyle,
}) {
  return (
    //absolute positioning styling used for mobile only
    <div className={containerStyle}>
      <div className={style}>{children}</div>
      <Image
        src={img}
        alt={altText}
        className={styles.heroImg}
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
}

export default HeroSection;

HeroSection.propTypes = {
  img: propTypes.any.isRequired,
  altText: propTypes.string,
  children: propTypes.any,
};
