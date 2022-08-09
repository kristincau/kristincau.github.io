import React from "react";
import classes from "./copyright.module.scss";

const Copyright = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.caption}>
          © 2014-2022 all rights reserved, built and crafted by kristin au.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
