import React from "react";

const Questions = () => {
  return (
    <div className="container mb-4">
      <div className="text-center mb-4">
        <h3>Questions and Answer</h3>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              how does react work?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                ReactJS divides the UI into isolated reusable pieces of code
                known as components. React components work similarly to
                JavaScript functions as they accept arbitrary inputs called
                properties or props. It's possible to have as many components as
                necessary without cluttering your code.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              what is difference between props and state in react?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Props are used to pass data from one component to another. The
                state is a local data storage that is local to the component
                only and cannot be passed to other components.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              where to use useeffect in reactjs?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                By using useeffect, you tell React that your component needs to
                do something after render. React will remember the function you
                passed and call it later after performing the DOM updates.
              </p>
              <p className="fw-bold">
                Data fetching, setting up a subscription, and manually changing
                the DOM in React components are all examples of useEffect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
