import React from "react";
import "./Details.css"

const Details = () => {
  return (
    <div className="mt-4">
      <h4>Exercise Details</h4>
      <div className="Details">
        <p>Exercise Details</p>
        <span>50s</span>
      </div>
      <div className="Details">
        <p>Break Time</p>
        <span>50s</span>
      </div>
    </div>
  );
};

export default Details;
