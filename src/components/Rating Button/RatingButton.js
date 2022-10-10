import React from "react";
import styles from "./RatingButton.module.css";

const RatingButton = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.onSelection(e.target.value);
  };

  const classActive =
    +props.rating === +props.value ? styles.li__btn__active : styles.li__btn;

  return (
    <li className={styles.list}>
      <button
        className={classActive}
        onClick={clickHandler}
        value={props.value}
      >
        {props.value}
      </button>
    </li>
  );
};

export default RatingButton;
