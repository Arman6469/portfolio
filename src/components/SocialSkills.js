import React from "react";
import "./About.css";

export default function Skills() {
  return (
    <section className="education_section" id="social_skills_section">
      <div
        data-aos="fade-right"
        className="education_on_scroll_div"
        data-aos-duration="1400"
      >
        <h2 className="education_title">Social Skills</h2>
        <div className="skills_list_div">
          <div className="prog_skills_list_div">
            <ul className="social_skill_list_ul">
              <li className="social_skill_list_item">Positive</li>
              <li className="social_skill_list_item">Communicative</li>
              <li className="social_skill_list_item">Leadership skills</li>
              <li className="social_skill_list_item">Purposeful</li>
              <li className="social_skill_list_item">Hardworking</li>
            </ul>
          </div>
        </div>
        <p className="education_aphorism" id="skill_aphorism">
          Relational skills are the most important abilities in leadership.
          {"    "}
          <span className="eduction_aphorism_autor">John C. Maxwell</span>
        </p>
      </div>
    </section>
  );
}
