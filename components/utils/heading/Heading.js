import React from "react";
import propTypes from "prop-types";

function Heading({ size = 1, content }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading>{content}</VariableHeading>;
}

// Heading.propTypes = {
//   content: propTypes.string.isRequired,
// };

export default Heading;
