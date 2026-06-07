import "./Experience.css";
import { useState, useEffect } from "react";
import ExperienceModal from "./ExperienceModal";
import { experiences } from "../../data/experienceData";
import { FiExternalLink } from "react-icons/fi";


const Experience = () => {

    // const experiences = [
    //     {
    //         id: 1,

    //         role: "Frontend Developer Intern",

    //         company: "XL Management Services",

    //         website: "https://xlmanagementservices.in/",

    //         logo: xlLogo,

    //         startDate: "03/26",

    //         endDate: "Present",

    //         shortDescription:
    //             "Worked on client websites and web applications, focusing on responsive UI development and performance optimization.",

    //         details: `
    //   Worked on multiple client projects and internal applications.

    //   Responsibilities included:
    //   - Responsive website development
    //   - React.js development
    //   - UI improvements
    //   - Website maintenance
    //   - SEO implementation
    //   - Performance optimization
    // `,

    //         technologies: [
    //             "React",
    //             "JavaScript",
    //             "HTML",
    //             "CSS",
    //             "Tailwind",
    //         ],

    //         images: [
    //             // optional
    //             // img1,
    //             // img2
    //         ],
    //     }
    // ];
    const [selectedExp, setSelectedExp] = useState(null);

    useEffect(() => {
        if (selectedExp) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedExp]);

    return (
        <>
            <section
                id="experience"
                className="experience"
            >
                <div className="container">

                    <span className="section-tag">
                        EXPERIENCE
                    </span>

                    <h2 className="section-title">
                        My Work Experience
                    </h2>

                    <div className="experience-wrapper">

                        {/* <div className="timeline-line"></div> */}

                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="experience-item"
                            >

                                {/* <div className="timeline-dot"></div> */}

                                <div className="timeline-column">

                                    <div className="timeline-dot"></div>

                                    <div className="timeline-item-line"></div>

                                </div>

                                <div className="experience-duration">
                                    {exp.startDate} - {exp.endDate}
                                </div>

                                <div className="experience-card">

                                    <div className="company-header">

                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                        />

                                        <div>

                                            <h3>
                                                {exp.role}
                                            </h3>

                                            {exp.website ? (
                                                <a
                                                    href={exp.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="modal-company-link"
                                                >
                                                    {exp.company}

                                                    <FiExternalLink />
                                                </a>
                                            ) : (
                                                <p>{exp.company}</p>
                                            )}

                                        </div>

                                    </div>

                                    <p>
                                        {exp.shortDescription}
                                    </p>

                                    <button
                                        className="know-more-btn"
                                        onClick={() =>
                                            setSelectedExp(exp)
                                        }
                                    >
                                        Know More →
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {selectedExp && (
                <ExperienceModal
                    experience={selectedExp}
                    onClose={() =>
                        setSelectedExp(null)
                    }
                />
            )}
        </>
    );
};

export default Experience;