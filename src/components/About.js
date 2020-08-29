import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import portret from "../images/es.png";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Skills from "../components/Skills";
import SocialSkills from "../components/SocialSkills";
import Hobbies from "../components/Hobbies";

export default function About() {
  AOS.init();
  return (
    <div className="main_div">
      <section className="main_about_me_section">
        <div className="about_me_description_div">
          <h2 className="description_text">
            Hi, <br />
            Im <span className="my_name">Arman,</span> <br />
            Full Stack Developer <br />
            and <br />
            Graphic Designer
          </h2>
          <div className="me_div">
            <p className="main_about_me">
              Im 16 years old, web developer and graphic designer from Armenia
            </p>
            <p className="slogan_text">
              If a man has no purpose his life is just continuous death.
            </p>
            <p className="slogan_autor">Pierre Boste</p>
          </div>
        </div>
        <div className="about_me_portret">
          <img src={portret} alt="portret" width="100%" />
        </div>
      </section>

      
      <Education />
      <Skills />
      <SocialSkills />
      <Hobbies />
      <Contact />
    </div>
  );
}
