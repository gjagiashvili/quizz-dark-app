import React, { useState } from "react";
import styles from "../modules/EarlyAccess.module.scss";

function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);

  const handleGetStarted = () => {
    const emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailChecker.test(email);

    if (isValid) {
      setValidEmail(true);
      setEmail("");
    } else {
      setValidEmail(false);
    }
  };

  const handleEmailChange = (e) => {
    setValidEmail(true);
    setEmail(e.target.value);
  };

  return (
    <div className={styles.earlyAccess}>
      <h2>Get early access today</h2>
      <h5 className={styles.paragraph}>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </h5>
      <input
        type="email"
        placeholder="email@`example`.com"
        value={email}
        onChange={handleEmailChange}
      />
      <button className={styles.emailButton} onClick={handleGetStarted}>
        Get Started
      </button>
      {!isValidEmail && <p className={styles.error}>Wrong email format</p>}
    </div>
  );
}

export default EarlyAccess;
