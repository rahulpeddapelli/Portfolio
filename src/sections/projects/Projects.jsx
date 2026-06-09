import { useState,useEffect } from "react";

import "./Projects.css";

import {
  projects,
} from "../../data/projectsData";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {

  const [selectedProject,
    setSelectedProject] =
    useState(null);

  useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);



  return (
    <>
      <section
        id="projects"
        className="projects"
      >

        <div className="container">

          <span className="section-tag">
            PROJECTS
          </span>

          <div className="section-title">

            <h2 className="section-title">
              Some Things I've Built
            </h2>

          </div>

          <div className="projects-grid">

            {projects.map(
              (project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={
                    setSelectedProject
                  }
                />
              )
            )}

          </div>

        </div>

      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </>
  );
};

export default Projects;