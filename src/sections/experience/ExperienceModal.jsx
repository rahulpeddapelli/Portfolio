import { useState } from "react";
import { HiX } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

import "./Experience.css";

const ExperienceModal = ({
  experience,
  onClose,
}) => {

  const [selectedImage, setSelectedImage] =
    useState(null);

  return (
    <>
      <div
        className="experience-modal-overlay"
        onClick={onClose}
      >
        <div
          className="experience-modal"
          onClick={(e) =>
            e.stopPropagation()
          }
        >

          <div className="modal-close-container">

            <button
              className="modal-close"
              onClick={onClose}
            >
              <HiX />
            </button>

          </div>

          <div className="modal-company-header">

            <img
              src={experience.logo}
              alt={experience.company}
            />

            <div>

              <h2>
                {experience.role}
              </h2>

              <a
                href={experience.website}
                target="_blank"
                rel="noreferrer"
                className="modal-company-link"
              >
                {experience.company}

                <FiExternalLink />
              </a>

              <span className="modal-duration">
                {experience.startDate}
                {" - "}
                {experience.endDate}
              </span>

            </div>

          </div>

          <div className="modal-section">

            <h3>
              Overview
            </h3>

            <p>
              {experience.shortDescription}
            </p>

          </div>

          <div className="modal-section">

            <h3>
              Responsibilities
            </h3>

            <ul className="responsibility-list">

              {experience.responsibilities.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )}

            </ul>

          </div>

          <div className="modal-section">

            <h3>
              Technologies Used
            </h3>

            <div className="tech-list">

              {experience.technologies.map(
                (tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                )
              )}

            </div>

          </div>

          {experience.gallery?.length > 0 && (

            <div className="modal-section">

              <h3>
                Gallery
              </h3>

              <div className="experience-gallery">

                {experience.gallery.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="gallery-card"
                      onClick={() =>
                        setSelectedImage(item)
                      }
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                      <span>
                        {item.title}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

        </div>
      </div>

      {selectedImage && (

        <div
          className="image-preview-overlay"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="image-preview"
          />

        </div>

      )}
    </>
  );
};

export default ExperienceModal;