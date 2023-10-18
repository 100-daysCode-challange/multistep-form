import React from "react";
import "./summary.css";

function Summary({
  onGoBack,
  onNextStep,
  handleChangePlan,
  selectedPlan,
  selectedAddOns,
}) {
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  const handleConfirm = () => {
    if (onNextStep) {
      onNextStep(5); // Pass the step number where ThankYouPage should be displayed
    }
  };

  const handleChange = () => {
    if (handleChangePlan) {
      handleChangePlan();
    }
  };

  // Calculate the total price, including the plan and selected add-ons
  const calculateTotalPrice = () => {
    const planPrice = selectedPlan.price;
    const addOnPrices = selectedAddOns.map((addOn) => addOn.price);
    const total = addOnPrices.reduce((acc, price) => acc + price, planPrice);
    return total;
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
                  <h4 id="summary_mode">{selectedPlan.label}</h4>
                  <button onClick={handleChange}>Change</button>
                </div>
                <label htmlFor="" id="summary_price">
                  {selectedPlan.price}
                </label>
              </div>
              <br />
              {selectedAddOns.map((addOn) => (
                <div className="summary_flex" key={addOn.id}>
                  <p>{addOn.addSize}</p>
                  <label htmlFor="" id={`${addOn.addSize}Price`}>
                    +{addOn.price}$
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flexTotal">
            <p id="modeTotal">Total</p>
            <span id="totalPrice">{calculateTotalPrice()}$</span>
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
