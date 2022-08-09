import React from "react";
import classes from "./contact.module.scss";
import ReactTooltip from "react-tooltip";
import { HiOutlineMail as IconMail } from "react-icons/hi";
import {
  BsLinkedin as LogoLinkedin,
  BsTwitter as LogoTwitter,
  BsInstagram as LogoInstagram,
  BsDribbble as LogoDribbble,
} from "react-icons/bs";
import { BiHappyHeartEyes as LogoAdplist } from "react-icons/bi";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <ReactTooltip effect="solid" className={classes.tooltip} padding={8} />
      <a href="mailto:hello@kristinau.com" target="_blank">
        <IconMail className={classes.icon} data-tip="hello@kristinau.com" />
      </a>
      <a href="https://www.adplist.org/mentors/kristin-au" target="_blank">
        {/* <img src={LogoAdplist} alt="ADPList logo" className={classes.icon} /> */}
        <LogoAdplist className={classes.icon} data-tip="ADPList" />
      </a>
      <a href="https://www.linkedin.com/in/kristin-au-690a4765" target="_blank">
        <LogoLinkedin className={classes.logoIcon} data-tip="LinkedIn" />
      </a>
      <a href="https://dribbble.com/auaukau" target="_blank">
        <LogoDribbble className={classes.logoIcon} data-tip="Dribbble" />
      </a>
      <a href="https://twitter.com/auaukau" target="_blank">
        <LogoTwitter className={classes.logoIcon} data-tip="Twitter" />
      </a>
      <a href="https://www.instagram.com/meowmeowkau/?hl=en" target="_blank">
        <LogoInstagram className={classes.logoIcon} data-tip="Instagram" />
      </a>
    </div>
  );
};

export default Contact;
