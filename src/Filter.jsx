import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Filter(props) {
  const [filter, setFilter] = useState("Filter By Region");
  function handleChange(val) {
    setFilter(val);
    setAll(true);
  }
  useEffect(() => {
    props.filterFunction(filter);
  });

  const [showall, setAll] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="theme btn dropdown-toggle shadow-none filter-button"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>
          {" "}
          &nbsp; {filter} &nbsp; &nbsp; <KeyboardArrowDownIcon />
        </span>
      </button>
      <div className="dropdown-menu theme" aria-labelledby="dropdownMenuButton">
        {showall && (
          <span
            onClick={() => handleChange("All")}
            className="dropdown-item theme"
          >
            <span className="theme-white-hover theme">All</span>
          </span>
        )}

        <span onClick={() => handleChange("Africa")} className="dropdown-item">
          <span className="theme-white-hover theme">Africa</span>
        </span>
        <span onClick={() => handleChange("America")} className="dropdown-item">
          <span className="theme-white-hover theme">America</span>
        </span>
        <span onClick={() => handleChange("Asia")} className="dropdown-item">
          <span className="theme-white-hover theme">Asia</span>
        </span>
        <span onClick={() => handleChange("Europe")} className="dropdown-item">
          <span className="theme-white-hover theme">Europe</span>
        </span>
        <span onClick={() => handleChange("Oceania")} className="dropdown-item">
          <span className="theme-white-hover theme">Oceania</span>
        </span>
      </div>
    </div>
  );
}

export default Filter;
