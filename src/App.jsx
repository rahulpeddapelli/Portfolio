import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./sections/hero/Hero.jsx";
import About from "./sections/about/About.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Experience from "./sections/experience/Experience.jsx";
import Projects from "./sections/projects/Projects.jsx";
import Contact from "./sections/contact/Contact.jsx";
import Footer from "./sections/footer/Footer.jsx";


import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
       <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#151922",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
          },
        }}
      />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

      <Footer />

     
    </>
  );
}

export default App;