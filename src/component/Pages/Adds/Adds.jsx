import React, { useState } from "react";
import "./add.css";

function Adds({ onNextStep, onGoBack}) {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleNextStep = () => {
      onNextStep();
  };


  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  const isAddOnSelected = (id) => selectedAddOns.includes(id);

  const toggleAddOn = (id) => {
    if (isAddOnSelected(id)) {
      setSelectedAddOns(selectedAddOns.filter((selected) => selected !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const isNextStepDisabled = selectedAddOns.length === 0;

  return (
    <div className="steps_container">
      <div className="addOn_title">
        <h1>Pick Add-ons</h1>
        <p className="description">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="addOn_month">
        {/* Checkbox 1 */}
        <div className="addOnn_btn">
          <div className="group">
            <input
              type="checkbox"
              name=""
              id=""
              checked={isAddOnSelected(1)}
              onChange={() => toggleAddOn(1)}
            />
            <div className="addOn">
              <p className="addSize">Online services</p>
              <span>Access to multiple games</span>
            </div>
          </div>
          <p className="price">+$1</p>
        </div>

        {/* Checkbox 2 */}
        <div className="addOnn_btn">
          <div className="addOn_month">
            <div className="group">
              <input
                type="checkbox"
                name={`addOnn-2`}
                id={`addOn_cont-2`}
                checked={isAddOnSelected(2)}
                onChange={() => toggleAddOn(2)}
              />
              <div className="addOn">
                <p className="addSize">Larger storage</p>
                <span>Extra 1TB of cloud save</span>
              </div>
            </div>
          </div>
          <p className="price">+$2</p>
        </div>
        {/* Checkbox 3 */}
        <div className="addOnn_btn">
          <div className="addOn_month">
            <div className="group">
              <input
                type="checkbox"
                name={`addOnn-3`}
                id={`addOn_cont-3`}
                checked={isAddOnSelected(3)}
                onChange={() => toggleAddOn(3)}
              />
              <div className="addOn">
                <p className="addSize">Customizable profile</p>
                <span>Custom theme on your profile</span>
              </div>
            </div>
          </div>
          <p className="price">+$2</p>
        </div>
      </div>

      <div className="addOn_btn_container">
        <button className="goBack" onClick={handleGoBack}>
          Go back
        </button>
        <button
          className="next_step"
          onClick={handleNextStep}
          disabled={isNextStepDisabled}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Adds;
