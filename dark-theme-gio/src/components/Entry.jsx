import React from "react";
import styles from "../modules/Entry.module.scss";

import Logo from "../assets/images/logo.svg";
import Intro from "../assets/images/illustration-intro.png";
function Entry() {
  return (
    <>
      <nav>
        <a
          href="./"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img src={Logo} alt="logo" className={styles.logoImg} />
        </a>
        <div className="links">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            benefits
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Team
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign In
          </a>
        </div>
      </nav>

      <div className={styles.introContainer}>
        <img src={Intro} alt={styles.illustrationIntro} />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all you most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className={styles.emailButton}>Get Started</button>
      </div>
    </>
  );
}
export default Entry;
