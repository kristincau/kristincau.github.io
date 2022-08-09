import React from "react";
import { Link } from "react-router-dom";
import classes from "./project.module.scss";

export const Project = ({ company, title, path, img, alt, index }) => {
  return (
    <div className={classes.container}>
      <Link to={path}>
        <div className={classes.project}>
          <div className={classes.content}>
            <p className={classes.caption}>{company}</p>
            <h3>{title}</h3>
            <div className={classes.readMore}>
              <p className={classes.caption}>Read more →</p>
            </div>
          </div>

          <div className={classes.image}>
            <img src={require("../../assets" + img)} alt={alt} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
