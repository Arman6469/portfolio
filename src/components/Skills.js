import React from 'react'
import './About.css'

export default function Skills() {
    return (
        <section className="education_section" id="skills_section">
        <div
          data-aos="fade-left"
          className="education_on_scroll_div"
          data-aos-duration="1400"
        >
          <h2 className="education_title">Skills</h2>
          <div className="skills_list_div">
            <div className="prog_skills_list_div">
              <h3 className="skill_list_header">Web Development</h3>
              <ul className="skill_list_ul">
                <li className="skill_list_item">HTML</li>
                <li className="skill_list_item">CSS</li>
                <li className="skill_list_item">JavaScript</li>
                <li className="skill_list_item">Jquery</li>
                <li className="skill_list_item">React JS</li>
                <li className="skill_list_item">Node JS</li>
              </ul>
            </div>
            <div className="graphic_skills_list_div">
              <h3 className="skill_list_header">Graphic Design</h3>
              <ul className="skill_list_ul">
                <li className="skill_list_item">Adobe Photoshop</li>
                <li className="skill_list_item">Adobe Illustrator</li>
              </ul>
            </div>
          </div>
          <p className="education_aphorism" id="skill_aphorism">
            Skill and confidence are an unconquered army. {"    "}
            <span className="eduction_aphorism_autor">George Herbert</span>
          </p>
        </div>
      </section>
    )
}
