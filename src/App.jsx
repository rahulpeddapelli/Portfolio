import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./sections/hero/Hero.jsx";
import About from "./sections/about/About.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Experience from "./sections/experience/Experience.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About/>

      <Skills/>

      <Experience/>


      <section
        id="projects"
        style={{ height: "100vh" }}
      >
      </section>

      <section
        id="contact"
        style={{ height: "100vh" }}
      >
      </section>
    </>
  );
}

export default App;