import React from "react";
import styles from "../modules/Testimonials.module.scss";
import Testimonial from "./Testimonial";

import profilePicture1 from "../assets/images/profile-1.jpg";
import profilePicture2 from "../assets/images/profile-2.jpg";
import profilePicture3 from "../assets/images/profile-3.jpg";

function Testimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.testimonial}>
        <Testimonial
          review="Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine."
          profilePicture={profilePicture1}
          auth="Satish Patel"
          job="Founder & CEO, Huddle"
        />
        <Testimonial
          review="Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine."
          profilePicture={profilePicture2}
          auth="Bruce Mckenzie"
          job="Founder & CEO, Huddle"
        />
        <Testimonial
          review="Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine."
          profilePicture={profilePicture3}
          auth="Iva Boyed"
          job="Founder & CEO, Huddle"
        />
      </div>
    </div>
  );
}
export default Testimonials;
