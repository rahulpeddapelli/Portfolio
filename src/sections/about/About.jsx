import "./About.css";

const About = () => {
  const highlights = [
    "Problem-Solving Approach",
    "End-to-End Development Experience",
    "Client-Focused Mindset",
    "Real-World Project Experience",
    "Continuous Learning & Adaptability",
    "Performance & User Experience Focus",
  ];

  return (
    <section id="about" className="about">
      <div className="container about-container">

        {/* Left Side */}

        <div className="about-left">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2 className="section-title">
            Building digital solutions
            <br />
            with passion.
          </h2>

          <p className="about-description">
            I'm a MERN Stack Developer with a strong passion for
            building modern, responsive, and user-focused web
            applications. Through personal projects, client work,
            and internship experience, I've developed practical
            skills in creating scalable solutions that combine
            functionality, performance, and great user experiences.
          </p>

          <p className="about-description">
            I enjoy transforming ideas into real-world products,
            solving technical challenges, and continuously learning
            new technologies to improve as a developer.
          </p>

          <div className="about-stats">

            <div className="stat-card">
              <h3>2+</h3>
              <span>Years Learning</span>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <span>Projects Built</span>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <span>Client Projects</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Commitment</span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="about-right">

          <div className="what-i-bring-card">

            <h3>What I Bring</h3>

            <ul>
              {highlights.map((item) => (
                <li key={item}>
                  <span className="check-mark">✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;