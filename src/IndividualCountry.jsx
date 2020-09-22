import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import ImgLarge from "./ImgLarge";
import Details from "./Details";
import Back from "./Back";

import Flip from "react-reveal/Flip";

function IndividualCountry(props) {
  const [country, setPresent] = useState({
    currencies: [],
    languages: [],
    topLevelDomain: [],
    borders: []
  });
  const [codeList, setCodes] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/alpha/" +
          props.routerProps.match.params.code
      )
      .then((res) => {
        setPresent(res.data);
      });
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      function make(obj, ctry) {
        return {
          ...obj,
          [ctry.alpha3Code]: ctry.name
        };
      }
      setCodes(res.data.reduce(make, {}));
    });
  }, [props.routerProps.match.params.code]);

  return (
    <div>
      <Back />
      <Flip top>
        <div className="row">
          <div className="col-md-6">
            <ImgLarge country={country} />
          </div>
          <div className="col-md-6">
            <Details country={country} codeList={codeList} />
          </div>
        </div>
      </Flip>
    </div>
  );
}

export default IndividualCountry;
