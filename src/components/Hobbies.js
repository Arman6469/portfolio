import React from "react";
import "./About.css";

export default function Skills() {
  return (
    <section className="education_section" id="social_skills_section">
      <div
        data-aos="fade-left"
        className="education_on_scroll_div"
        data-aos-duration="1400"
      >
        <h2 className="education_title">Hobbies</h2>
        <div className="skills_list_div">
          <div className="prog_skills_list_div">
            <ul className="social_skill_list_ul">
              <li className="social_skill_list_item">Sport</li>
              <li className="social_skill_list_item">Music</li>
              <li className="social_skill_list_item">Watching movies</li>
              <li className="social_skill_list_item">Biology</li>
              <li className="social_skill_list_item">Cooking</li>
              <li className="social_skill_list_item">Driving</li>
            </ul>
          </div>
        </div>
        <p className="education_aphorism" id="skill_aphorism">
          A hobby is a happy medium between a passion and a monomania.
          {"    "}
          <span className="eduction_aphorism_autor">Honoré de Balzac</span>
        </p>
      </div>
    </section>
  );
}
