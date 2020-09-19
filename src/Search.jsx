import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

function Search(props) {
  const [tosearch, setSearch] = useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    props.search(tosearch);
  });
  return (
    <div className="search theme">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input
          style={{ display: "inline-block" }}
          type="text"
          size="35"
          onChange={handleChange}
          value={tosearch}
          placeholder="Search for a country..."
          className="search-input"
        />
      </div>
    </div>
  );
}

export default Search;
