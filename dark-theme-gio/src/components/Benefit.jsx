import React from "react";
import styles from "../modules/Benefit.module.scss";

// One
function Benefit({ img, mainText, underText }) {
  return (
    <>
      <div className={styles.benefit}>
        <img src={img} />
        <h2>{mainText}</h2>
        <p>{underText}</p>
      </div>
    </>
  );
}
export default Benefit;
