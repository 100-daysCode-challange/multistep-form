import React, { useState } from "react";
import Info from "./Pages/Info/Info";
import Plan from "./Pages/Plan/Plan";
import Step from "./StepDispaly/Step";

function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    // Update the current step as needed
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="wizard_container">
      <Step currentStep={currentStep} />
      {currentStep === 1 ? (
        <Info onNextStep={handleNextStep} />
      ) : currentStep === 2 ? (
        <Plan />
      ) : null}
    </div>
  );
}

export default Wizard;
