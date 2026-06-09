import {
  FaGithub,
} from "react-icons/fa";

import {
  FiExternalLink,
} from "react-icons/fi";

const ProjectCard = ({
  project,
  onOpen,
}) => {
  return (
    <div className="project-card">

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

        <span
          className={`project-badge ${
            project.type === "Client"
              ? "client-badge"
              : "personal-badge"
          }`}
        >
          {project.type}
        </span>

      </div>

      <div className="project-content">

        <h3>
          {project.title}
        </h3>

        <p>
          {project.shortDescription}
        </p>

        <div className="project-tech">

          {project.technologies
            .slice(0, 4)
            .map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}

        </div>

        <div className="project-footer">

          <div className="project-links">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
              >
                <FaGithub />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
              >
                <FiExternalLink />
              </a>
            )}

          </div>

          <button
            className="know-more-btn"
            onClick={() => onOpen(project)}>
            Know More →
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;