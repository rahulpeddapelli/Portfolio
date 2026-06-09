
import { HiX } from "react-icons/hi";

const ProjectModal = ({
  project,
  onClose,
}) => {


  return (
    <>
      <div
        className="project-modal-overlay"
        onClick={onClose}
      >
        <div
          className="project-modal"
          onClick={(e) =>
            e.stopPropagation()
          }
        >

          <div style={{ display: "flex", justifyContent: "end", alignItems: "center", marginBottom: "10px" }}>
            <button
              className="modal-close"
              onClick={onClose}
            >
              <HiX />
            </button>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="modal-cover"
          />

          <span
            className={`modal-badge ${project.type === "Client"
                ? "client-badge"
                : "personal-badge"
              }`}
          >
            {project.type}
          </span>

          <h2>
            {project.title}
          </h2>

          <p>
            {project.description}
          </p>

          <h3>
            Key Features
          </h3>

          <ul className="feature-list">

            {project.features.map(
              (feature) => (
                <li key={feature}>
                  {feature}
                </li>
              )
            )}

          </ul>

          <h3>
            Technologies
          </h3>

          <div className="tech-list">

            {project.technologies.map(
              (tech) => (
                <span key={tech}>
                  {tech}
                </span>
              )
            )}

          </div>


        </div>
      </div>

    </>
  );
};

export default ProjectModal;