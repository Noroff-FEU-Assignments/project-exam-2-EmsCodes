import NextHead from "next/head";
import propTypes from "prop-types";

function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""} Holidaze
      </title>

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Endre Makra-Stenkløv" />
      <meta
        name="description"
        content="Holidaze, a booking site located in Bergen"
      />
    </NextHead>
  );
}

Head.propTypes = {
  title: propTypes.string,
};

export default Head;
