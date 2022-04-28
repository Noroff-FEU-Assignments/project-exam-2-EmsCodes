import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import propTypes from "prop-types";

function Icons({ icon, text, iconStyle, textStyle, iconContainer }) {
  return (
    <div className={iconContainer}>
      <FontAwesomeIcon icon={icon} className={iconStyle} />
      <p className={textStyle}>{text}</p>
    </div>
  );
}

export default Icons;

Icons.propTypes = {
  icon: propTypes.object.isRequired,
  text: propTypes.string.isRequired,
};
