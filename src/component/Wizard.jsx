import React, { useState } from "react";
import Info from "./Pages/Info/Info";
import Plan from "./Pages/Plan/Plan";
import Adds from "./Pages/Adds/Adds";
import Summary from "./Pages/Summary/Summary";

function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="wizard_container">
      {currentStep === 1 ? (
        <Info onNextStep={handleNextStep} />
      ) : currentStep === 2 ? (
        <Plan onNextStep={handleNextStep} />
      ) : currentStep === 3 ? (
        <Adds onNextStep={handleNextStep} />
      ) : currentStep === 4 ? (
        <Summary onNextStep={handleNextStep} />
      ) : null}
    </div>
  );
}

export default Wizard;
