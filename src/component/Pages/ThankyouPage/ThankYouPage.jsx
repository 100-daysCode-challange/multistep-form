import React from 'react'
import "./index.css";
import thankYouIcon from "../../../assets/images/icon-thank-you.svg"

function ThankYouPage() {
  return (
    <div className="steps_container">
      <div className="stepThankYou" id="stepThankYou">
        <img src={thankYouIcon} alt="" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage