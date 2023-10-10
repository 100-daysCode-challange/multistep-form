import React from "react";
import "./step.css";


function Step({ currentStep }) {

  console.log("currentStep in Step component:", currentStep);

  return (
    <div className="step_Display">
      <div className="circle">
        <div
          className={`circle_1 ${currentStep === 1 ? "active" : ""}`}
        >
          <p>1</p>
        </div>
        <div
          className={`circle_2 ${currentStep === 2 ? "active" : ""}`}
        >
          <p>2</p>
        </div>
        <div
          className={`circle_3 ${currentStep === 3 ? "active" : ""}`}
        >
          <p>3</p>
        </div>
        <div
          className={`circle_4 ${currentStep === 4 ? "active" : ""}`}
        >
          <p>4</p>
        </div>
      </div>

      <div className="steps">
        <div className="step_1">
          <p>Step 1</p>
          <span>Your info</span>
        </div>
        <div className="step-2">
          <p>step 2</p>
          <span>Select plan</span>
        </div>
        <div className="step-3">
          <p>step 3</p>
          <span>Ass-ons</span>
        </div>
        <div className="step-4">
          <p>step 4</p>
          <span>Summary</span>
        </div>
      </div>
    </div>
  );
}

export default Step;
