import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";

const Layout = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
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
              {exercises.map((exercise) => (
                <Exercise key={exercise.id} exercise={exercise} />
              ))}
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
