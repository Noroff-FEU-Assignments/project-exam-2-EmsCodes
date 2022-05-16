import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchField.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function SearchField({ hotel }) {
  const [searcvalue, setSearchValue] = useState(null);
  const [result, setResult] = useState([]);
  const [hotels, filteredHotels] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.length === 0) {
      setSearchValue(null);
    }
    const filteredHotels = hotel.filter((item) =>
      item.attributes.name.toLowerCase().includes(searcvalue)
    );
    console.log(filteredHotels);
    if (!filteredHotels) {
      return <p>No hotels found</p>;
    }

    return filteredHotels.map((element) => {
      return console.log(element.attributes.name);
    });
  };

  console.log(searcvalue);

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
      <div>
        {/* {hotel.map((test) => {
          return <div key={test.id}>{test.attributes.name}</div>;
        })} */}
      </div>
    </div>
  );
}

export default SearchField;
