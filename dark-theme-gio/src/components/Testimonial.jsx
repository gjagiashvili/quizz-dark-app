import React from "react";
import styles from "../modules/Testimonial.module.scss";

function Testimonial({ review, profilePicture, name, job }) {
  return (
    <div className={styles.testimonial}>
      <p>{review}</p>
      <div className={styles.container}>
        <img src={profilePicture} />
        <div className={styles.text}>
          <h5>{name}</h5>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
