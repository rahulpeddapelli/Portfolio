import "./Skills.css";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiPostman,
    SiSocketdotio,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

import { VscVscode } from "react-icons/vsc";
import { RiShieldKeyholeLine } from "react-icons/ri";

import { BsDatabase } from "react-icons/bs";

const skillsData = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: <FaReact />,
                color: "#61DAFB",
            },
            {
                name: "JavaScript",
                icon: <SiJavascript />,
                color: "#F7DF1E",
            },
            {
                name: "HTML5",
                icon: <FaHtml5 />,
                color: "#E34F26",
            },
            {
                name: "CSS3",
                icon: <FaCss3Alt />,
                color: "#1572B6",
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />,
                color: "#06B6D4",
            },
        ],
    },

    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                icon: <FaNodeJs />,
                color: "#5FA04E",
            },
            {
                name: "Express",
                icon: <SiExpress />,
                color: "#FFFFFF",
            },
            {
                name: "REST APIs",
                icon: <TbApi />,
                color: "#38BDF8"
            },
            {
                name: "Socket.io",
                icon: <SiSocketdotio />,
                color: "#FFFFFF"
            },
            {
                name: "JWT",
                icon: <RiShieldKeyholeLine />,
                color: "#22C55E"
            }
        ],
    },

    {
        title: "Database",
        skills: [
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                color: "#47A248",
            },
            {
                name: "Mongoose",
                icon: <BsDatabase />,
                color: "#880000"
            }

        ],
    },

    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                icon: <FaGitAlt />,
                color: "#F05032",
            },
            {
                name: "GitHub",
                icon: <FaGithub />,
                color: "#FFFFFF",
            },
            {
                name: "VS Code",
                icon: <VscVscode />,
                color: "#007ACC",
            },
            {
                name: "Postman",
                icon: <SiPostman />,
                color: "#FF6C37",
            },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">

                <span className="section-tag">
                    SKILLS
                </span>

                <h2 className="section-title">
                    Technologies I work with
                </h2>

                <div className="skills-grid">

                    {skillsData.map((category) => (
                        <div
                            className="skill-category-card"
                            key={category.title}
                        >
                            <h3>{category.title}</h3>

                            <div className="skill-items">

                                {category.skills.map((skill) => (
                                    <div
                                        className="skill-item"
                                        key={skill.name}
                                    >
                                        <div
                                            className="skill-icon"
                                            style={{
                                                color: skill.color,
                                            }}
                                        >
                                            {skill.icon}
                                        </div>

                                        <span>{skill.name}</span>
                                    </div>

                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;