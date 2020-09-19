import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Back() {
  let hist = useHistory();
  return (
    <button
      type="button"
      onClick={() => hist.goBack()}
      className="theme back-button"
    >
      <ArrowBackIcon /> Back
    </button>
  );
}

export default Back;
