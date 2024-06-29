import React from "react";
import styles from "./Loader.module.css";

const JellyTriangle = () => {
  return (
    <>
    <div className={styles.wrap}>
      <div className={styles["jelly-triangle"]}>
        <div className={styles["jelly-triangle__dot"]}></div>
        <div className={styles["jelly-triangle__traveler"]}></div>
      </div>
      <svg width="0" height="0" className={styles["jelly-maker"]}>
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7.3" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="ooze"></feColorMatrix>
            <feBlend in="SourceGraphic" in2="ooze"></feBlend>
          </filter>
        </defs>
      </svg>
      </div>
    </>
  );
};

export default JellyTriangle;
