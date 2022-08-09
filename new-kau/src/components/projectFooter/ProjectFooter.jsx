import React from "react";
import Contact from "../contact/Contact";
import Project from "../project/Project";
import allProjectData from "../../data/allProjects.json";
import classes from "./projectFooter.module.scss";

const ProjectFooter = ({ projectId }) => {
  const project = allProjectData[projectId];

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <h2 className={classes.title}>Before you go...</h2>
        <p>Here's another project to check out:</p>
        <div className={classes.project}>
          <Project
            company={project.company}
            title={project.title}
            path={project.path}
            img={project.img}
            alt={project.alt}
            index
          />
        </div>
        <p>Or, find me bopping around the internet:</p>
        <Contact />
      </div>
    </div>
  );
};

export default ProjectFooter;
