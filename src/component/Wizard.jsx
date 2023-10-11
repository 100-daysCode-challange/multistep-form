import React, { useState } from "react";
import Info from "./Pages/Info/Info";
import Plan from "./Pages/Plan/Plan";
import Adds from "./Pages/Adds/Adds";
import Summary from "./Pages/Summary/Summary";
import Step from "./StepDispaly/Step";

function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    // Update the current step as needed
    setCurrentStep(currentStep + 1);
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="wizard_container">
      <Step currentStep={currentStep} />
      {currentStep === 1 ? <Info onNextStep={handleNextStep} /> : null}
      {currentStep === 2 ? (
        <Plan onNextStep={handleNextStep} onGoBack={handleGoBack} />
      ) : null}
      {currentStep === 3 ? (
        <Adds onNextStep={handleNextStep} onGoBack={handleGoBack} />
      ) : null}
      {currentStep === 4 ? (
        <Summary onNextStep={handleNextStep} onGoBack={handleGoBack} />
      ) : null}
    </div>
  );
}

export default Wizard;
