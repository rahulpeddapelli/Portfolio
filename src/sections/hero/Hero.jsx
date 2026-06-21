import "./Hero.css";
import wavingHand from "../../assets/images/waving-hannd-nobg.gif";
import rahulAvatar from "../../assets/images/portfolio-avatar-removebg-preview.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const RESUME_URL = import.meta.env.VITE_RESUME_URL;


import { SiMongodb, SiJavascript } from "react-icons/si";
import { useEffect, useState } from "react";

const Hero = () => {



  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowAvatar(true);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);


  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        {/* Left Content */}

        <div className="hero-content">

          {/* <span className="hero-tag">
            👋 Hi, I'm Rahul
          </span> */}

          <p className="hero-description" style={{ marginBottom: "0.8rem" }}>Hi, I'm </p>

          <h1 className="hero-title">
            Rahul
            <br />
            Peddapelli
          </h1>

          <h2 className="hero-subtitle">
            Full Stack Developer
          </h2>

          <p className="hero-description">
            Passionate Full Stack Developer focused on building
            modern, responsive, and scalable web applications.
            I enjoy transforming ideas into intuitive digital
            experiences with clean code and thoughtful design.
          </p>

          <div className="hero-buttons">

            <a
              href="/"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Contact Me
            </a>

            <a
              href= {RESUME_URL}
              // target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>

          </div>

          <div className="social-links">

            <a className="github" href="https://github.com/rahulpeddapelli" target="_blank">
              <FaGithub />
            </a>

            <a className="linkedin" href="https://www.linkedin.com/in/rahul-peddapelli-004929358/" target="_blank">
              <FaLinkedin />
            </a>

            <a  className="email" href="mailto:rahulpeddapelli2091@gmail.com" target="_blank">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-media">
          <img
            src={wavingHand}
            className={`wave-gif ${showAvatar ? "hide" : "show"}`}
            alt="waving-gif"
          />

          <img
            src={rahulAvatar}
            className={`hero-avatar ${showAvatar ? "show" : "hide"}`}
            alt="Rahul"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;