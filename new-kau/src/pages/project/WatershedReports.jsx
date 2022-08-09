import React from "react";
import { ProjectFooter, ProjectHeader, ProjectSection } from "../../components";
import projectData from "../../data/watershedReportsData.json";

import classes from "./project.module.css";

const projectId = 0;
const nextProjectId = 1;

export const WatershedReportsPage = () => {
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

export default WatershedReportsPage;
