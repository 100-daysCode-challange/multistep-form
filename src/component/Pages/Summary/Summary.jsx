import React from "react";
import "./summary.css";

function Summary({ onGoBack, onNextStep, handleChangePlan }) {
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  const handleConfirm = () => {
    // Assuming you want to advance to step 5 after confirming
    if (onNextStep) {
      onNextStep(5); // Pass the step number where ThankYouPage should be displayed
    }
  };

  const handleChange = () => {
    if (handleChangePlan) {
      handleChangePlan();
    }
  };


  return (
    <div className="steps_container">
      <div className="stepSummary" id="stepSummary">
        <div className="summary_title">
          <h1>Finishing up</h1>
          <p className="descrition">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="summary">
          <div className="container_summary">
            <div id="month_summary">
              <div className="summary_flex">
                <div>
                  <h4 id="summary_mode">Choose a plan</h4>
                  <button onClick={handleChange}>Change</button>
                </div>
                <label htmlFor="" id="summary_price">
                  150$/yr
                </label>
              </div>
              <br />
              <span></span>
              <div className="summary_flex">
                <p>Online service</p>
                <label htmlFor="" id="onlinePrice">
                  +0$
                </label>
              </div>
              <div className="summary_flex">
                <p>Larger storage</p>
                <label htmlFor="" id="storagePrice">
                  +0$
                </label>
              </div>
              <div className="summary_flex">
                <p>Customizable profile</p>
                <label htmlFor="" id="customizablePrice">
                  +0$
                </label>
              </div>
            </div>
          </div>

          <div className="flexTotal">
            <p id="modeTotal">Total</p>
            <span id="totalPrice"></span>
            <span className="dollar">170$</span>
          </div>
          <div className="buttonContainerStepFour">
            <button className="goBack" onClick={handleGoBack}>
              Go back
            </button>
            <button className="next_step" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
