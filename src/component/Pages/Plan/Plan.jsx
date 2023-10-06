import React from "react";
import arcadeIcon from "../../../assets/images/icon-arcade.svg"
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

function Plan() {
  return (
    <div className="steps_container">
      <div className="planSelect_container" id="planSelect_container">
        <h1>Select Your plan</h1>
        <p className="description">
          You have the option of monthly or yearly billing
        </p>

        <div className="monthlyPlan" id="monthlyPlan">
          <button className="btnPlan" id="arcade">
            <img src={arcadeIcon} alt="svg icon arcade" />
            <p>Arcade</p>
            <span className="monthlyPrice" id="monthlyPrice">
              $9/mo
            </span>
          </button>
          <button className="btnPlan" id="arcade">
            <img src={advancedIcon} alt="svg icon arcade" />
            <p>Advance</p>
            <span className="monthlyPrice" id="monthlyPrice">
              $12/mo
            </span>
          </button>
          <button className="btnPlan" id="arcade">
            <img src={proIcon} alt="svg icon arcade" />
            <p>Pro</p>
            <span className="monthlyPrice" id="monthlyPrice">
              $15/mo
            </span>
          </button>
        </div>

        {/* <div className="monthlyPlan">
          <button className="btnPlan" id="">
            <img src="/assets/images/icon-arcade.svg" alt="" />

            <p>Arcade</p>
            <span className="yearlyPrice"> $90/yr</span>
            <label className="free">2 montsh free</label>
          </button>

          <button className="btnPlan" id="">
            <img src="/assets/images/icon-arcade.svg" alt="" />

            <p>Advanced</p>
            <span className="yearlyPrice"> $120/yr</span>
            <label className="free">2 montsh free</label>
          </button>

          <button className="btnPlan" id="">
            <img src="/assets/images/icon-pro.svg" alt="" />

            <p>pro</p>
            <span className="yearlyPrice"> $150/yr</span>
            <label className="free">2 montsh free</label>
          </button>
        </div> */}

        <div className="switch">
          <p className="monthly">Monthly</p>
          <lable className="check">
            <input
              type="checkbox"
              id="switch"
              onclick="reset()"
            />
            <span></span>
          </lable>
          <p className="yearly">Yearly</p>
        </div>
        <div className="btn_container_step_two">
          <button className="goBack">
            Go back
          </button>
          <button className="next_step">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
