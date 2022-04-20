import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icons({ icon, text }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
}

export default Icons;
