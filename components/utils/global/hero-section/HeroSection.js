import Image from "next/image";
import propTypes from "prop-types";
import styles from "../../../../styles/components/global/hero-section/HeroSection.module.css";

//  component used for several of the websites pages with
//  image on one side of the screen and whatever content added on the other

function HeroSection({ img, altText = "alt text missing", children }) {
  return (
    //absolute positioning styling used for mobile only
    <div className={styles.container}>
      <div className={styles.absolutePositioning}>{children}</div>
      <Image src={img} alt={altText} className={styles.heroImg} layout="fill" />
    </div>
  );
}

export default HeroSection;

HeroSection.propTypes = {
  img: propTypes.object.isRequired,
  altText: propTypes.string,
  children: propTypes.any,
};
