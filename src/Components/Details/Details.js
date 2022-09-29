import React from "react";
import "./Details.css";

const Details = ({ exerciseTime, addBreakTime }) => {
  const oldbeakTime = localStorage.getItem("break-time");
  
  return (
    <div className="mt-4">
      <h4>Exercise Details</h4>
      <div className="Details">
        <p>Exercise Time</p>
        <span>{exerciseTime}s </span>
      </div>
      <div className="Details">
        <p>Break Time</p>
        <span>{oldbeakTime || addBreakTime}s</span>
      </div>
    </div>
  );
};

export default Details;
