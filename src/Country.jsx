import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Country(props) {
  var country = props.ctry;
  const link = `/country/${country.alpha3Code}`;
  function handleClick() {
    // history.push(link);
  }
  return (
    <Fade bottom big>
      <div className="col-lg-3 col-md-4 col-sm-6 country">
        <Link
          onClick={handleClick}
          to={link}
          style={{ textDecoration: "none" }}
        >
          <div className="theme country-card new no-hover-effect">
            <div className="flag">
              <img alt="flag" className="flag-img" src={country.flag} />
            </div>
            <div className="country-info">
              <h4 className="card-title">{country.name}</h4>
              <div className="stats">
                <h6>Population:&nbsp;</h6>
                <span className="regular-text">{country.population}</span>
              </div>
              <div className="stats">
                <h6>Region: &nbsp;</h6>
                <span className="regular-text">{country.region}</span>
              </div>
              <div className="stats">
                <h6>Capital:&nbsp; </h6>
                <span className="regular-text">{country.capital}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Fade>
  );
}

export default Country;
