import React, { useState } from "react";
import classes from "./header.module.scss";

const Header = ({ token }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header} id="home">
        <div className={classes.content}>
          <h1>
            <b>hi.</b> you’ve reached kristin
          </h1>

          <p>
            I’m a product designer that turns complex systems into refreshing,
            relatable experiences that bring in the business.
          </p>

          <p>
            I’ve designed products for companies like{" "}
            {/* <a href="https://www.watershed.com/">Watershed</a>,{" "} */}
            <a href="https://www.slack.com/">Slack</a>,{" "}
            <a href="https://www.quora.com/">Quora</a>, and{" "}
            <a href="https://www.disney.co.jp/">The Walt Disney Co.</a>
          </p>
          {token ? (
            <p>Check out some of my work ↓</p>
          ) : (
            <p>Contact me for the password to see my work</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
