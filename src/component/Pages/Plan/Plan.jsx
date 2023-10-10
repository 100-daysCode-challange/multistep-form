import React, { useState } from "react";
import "./plan.css";
import { useHistory } from "react-router-dom";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";
import Adds from "../Adds/Adds";

function Plan() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [currentStep, setCurrentStep] = useState(2);

  const handleSwitchChange = () => {
    setIsMonthly(!isMonthly);
  };

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId);
  };

  const getPlanPrice = () => {
    if (isMonthly) {
      switch (selectedPlan) {
        case "arcade":
          return "$9/mo";
        case "advance":
          return "$12/mo";
        case "pro":
          return "$15/mo";
        default:
          return "";
      }
    } else {
      switch (selectedPlan) {
        case "arcade":
          return "$90/yr 2 months free";
        case "advance":
          return "$120/yr 2 months free";
        case "pro":
          return "$150/yr 2 months free";
        default:
          return "";
      }
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="steps_container">
      {currentStep === 2 && (
        <div className="planSelect_container" id="planSelect_container">
          <div className="plan_title">
            <h1>Select Your plan</h1>
            <p className="description">
              You have the option of monthly or yearly billing
            </p>
          </div>

          <div className="monthlyPlan" id="monthlyPlan">
            <button
              className={`btnPlan ${
                selectedPlan === "arcade" ? "selected" : ""
              }`}
              onClick={() => handlePlanClick("arcade")}
            >
              <img src={arcadeIcon} alt="svg icon arcade" />
              <p>Arcade</p>
              <span className="price">{isMonthly ? "$9/mo" : "$90/yr"}</span>
              {!isMonthly && <label className="free">2 months free</label>}
            </button>
            <button
              className={`btnPlan ${
                selectedPlan === "advance" ? "selected" : ""
              }`}
              onClick={() => handlePlanClick("advance")}
            >
              <img src={advancedIcon} alt="svg icon arcade" />
              <p>Advance</p>
              <span className="price">{isMonthly ? "$12/mo" : "$120/yr"}</span>
              {!isMonthly && <label className="free">2 months free</label>}
            </button>
            <button
              className={`btnPlan ${selectedPlan === "pro" ? "selected" : ""}`}
              onClick={() => handlePlanClick("pro")}
            >
              <img src={proIcon} alt="svg icon arcade" />
              <p>Pro</p>
              <span className="price">{isMonthly ? "$15/mo" : "$150/yr"}</span>
              {!isMonthly && <label className="free">2 months free</label>}
            </button>
          </div>

          {/* Toggle between month and year */}
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
            <button className="goBack">Go back</button>
            <button className="next_step" onClick={handleNextStep}>
              Next Step
            </button>
          </div>
        </div>
      )}
      {currentStep === 3 && <Adds />}
    </div>
  );
}

export default Plan;
