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
  }, [filter]);

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
        <span className="theme-white-hover theme">
          {" "}
          &nbsp; {filter} &nbsp; &nbsp; <KeyboardArrowDownIcon />
        </span>
      </button>
      <div className="dropdown-menu theme" aria-labelledby="dropdownMenuButton">
        {showall && (
          <a
            onClick={() => handleChange("All")}
            className="dropdown-item theme"
            href="#"
          >
            <span className="theme-white-hover theme">All</span>
          </a>
        )}

        <a
          onClick={() => handleChange("Africa")}
          className="dropdown-item"
          href="#"
        >
          <span className="theme-white-hover theme">Africa</span>
        </a>
        <a
          onClick={() => handleChange("America")}
          className="dropdown-item"
          href="#"
        >
          <span className="theme-white-hover theme">America</span>
        </a>
        <a
          onClick={() => handleChange("Asia")}
          className="dropdown-item"
          href="#"
        >
          <span className="theme-white-hover theme">Asia</span>
        </a>
        <a
          onClick={() => handleChange("Europe")}
          className="dropdown-item"
          href="#"
        >
          <span className="theme-white-hover theme">Europe</span>
        </a>
        <a
          onClick={() => handleChange("Oceania")}
          className="dropdown-item"
          href="#"
        >
          <span className="theme-white-hover theme">Oceania</span>
        </a>
      </div>
    </div>
  );
}

export default Filter;
