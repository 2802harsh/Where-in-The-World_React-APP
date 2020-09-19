import React from "react";
import { Link } from "react-router-dom";
function Details(props) {
  const country = props.country;
  const codes = props.codeList;
  // var hist = useHistory();
  return (
    <div>
      <div className="row details-top">
        <div className="col">
          <h2>{country.name} </h2>
        </div>
      </div>
      <div className="row details-mid">
        <div className="col-md-6">
          <div className="stats-ind">
            <h6>Native Name: </h6>
            <span className="regular-text">{country.nativeName}</span>
          </div>
          <div className="stats-ind">
            <h6>Population: </h6>
            <span className="regular-text">{country.population}</span>
          </div>
          <div className="stats-ind">
            <h6>Region: </h6>
            <span className="regular-text">{country.region}</span>
          </div>
          <div className="stats-ind">
            <h6>Sub Region: </h6>
            <span className="regular-text">{country.subregion}</span>
          </div>
          <div className="stats-ind">
            <h6>Capital: </h6>
            <span className="regular-text">{country.capital}</span>
          </div>
        </div>

        <div className="col-md-6">
          <div className="stats-ind">
            <h6>Top Level Domain: </h6>
            <span className="regular-text">
              {country.topLevelDomain.map((curr, ind) => {
                return (
                  curr + (ind !== country.topLevelDomain.length - 1 ? ", " : "")
                );
              })}
            </span>
          </div>
          <div className="stats-ind">
            <h6>Currencies: </h6>
            <span className="regular-text">
              {/* {country.capital} */}
              {country.currencies.map((curr, ind) => {
                return (
                  curr.name +
                  (ind !== country.currencies.length - 1 ? ", " : "")
                );
              })}
            </span>
          </div>
          <div className="stats-ind">
            <h6>Languages: </h6>
            <span className="regular-text">
              {/* {country.capital} */}
              {country.languages.map((lang, ind) => {
                return (
                  lang.name + (ind !== country.languages.length - 1 ? ", " : "")
                );
              })}
            </span>
          </div>
        </div>
      </div>

      {country.borders.length !== 0 ? (
        <div className="row">
          <div className="border-head">
            <h5>Border Countries: &nbsp;</h5>
          </div>
          <div className="col all-borders">
            <div className="">
              {country.borders.map((bord, ind) => {
                return (
                  <div key={bord} className="theme border-button">
                    <Link to={"/country/" + bord} className="border-a theme">
                      {codes[bord]}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Details;
