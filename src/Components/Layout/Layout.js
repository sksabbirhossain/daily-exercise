import React from "react";
import Exercise from "../Exercise/Exercise";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="container">
            <div className="hadding">
              <h3>
                <span></span>daily exercise
              </h3>
              <p>Select today's exercise</p>
            </div>
            {/* loop all exercise */}
            <div className="row gap-4">
            <Exercise/>
            <Exercise/>
            <Exercise/>
            <Exercise/>
            </div>
          </div>
        </div>

        {/* sidebar section */}
        <div className="col-md-3">
          <h1>world</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
