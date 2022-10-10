import React from "react";
import thankYouIcon from "../../images//illustration-thank-you.svg";
import styles from "./ThankYou.module.css";

const ThankYou = (props) => {
  return (
    <div className={styles.ty}>
      <img src={thankYouIcon} alt="thankYou" />
      <section>{`You selected ${props.value} out of 5`}</section>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
