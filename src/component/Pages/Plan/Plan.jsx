import React, { useState } from "react";
import "./plan.css";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

function Plan({ onNextStep, onGoBack }) {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isNextStepDisabled, setIsNextStepDisabled] = useState(true);

  const handleSwitchChange = () => {
    setIsMonthly(!isMonthly);
  };

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId);
    setIsNextStepDisabled(false);
  };

  const getPrice = (price) => {
    if (isMonthly) {
      return `$${price}/mo`;
    } else {
      const yearlyPrice = price * 10;
      return `$${yearlyPrice}`;
    }
  };

  const handleNextStep = () => {
    if (!isNextStepDisabled) {
      const selectedPlanObject = getSelectedPlanObject(selectedPlan);
      onNextStep(selectedPlanObject);
      
      console.log(selectedPlanObject);
    }
  };

  

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  const getSelectedPlanObject = (planId) => {
    if (planId === "arcade") {
      return {
        label: "Arcade",
        price: getPrice(9),
      };
    } else if (planId === "advance") {
      return {
        label: "Advance",
        price: getPrice(12),
      };
    } else if (planId === "pro") {
      return {
        label: "Pro",
        price: getPrice(15),
      };
    }
    return {}; // Return an empty object as a default
  };

  return (
    <div className="steps_container">
      <div className="planSelect_container" id="planSelect_container">
        <div className="plan_title">
          <h1>Select Your plan</h1>
          <p className="description">
            You have the option of monthly or yearly billing
          </p>
        </div>

        <div className="monthlyPlan" id="monthlyPlan">
          {[
            { plan: "arcade", icon: arcadeIcon, label: "Arcade" },
            { plan: "advance", icon: advancedIcon, label: "Advance" },
            { plan: "pro", icon: proIcon, label: "Pro" },
          ].map(({ plan, icon, label }) => (
            <button
              key={plan}
              className={`btnPlan ${selectedPlan === plan ? "selected" : ""}`}
              onClick={() => handlePlanClick(plan)}
            >
              <img src={icon} alt={`svg icon ${plan}`} />
              <span className="btnPlan_info">
                <div>
                  <p>{label}</p>
                  <span className="price">
                    {getPrice(
                      plan === "arcade" ? 9 : plan === "advance" ? 12 : 15
                    )}
                  </span>
                </div>
                {!isMonthly && <label className="free">2 months free</label>}
              </span>
            </button>
          ))}
        </div>

        <div className="toggle" id="toggle">
          <p className="monthly">Yearly</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isMonthly}
              onChange={handleSwitchChange}
            />
            <span className="slider round"></span>
          </label>
          <p className="yearly">Monthly</p>
        </div>

        <div className="btn_container_step_two">
          <button className="goBack" onClick={handleGoBack}>
            Go back
          </button>
          <button
            className={`next_step ${isNextStepDisabled ? "disabled" : ""}`}
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

export default Plan;
