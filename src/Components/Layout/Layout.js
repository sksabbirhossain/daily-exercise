import React, { useEffect, useState } from "react";
import Break from "../Break/Break";
import Details from "../Details/Details";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import "./Layout.css";

const Layout = () => {
  const [exercises, setExercises] = useState([]);
  const [addList, setAddList] = useState([]);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  // handle add to list
  const handleAddToList = (selectedExercise) => {
    const newList = [...addList, selectedExercise];
    setAddList(newList);
  };
  // set exercise time
  let totalTime = 0;
  for (const listTime of addList) {
    totalTime = totalTime + listTime.time;
  }

  // set break time
  const addBreakTime = (time) => {
    // alert(`time ${time}`);
    const breakTime = time;
    setBreakTime(breakTime);
    localStorage.setItem("break-time", time)
  };

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
                <Exercise
                  key={exercise.id}
                  exercise={exercise}
                  handleAddToList={handleAddToList}
                />
              ))}
            </div>
          </div>
        </div>

        {/* sidebar section */}
        <div className="col-md-3">
          <div className="sidebar">
            <Profile />
            <Break addBreakTime={addBreakTime} />

            <Details exerciseTime={totalTime} addBreakTime={breakTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
