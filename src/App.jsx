import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./styles.css";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import TopBar from "./TopBar";
import SearchandFilter from "./SearchandFilter";
import Countries from "./Countries";
import IndividualCountry from "./IndividualCountry";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  // let his = useHistory()
  // his.push("/");
  // function usePrevious(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // }

  const [theme, setTheme] = useState("light");
  // theme = usePrevious()

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Filter By Region");
  function whatToSearch(query) {
    setQuery(query);
  }
  function whatFilter(fil) {
    setFilter(fil);
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <>
            {/* <Route path="/" component={App} /> */}
            <TopBar changeMode={toggleTheme} className="navbar topbar" />
            <Route
              path="/"
              exact
              render={(props) => (
                <div className="content">
                  <SearchandFilter query={whatToSearch} filt={whatFilter} />
                  <Countries query={query} filter={filter} />
                </div>
              )}
            />

            <Route
              path="/country/:code"
              render={(props) => (
                <div className="individual-content">
                  <IndividualCountry
                    routerProps={props}
                    setTheme={setTheme}
                    currtheme={theme}
                  />
                </div>
              )}
            />
            {/* <Route path="/contact" component={Contact} /> */}
          </>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
