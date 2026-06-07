import "./Hero.css";
import wavingHand from "../../assets/images/waving-hannd-nobg.gif";
import rahulAvatar from "../../assets/images/portfolio-avatar-removebg-preview.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";



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

          <p className="hero-description" style={{marginBottom:"0.8rem"}}>Hi, I'm </p>

          <h1 className="hero-title">
            Rahul
            <br />
            Peddapelli
          </h1>

          <h2 className="hero-subtitle">
            MERN Stack Developer
          </h2>

          <p className="hero-description">
            Passionate MERN Stack Developer focused on building
            modern, responsive, and scalable web applications.
            I enjoy transforming ideas into intuitive digital
            experiences with clean code and thoughtful design.
          </p>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="btn-primary"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>

          </div>

          <div className="social-links">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-image-section">

          <div className="hero-avatar-wrapper">

            {!showAvatar ? (

              <div className="wave-container">
                <img
                  src={wavingHand}
                  alt="Waving Hand"
                  className="wave-gif"
                />

                <h3 style={{textAlign:"center"}}>Hi There!</h3>
              </div>

            ) : (

              <img
                src={rahulAvatar}
                alt="Rahul Peddapelli"
                className="hero-avatar"
              />

            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;