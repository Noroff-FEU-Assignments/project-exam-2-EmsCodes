import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import propTypes from "prop-types";

function Icons({ icon, text }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
}

export default Icons;

Icons.propTypes = {
  icon: propTypes.object.isRequired,
  text: propTypes.string.isRequired,
};
