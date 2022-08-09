import React from "react";
import { ProjectFooter, ProjectHeader, ProjectSection } from "../../components";
import projectData from "../../data/quoraNotifsData.json";

import classes from "./project.module.css";

const projectId = 2;
const nextProjectId = 3;

export const QuoraNotificationsPage = () => {
  return (
    <div>
      <ProjectHeader projectId={projectId} />

      {projectData.map((item, index) => (
        <ProjectSection section={item} key={item.title + index} />
      ))}

      <ProjectFooter projectId={nextProjectId} />
    </div>
  );
};

export default QuoraNotificationsPage;
