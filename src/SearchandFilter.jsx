import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function SearchandFilter(props) {
  return (
    <div className="search-filter">
      <div className="row">
        <div className="col-md-6">
          <Search search={props.query} />
        </div>
        {/* <div className="col-md-3"></div> */}
        <div className="col-md-6 dropdown">
          <Filter filterFunction={props.filt} />
        </div>
      </div>
    </div>
  );
}

export default SearchandFilter;
