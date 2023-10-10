import React, { useState } from "react";
import Info from "./Info";
import Plan from "./Plan";

function Wizard() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Step currentStep={activeStep} />
      {activeStep === 1 ? (
        <Info onNextStep={handleNextStep} />
      ) : activeStep === 2 ? (
        <Plan />
      ) : null}
    </div>
  );
}

export default Wizard;
