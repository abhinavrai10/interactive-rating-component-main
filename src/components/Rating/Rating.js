import React from "react";
import RatingButton from "../Rating Button/RatingButton";
import styles from "./Rating.module.css";

const Rating = (props) => {
  const ratingArr = [1, 2, 3, 4, 5];

  return (
    <div className={styles.ratingBtn}>
      {ratingArr.map((val) => (
        <RatingButton
          onSelection={props.onSelection}
          value={val}
          key={Math.random()}
          rating={props.onActive}
        />
      ))}
    </div>
  );
};
export default Rating;
