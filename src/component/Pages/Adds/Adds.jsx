import React, { useState } from "react";
import "./add.css";

function Adds({ onNextStep, onGoBack }) {
  const [selectedAddOns, setSelectedAddOns] = useState([]); // Track selected add-ons

  const handleAddOnClick = (addOn) => {
    if (selectedAddOns.some((selected) => selected.id === addOn.id)) {
      // If the add-on is already selected, unselect it
      setSelectedAddOns(
        selectedAddOns.filter((selected) => selected.id !== addOn.id)
      );
    } else {
      // If the add-on is not selected, select it
      setSelectedAddOns([...selectedAddOns, addOn]);
      console.log("Selected Add-On:", addOn); // Log the selected add-on
    }
  };

  console.log("Selected Add-Ons:", selectedAddOns);


  const handleNextStep = () => {
    if (selectedAddOns.length > 0) {
      onNextStep(selectedAddOns); // Pass the selected add-ons to the parent component
    }
  };

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  // Function to check if the "Next Step" button should be disabled
  const isNextStepDisabled = selectedAddOns.length === 0;

  // Define your add-ons data here
  const addOns = [
    {
      id: 1,
      label: "Online services",
      description: "Access to multiple games",
      price: "1",
    },
    {
      id: 2,
      label: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "2",
    },
    {
      id: 3,
      label: "Customizable profile",
      description: "Custom theme on your profile",
      price: "2",
    },
    // Add more add-ons as needed
  ];

  return (
    <div className="steps_container">
      <div className="addOnStep_container">
        <div className="addOn_title">
          <h1>Pick Add-ons</h1>
          <p className="description">
            Add-ons help enhance your gaming experience.
          </p>
        </div>

        <div className="addOn_month">
          {addOns.map((addOn) => (
            <div className="addOnn_btn" key={addOn.id}>
              <div className="group">
                <input
                  type="checkbox"
                  name="addOnn"
                  id={`addOn_cont_${addOn.id}`}
                  value={addOn.id}
                  onClick={() => handleAddOnClick(addOn.id)} // Toggle add-on selection
                />
                <div className="addOn">
                  <p className="addSize">{addOn.label}</p>
                  <span>{addOn.description}</span>
                </div>
              </div>
              <p className="price">$ {addOn.price}</p>
            </div>
          ))}
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
    </div>
  );
}

export default Adds;
