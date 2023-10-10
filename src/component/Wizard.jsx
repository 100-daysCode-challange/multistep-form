import React, { useState } from "react";
import Info from "./Pages/Info/Info";
import Plan from "./Pages/Plan/Plan";
import Adds from "./Pages/Adds/Adds";
import Summary from "./Pages/Summary/Summary";
import Step from "./StepDispaly/Step"; // Import the Step component

function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    // Update the current step as needed
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="wizard_container">
      <Step currentStep={currentStep} />
      {currentStep === 1 ? <Info onNextStep={handleNextStep} /> : null}
      {currentStep === 2 ? <Plan onNextStep={handleNextStep} /> : null}
      {currentStep === 3 ? <Adds onNextStep={handleNextStep} /> : null}
      {currentStep === 4 ? <Summary onNextStep={handleNextStep} /> : null}
    </div>
  );
}

export default Wizard;
