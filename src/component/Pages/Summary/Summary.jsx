import React from "react";
import "./summary.css";

function Summary() {
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
                  <button>Change</button>
                </div>
                <label for="" id="summary_price">
                  150$/yr
                </label>
              </div>
              <br />
              <span></span>
              <div className="summary_flex">
                <p>Online service</p>
                <label for="" id="onlinePrice">
                  +0$
                </label>
              </div>
              <div className="summary_flex">
                <p>Larger storage</p>
                <label for="" id="storagePrice">
                  +0$
                </label>
              </div>
              <div className="summary_flex">
                <p>Customizable profile</p>
                <label for="" id="customizablePrice">
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
            <button className="goBack">Go back</button>
            <button className="next_step">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
