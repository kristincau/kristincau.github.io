import React from "react";
import classes from "./footer.module.scss";
import { Contact } from "../";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <h2>
          leave a message. <b>*beep*</b>
        </h2>

        <div className={classes.content}>
          <p>
            I'm currently taking short-term projects. To work with me, send me
            an{" "}
            <a href="mailto:hello@kristinau.com" data-tip="hello@kristinau.com">
              email
            </a>
            .{" "}
          </p>
          <p>Otherwise, find me bopping around the world wide web:</p>
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default Footer;
