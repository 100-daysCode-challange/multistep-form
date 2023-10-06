import React from 'react';
import "./info.css";

function Info() {
  return (
    <div className="steps_container">
      <div className="info_step">
        <h1>Personal Info</h1>
        <p className="description">
          please provide your name, email address, and phone number.
        </p>

        <div className="error_message">
          <p>Name</p>
          <span id="error_name"></span>
        </div>

        <input
          type="text"
          name=""
          id="infoName"
          placeholder="e.g. willson Mark"
        />
        <div className="error_message">
          <p>Email Address</p>
          <span id="error_email"></span>
        </div>

        <input
          type="text"
          name=""
          id="infoEmail"
          placeholder="e.g. willsonMark@gmail.com"
        />
        <div className="error_message">
          <p>Phone Number</p>
          <span id="error_num"></span>
        </div>

        <input
          type="text"
          name=""
          id="infoNumber"
          placeholder="e.g. +47 234 567 78"
        />

        <div className="btn_container_step_one">
          <button>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default Info