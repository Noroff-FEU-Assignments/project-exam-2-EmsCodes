import React from "react";
import styles from "../../../styles/components/utils/buttons/SearchField.module.css";

function SearchField() {
  return (
    <form>
      <label htmlFor="search" className={styles.srOnly}>
        Search for hotel
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for hotel..."
      ></input>
      <button>Search</button>
    </form>
  );
}

export default SearchField;
