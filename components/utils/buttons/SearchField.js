import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchField.module.css";
import { useState } from "react";
import Link from "next/link";

function SearchField({ hotel }) {
  const [searchValue, setSearchValue] = useState();
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
    if (e.target.value.trim().length === 0) {
      setSearchValue();
    }

    const filteredHotels = hotel.filter((item) => {
      return (
        item.attributes.name.toLowerCase().includes(searchValue) ||
        item.attributes.short_description.toLowerCase().includes(searchValue)
      );
    });

    setResult(filteredHotels);
  };

  return (
    <div>
      <form>
        <label htmlFor="search" className="srOnly">
          Search for hotel
        </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for hotel..."
          onKeyUp={handleChange}
        ></input>
        <button className={styles.searchBtn} disabled={true} aria-hidden="true">
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </button>
      </form>
      <div className={searchValue ? styles.searchResult : ""}>
        <ul>
          {result.length === 0
            ? "No results!"
            : result.map((hotelResult) => {
                return (
                  <li key={hotelResult.id}>
                    <Link href={`detail/${hotelResult.id}`}>
                      <a>{hotelResult.attributes.name}</a>
                    </Link>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default SearchField;
