import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../components";
import classes from "./error.module.scss";

export const ErrorPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>
          you've reached the voicemail box of <b>4-0-4</b>...
        </h1>
        <p>
          this page either doesn't exist or you've wandered into a protected
          area
        </p>
        <p>
          <Link to="/">Return home</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
