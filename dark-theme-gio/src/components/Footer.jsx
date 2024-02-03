import React from "react";
import styles from "../modules/Footer.module.scss";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="logo" />
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <div className={styles.footerFlex}>
              <i className={styles.bodyText}></i>
              <p>
                Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit,
                sed<br></br> do eiusmod tempor incididunt ut <br></br>labore et
                dolore magna aliqua
              </p>
            </div>
          </div>
          <div className={styles.footer2}>
            <div className={styles.footerFlex}>
              <i class="fa fa-phone fa-lg"></i>
              <p>+1-543-123-4567</p>
            </div>
            <div className={styles.footerFlex}>
              <i class="fa fa-envelope fa-lg"></i>
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className={styles.footer3}>
            <a href="/">About Us</a>
            <a href="/">Jobs</a>
            <a href="/">Press</a>
            <a href="/">Blog</a>
          </div>
          <div className={styles.footer3}>
            <a href="/">Contact Us</a>
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
          </div>
          <div className={styles.footer5}>
            <div className={styles.footerFlex}>
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
