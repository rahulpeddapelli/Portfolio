import "./About.css";

const About = () => {
  const highlights = [
    "Full Stack Development",
    "Problem-Solving Approach",
    "Scalable & Modular Architecture",
    "REST API & Backend Development",
    "Performance & User Experience",
    "Continuous Learning & Adaptability",
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
            Building reliable and engaging web applications
          </h2>

          <p className="about-description">
            I'm a Full Stack Developer with experience building modern,
            responsive, and scalable web applications using the MERN stack.
            I work across both frontend and backend development, creating
            intuitive interfaces, REST APIs, authentication workflows,
            database operations, and real-time application features.
          </p>

          <p className="about-description">
            I enjoy solving technical problems, designing clean and
            maintainable solutions, and turning ideas into functional
            products. I'm continuously expanding my knowledge across
            backend development, caching, containerization, and cloud-ready
            application architecture.
          </p>

          <div className="about-stats">

            <div className="stat-card">
              <h3>2+</h3>
              <span>Years Experience</span>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <span>Projects Built</span>
            </div>

            {/* <div className="stat-card">
              <h3>5+</h3>
              <span>Web Applications</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Commitment</span>
            </div> */}

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
