import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchField.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function SearchField({ hotel }) {
  // useEffect(() => {
  //   hotels.forEach((element) => {
  //     console.log(element.attributes.name);
  //   });
  // });

  console.log(hotel);

  const [searcvalue, setSearchValue] = useState(null);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  console.log(searcvalue);

  // const filteredHotels = hotels.filter((hotel) => {
  //   return hotel.attributes.name
  //     .toLowerCase()
  //     .includes(searcvalue.toLowerCase());
  // });

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
