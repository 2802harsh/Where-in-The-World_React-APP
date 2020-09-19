import React, { useEffect, useState } from "react";

function ImgLarge(props) {
  const country = props.country;
  return (
    <div className="ind-flag-cont">
      <img src={country.flag} alt="Flag" className="individual-flag" />
    </div>
  );
}

export default ImgLarge;
