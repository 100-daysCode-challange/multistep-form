import React, { useState } from "react";
import "./add.css";
import Addon from "./Addon"; // Import the new Addon component

function Adds({ onNextStep, onGoBack }) {
  const [selectedAddOns, setSelectedAddOns] = useState([]); // Track selected add-ons

  // Define your add-ons data here
  const addOns = [
    {
      id: 1,
      label: "Online services",
      description: "Access to multiple games",
      price: 1,
    },
    {
      id: 2,
      label: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      label: "Customizable profile",
      description: "Custom theme on your profile",
      price: 2,
    },
    // Add more add-ons as needed
  ];

  const handleAddOnClick = (id) => {
    const selectedAddOn = addOns.find((addon) => addon.id === id);

    if (selectedAddOn) {
      console.log("Selected Add-On:");
      console.log("Name:", selectedAddOn.label);
      console.log("Price:", selectedAddOn.price);
      console.log("Description:", selectedAddOn.description);
    }

    const updatedAddOns = selectedAddOns.includes(id)
      ? selectedAddOns.filter((selected) => selected !== id)
      : [...selectedAddOns, id];
    setSelectedAddOns(updatedAddOns);
  };


  const handleNextStep = () => {
    if (selectedAddOns.length > 0) {
      const selectedAddOnObjects = addOns.filter((addon) =>
        selectedAddOns.includes(addon.id)
      );
      onNextStep(selectedAddOnObjects); // Pass the selected add-ons to the parent component
    }
  };

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  // Function to check if the "Next Step" button should be disabled
  const isNextStepDisabled = selectedAddOns.length === 0;

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
            <Addon
              key={addOn.id}
              addOn={addOn}
              isSelected={selectedAddOns.includes(addOn.id)}
              onToggle={handleAddOnClick}
            />
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
