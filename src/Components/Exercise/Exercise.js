import React from "react";

const Exercise = () => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        class="rounded mt-2"
        alt="exercice_image"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text mb-0">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="card-text mb-1">
          For Age: <span className="fw-bold"> 20-25</span>
        </p>
        <p className="card-text">
          Time requried: <span className="fw-bold"> 30s</span>
        </p>
        <button href="/" class="btn btn-success w-100">
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Exercise;
