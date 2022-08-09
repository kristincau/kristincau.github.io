import React, { useState } from "react";
import { Header, Footer, Login, Project } from "../../components";
import classes from "./home.module.scss";
import allProjectsData from "../../data/allProjects.json";

// export const HomePage = ({ token, setToken }) => {
export const HomePage = () => {
  return (
    <div>
      {/* {token ? <Header token={token} /> : <Header />} */}
      <Header />
      <div className={classes.container} id="work">
        <div className={classes.content}>
          {allProjectsData.map((project, index) => (
            <Project
              company={project.company}
              title={project.title}
              path={project.path}
              img={project.img}
              alt={project.alt}
              key={project.title + index}
            />
          ))}
          {/* {token ? (
            allProjectsData.map((project, index) => (
              <Project
                company={project.company}
                title={project.title}
                path={project.path}
                img={project.img}
                alt={project.alt}
                key={project.title + index}
              />
            ))
          ) : (
            <Login setToken={setToken} />
          )} */}
        </div>
      </div>
      )
      <Footer />
    </div>
  );
};

export default HomePage;
