import React from "react";
import "./About.css";

export default function Education() {
  return (
    <section className="education_section">
      <div
        data-aos="fade-right"
        className="education_on_scroll_div"
        data-aos-duration="1400"
      >
        <h2 className="education_title">Education</h2>
        <p className="education_info">
          I studied at N 6 secondary school in Ejmiatsin and graduated with red
          cerificate. Since 2016 I'm attending TUMO Center For Creative
          Technologies and very soon I will graduate also TUMO. In TUMO I have
          learnt programming, web design, game development, graphic design and
          robotx. Now I'm studying at N 5 high school in Ejmiatsin. I have
          improved my skills in web development in Global IT educational center.
          Now I'm learning Algorithms and Data Structures in Tech42 IT Center.
        </p>
        <p className="education_aphorism">
          Live as if you will die tomorrow, learn as if you'll live forever.
          {"    "}
          <span className="eduction_aphorism_autor">Mahatma Gandhi</span>
        </p>
      </div>
    </section>
  );
}
