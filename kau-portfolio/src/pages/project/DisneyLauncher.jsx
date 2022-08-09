import React from "react";
import { ProjectFooter, ProjectHeader, ProjectSection } from "../../components";
import projectData from "../../data/disneyLauncherData.json";

const projectId = 4;
const nextProjectId = 0;

export const DisneyLauncherPage = () => {
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

export default DisneyLauncherPage;
