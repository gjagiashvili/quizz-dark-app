import React, { useState } from "react";
import styles from "../modules/Benefits.module.scss";
import Benefit from "./Benefit";
import Benefit1 from "../assets/images/icon-access-anywhere.svg";
import Benefit2 from "../assets/images/icon-security.svg";
import Benefit3 from "../assets/images/icon-collaboration.svg";
import Benefit4 from "../assets/images/icon-any-file.svg";

function Benefits() {
  return (
    <div className={styles.benefits}>
      <div className={styles.contanier}>
        <div className={styles.benefitsOver}>
          <Benefit
            img={Benefit1}
            mainText="Access your files, anywhere"
            underText="The ability to use a Smartphone, tablet, or Computer to acess your account means your files follow you everywhere"
          />
          <Benefit
            img={Benefit2}
            mainText="Security you can trust"
            underText="2 factor authentication and user controlled encryption are just a couple of the security benefits we allow to help secure your file"
          />
        </div>
        <div className={styles.benefitsUnder}>
          <Benefit
            img={Benefit3}
            mainText="Real time collaboration"
            underText="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required"
          />
          <Benefit
            img={Benefit4}
            mainText="Store any type of file"
            underText="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing all file types to be securely stored and shared"
          />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
