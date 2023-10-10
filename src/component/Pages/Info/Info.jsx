import React, { useState } from "react";
import "./info.css";
import { useFormik } from "formik";
import { userSchema } from "../../Validations/FormValidation";
import Plan from "../Plan/Plan";

function Info() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1)

  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: userSchema,
    onSubmit: () => {
      setSubmitted(true);
      setCurrentStep(2)
    },
  });
  console.log(errors);

  //   rendering the Plan component if submitted.
  if (submitted) {
    return <Plan />;
  }

  return (
    <div className="steps_container">
      <div className="info_step">
        <h1>Personal Info</h1>
        <p className="description">
          please provide your name, email address, and phone number.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <div className="error_message">
              <p>Name</p>
              <span id="error_name">{errors.name}</span>
            </div>

            <input
              value={values.name}
              type="text"
              name="name"
              id="infoName"
              placeholder="e.g. willson Mark"
              className={errors.name ? "input_error" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input_group">
            <div className="error_message">
              <p>Email Address</p>
              <span id="error_email">{errors.email}</span>
            </div>

            <input
              value={values.email}
              type="text"
              name="email"
              id="infoEmail"
              placeholder="e.g. willsonMark@gmail.com"
              className={errors.email ? "input_error" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input_group">
            <div className="error_message">
              <p>Phone Number</p>
              <span id="error_num">{errors.phoneNumber}</span>
            </div>

            <input
              value={values.phoneNumber}
              type="tel"
              name="phoneNumber"
              id="infoNumber"
              placeholder="e.g. +47 234 567 78"
              className={errors.phoneNumber ? "input_error" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="btn_container_step_one">
            <button type="submit">Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Info;
