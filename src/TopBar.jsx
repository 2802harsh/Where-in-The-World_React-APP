import React from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

function TopBar(props) {
  return (
    // <Zoom>
    <div style={props.apply}>
      <nav className="navbar navbar-expand-lg topbar row theme">
        <div className="col-6">
          <Link to="/" className="theme" style={{ textDecoration: "none" }}>
            <span className="navbar-brand mb-0 h1">Where in the World ?</span>
          </Link>
        </div>

        <div className="col-6">
          <div
            onClick={() => {
              props.changeMode();
            }}
            className="dark-right"
          >
            <Flip>
              <i className="fas fa-moon" />
            </Flip>
            Dark Mode
          </div>
        </div>
      </nav>
    </div>
    // </Zoom>
  );
}

export default TopBar;
