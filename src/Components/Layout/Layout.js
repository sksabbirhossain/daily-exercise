import React, { useEffect, useState } from "react";
import Break from "../Break/Break";
import Details from "../Details/Details";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import notify from "../../utilities/toast";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Layout.css";

const Layout = () => {
  const [exercises, setExercises] = useState([]);
  const [addList, setAddList] = useState([]);
  const [breakTime, setBreakTime] = useState(0);

  // fetch data
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
    const breakTime = time;
    setBreakTime(breakTime);
    localStorage.setItem("break-time", time);
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-lg-9">
          <div className="container">
            <div className="hadding mb-3">
              <h3 >
                <span>
                <FontAwesomeIcon icon={faDumbbell}/>
                </span>
                daily exercise 
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
        <div className="col-lg-3">
          <div className="sidebar">
            <Profile />
            <Break addBreakTime={addBreakTime} />

            <Details exerciseTime={totalTime} addBreakTime={breakTime} />
            <button
              onClick={notify}
              className="btn btn-success w-100 mt-2 mt-md-5"
            >
              Activity Complated
            </button>
            {/* customize toast message */}
            <ToastContainer
              theme="colored"
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
