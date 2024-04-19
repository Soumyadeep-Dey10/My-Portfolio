import React from 'react';
import gmail from "../assets/Mail.png";
import Linkedin from "../assets/Linkedin.png";
import github from "../assets/Github.png";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact </h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.contactBtn}>
        <li className={styles.link}>
          <a href="mailto:deepsoumya442@gmail.com">
            <img src={gmail} alt="Gmail" />
            My Gmail account
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/soumyadeepdey18">
            <img src={Linkedin} alt="LinkedIn" />
            My Linkedin profile
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Soumyadeep-Dey10">
            <img src={github} alt="GitHub" />
            My Github profile
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
