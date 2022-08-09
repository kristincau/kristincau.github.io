import React from "react";
import classes from "./projectHeader.module.scss";
import allProjectData from "../../data/allProjects.json";

const ProjectHeader = ({ projectId }) => {
  const project = allProjectData[projectId];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.content}>
          <p className={classes.caption}>{project.company}</p>
          <h1>{project.title}</h1>
          <p className={classes.caption}>
            {project.duration} / {project.year} / {project.team}
          </p>
        </div>

        <div className={classes.imageContainer}>
          <img src={require("../../assets" + project.img)} alt={project.alt} />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
