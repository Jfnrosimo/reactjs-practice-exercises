//import hook
import { useState } from "react";

//import data
import mockData from "../data/MOCK_DATA.json";

//import css
import "./SearchFilter.css";

const SearchFilter = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="search-filter">
      <h1>Search filter</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {mockData
        .filter((item) => {
          if (searchItem === "") {
            return item;
          } else if (
            item.first_name.toLowerCase().includes(searchItem.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item, index) => {
          return index < 15 && <div>{item.first_name}</div>;
        })}
    </div>
  );
};

export default SearchFilter;
