import React from "react";
import propTypes from "prop-types";

function Heading({ size = 1, content, style }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading className={style}>{content}</VariableHeading>;
}

export default Heading;

Heading.propTypes = {
  content: propTypes.string.isRequired,
};
