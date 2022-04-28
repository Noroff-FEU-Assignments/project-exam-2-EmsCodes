import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/components/utils/buttons/SearchField.module.css";

function SearchField() {
  return (
    <form>
      <label htmlFor="search" className="srOnly">
        Search for hotel
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for hotel..."
      ></input>
      <button className={styles.searchBtn} disabled="true" aria-hidden="true">
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      </button>
    </form>
  );
}

export default SearchField;
