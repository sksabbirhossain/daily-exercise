import React from "react";

const Exercise = ({ exercise }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={exercise.img} class="rounded mt-2" alt="exercice_image" />
      <div class="card-body">
        <h5 class="card-title">{exercise.title}</h5>
        <p class="card-text mb-0">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="card-text mb-1">
          For Age: <span className="fw-bold"> 20-25</span>
        </p>
        <p className="card-text">
          Time requried: <span className="fw-bold"> { exercise.time}s</span>
        </p>
        <button href="/" class="btn btn-success w-100">
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Exercise;
