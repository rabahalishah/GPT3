import React from "react";
import "./error.css";
import error from "../assets/error.png";
const Error = () => {
  return (
    <div className="gpt3__error section__margin">
      <div className="gpt3__error-pic">
        <img src={error} alt="error_image"/>
      </div>
      <div className="gpt3__content">
        <h1>Page not Found</h1>
        <h3>Something went wrong. Please try again later!</h3>
      </div>
    </div>
  );
};

export default Error;
