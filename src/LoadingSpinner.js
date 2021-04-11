import "./App.css";
import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;
