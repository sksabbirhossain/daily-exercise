import React from "react";
import "./Break.css";

const Break = ({ addBreakTime }) => {
 
  return (
    <div className="mt-4">
      <h5>Add A Break</h5>
      <div className="brak-time">
        <span onClick={() => addBreakTime(10)} >10s</span>
        <span onClick={() => addBreakTime(20)}>20s</span>
        <span onClick={() => addBreakTime(30)}>30s</span>
        <span onClick={() => addBreakTime(40)}>40s</span>
        <span onClick={() => addBreakTime(50)}>50s</span>
      </div>
    </div>
  );
};

export default Break;
