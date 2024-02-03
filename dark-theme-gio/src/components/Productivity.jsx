import React from "react";
import styles from "../modules/Productivity.module.scss";
import Img1 from "../assets/images/illustration-stay-productive.png";
import Img2 from "../assets/images/icon-arrow.svg";
function Productivity() {
  return (
    <div className={styles.container}>
      <div className={styles.productivity}>
        <div className={styles.productivity1}>
          <img src={Img1} alt="illustration-stay-productive" />
        </div>
        <div className={styles.productivity2}>
          <h1>Stay productive, wherever you are</h1>
          <div className={styles.paragraphs}>
            <p>
              Never let location be an issue when accessing your files. Fylo you
              covered for all of your life storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className={styles.see}>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See how Fylo works <img src={Img2} alt="icon-arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productivity;
