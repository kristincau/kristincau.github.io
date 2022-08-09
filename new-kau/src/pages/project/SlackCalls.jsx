import React from "react";
import { ProjectFooter, ProjectHeader, ProjectSection } from "../../components";
import projectData from "../../data/slackCallsData.json";

const projectId = 1;
const nextProjectId = 2;

export const SlackCallsPage = () => {
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

export default SlackCallsPage;
