import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import ImgLarge from "./ImgLarge";
import Details from "./Details";
import Back from "./Back";

function IndividualCountry(props) {
  const [country, setPresent] = useState({
    currencies: [],
    languages: [],
    topLevelDomain: [],
    borders: []
  });
  const [codeList, setCodes] = useState({});

  useEffect(() => {
    async function fetchd() {
      const restapi = await axios.get(
        "https://restcountries.eu/rest/v2/alpha/" +
          props.routerProps.match.params.code
      );
      const allCount = await axios.get("https://restcountries.eu/rest/v2/all");
      function make(obj, ctry) {
        return {
          ...obj,
          [ctry.alpha3Code]: ctry.name
        };
      }
      setCodes(allCount.data.reduce(make, {}));

      setPresent(restapi.data);
    }
    fetchd();
  }, [props.routerProps.match.params.code]);

  return (
    <div>
      <Back />
      <div className="row">
        <div className="col-md-6">
          <ImgLarge country={country} />
        </div>
        <div className="col-md-6">
          <Details country={country} codeList={codeList} />
        </div>
      </div>
    </div>
  );
}

export default IndividualCountry;
