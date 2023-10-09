import React from "react";
import "./plan.css";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

function Plan() {
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
          <button className="btnPlan" id="arcade">
            <img src={arcadeIcon} alt="svg icon arcade" />
            <p>Arcade</p>
            <span className="monthlyPrice" id="monthlyPrice">
              $9/mo
            </span>
          </button>
          <button className="btnPlan" id="advance">
            <img src={advancedIcon} alt="svg icon arcade" />
            <p>Advance</p>
            <span className="monthlyPrice" id="monthlyPrice">
              $12/mo
            </span>
          </button>
          <button className="btnPlan" id="pro">
            <img src={proIcon} alt="svg icon arcade" />
            <p>Pro</p>
            <span className="monthlyPrice" id="monthlyPrice">
              $15/mo
            </span>
          </button>
        </div>

        <div className="monthlyPlan" id="year_Plan">
          <button className="btnPlan" id="arcade">
            <img src={arcadeIcon} alt="" />
            <p>Arcade</p>
            <span className="yearlyPrice"> $90/yr</span>
            <label className="free">2 montsh free</label>
          </button>

          <button className="btnPlan" id="advance">
            <img src={advancedIcon} alt="" />
            <p>Advanced</p>
            <span className="yearlyPrice"> $120/yr</span>
            <label className="free">2 montsh free</label>
          </button>

          <button className="btnPlan" id="pro">
            <img src={proIcon} alt="" />
            <p>pro</p>
            <span className="yearlyPrice"> $150/yr</span>
            <label className="free">2 montsh free</label>
          </button>
        </div>

        <div className="switch">
          <p className="monthly">Monthly</p>
          <div className="check">
            <input type="checkbox" id="switch" />
            <span></span>
          </div>
          <p className="yearly">Yearly</p>
        </div>
        <div className="btn_container_step_two">
          <button className="goBack">Go back</button>
          <button className="next_step">Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
