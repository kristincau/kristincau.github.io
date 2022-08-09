import React from "react";
import { ProjectFooter, ProjectHeader, ProjectSection } from "../../components";
import projectData from "../../data/venuenextCanopyData.json";

import classes from "./project.module.css";

const projectId = 3;
const nextProjectId = 4;

export const VenuenextCanopyPage = () => {
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

export default VenuenextCanopyPage;
