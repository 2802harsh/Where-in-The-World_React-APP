import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Country from "./Country";

function Countries(props) {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(
        res.data.map((country) => {
          if (country.region === "Americas") {
            country.region = "America";
          }
          return country;
        })
      );
      setLoad(true);
    });
  }, []);

  const [results, setResults] = useState(countries);

  const [found, setFound] = useState(true);

  useEffect(() => {
    var filtered = countries.filter((country) => {
      if (props.query === "") {
        return true;
      } else if (
        country.name.toLowerCase().includes(props.query.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    filtered = filtered.filter((country) => {
      if (props.filter === "Filter By Region" || props.filter === "All") {
        return true;
      } else {
        return country.region === props.filter;
      }
    });
    setResults(filtered);
  }, [found, countries, props.query, props.filter]);

  useEffect(() => {
    if (results.length === 0) {
      setFound(false);
    } else {
      setFound(true);
    }
  }, [results]);

  function viewCard(country) {
    return <Country ctry={country} key={country.alpha3Code} />;
  }

  if (load) {
    return (
      // <Fade bottom big>
      found === true ? (
        <div className="row country-content">{results.map(viewCard)}</div>
      ) : (
        <h1>No Match Found !</h1>
      )
      // </Fade>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Countries;