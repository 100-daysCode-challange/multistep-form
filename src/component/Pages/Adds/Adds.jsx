import React from "react";
import "./add.css";

function Adds() {
  return (
    <>
      <div className="steps_container">
        <div className="addOnStep_container">
          <div className="addOn_title">
            <h1>Pick Add-ons</h1>
            <p className="description">
              Add-ons help enhance you gaming experience.
            </p>
          </div>

          <div className="addOn_month">
            <div className="addOnn_btn">
              <div className="group">
                <input
                  type="checkbox"
                  name="addOnn"
                  id="online_cont"
                  value="1"
                />
                <div className="addOn">
                  <p className="addSize">Online services</p>
                  <span>Access to multiple games</span>
                </div>
              </div>
              <p className="price">$1/mo</p>
            </div>
            <div className="addOnn_btn">
              <div className="group">
                <input
                  type="checkbox"
                  name="addOnn"
                  id="storage_cont"
                  value="2"
                />
                <div className="addOn">
                  <p className="addSize">Larger storage</p>
                  <span>Extra 1TB of cloud save</span>
                </div>
              </div>
              <p className="price">$2/mo</p>
            </div>
            <div className="addOnn_btn">
              <div className="group">
                <input
                  type="checkbox"
                  name="addOnn"
                  id="custom_cont"
                  value="3"
                />
                <div className="addOn">
                  <p className="addSize">Customizable profile</p>
                  <span>Custom theme on your profile</span>
                </div>
              </div>
              <p className="price">$2/mo</p>
            </div>
          </div>
          <div className="addOn_year">
            <div className="addOnn_btn">
              <div className="group">
                <input
                  type="checkbox"
                  name="addOnn"
                  id="online_cont"
                  value="1"
                />
                <div className="addOn">
                  <p className="addSize">Online services</p>
                  <span>Access to multiple games</span>
                </div>
              </div>
              <p className="price">$10/mo</p>
            </div>
            <div className="addOnn_btn">
              <div className="group">
                <input
                  type="checkbox"
                  name="addOnn"
                  id="storage_cont"
                  value="2"
                />
                <div className="addOn">
                  <p className="addSize">Larger storage</p>
                  <span>Extra 1TB of cloud save</span>
                </div>
              </div>
              <p className="price">$20/mo</p>
            </div>
            <div className="addOnn_btn">
              <div className="group">
                <input
                  type="checkbox"
                  name="addOnn"
                  id="custom_cont"
                  value="3"
                />
                <div className="addOn">
                  <p className="addSize">Customizable profile</p>
                  <span>Custom theme on your profile</span>
                </div>
              </div>
              <p className="price">20/mo</p>
            </div>
          </div>
          <div className="addOn_btn_container">
            <button className="goBack">Go back</button>
            <button className="next_step">Next Step</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adds;
