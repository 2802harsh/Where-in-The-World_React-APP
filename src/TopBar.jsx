import React from "react";
// import Zoom from "react-reveal/Zoom";
// import Brightness3Icon from '@material-ui/icons/Brightness3';

function TopBar(props) {
  return (
    // <Zoom>
    <div style={props.apply}>
      <nav className="navbar navbar-expand-lg topbar row theme">
        <div className="col-6">
          <span className="navbar-brand mb-0 h1">Where in the World ?</span>
        </div>
        <div className="col-6">
          <div
            onClick={() => {
              props.changeMode();
            }}
            className="dark-right"
          >
            <i className="fas fa-moon" />
            Dark Mode
          </div>
        </div>
      </nav>
    </div>
    // </Zoom>
  );
}

export default TopBar;
