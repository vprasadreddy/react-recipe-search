import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingSpinner() {
  const spinnerCSS = {
    position: "fixed",
    top: "50%",
    left: "50%",
    /* to position the div exactly at center */
    transform: "translate(-50%, -50%)"
  };
  return (
    <div style={spinnerCSS}>
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;
