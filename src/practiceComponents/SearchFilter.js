//import hook
import { useState } from "react";

//import data
import mockData from "../data/MOCK_DATA.json";

//import css
import "./SearchFilter.css";

const SearchFilter = () => {
  // const [searchItem, setSearchItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="text-center py-5">
      <h1 className="text-3xl font-semibold">Name filter</h1>
      <input
        className="shadow border-2 border-solid border-slate-700 px-2"
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
