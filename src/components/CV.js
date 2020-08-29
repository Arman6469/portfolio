import React from "react";
import "./CV.css";

export default function CV() {
  return (
    <div>
      <div className="cv_title_div">
        <h1 className="cv_title">My CV</h1>
      </div>
      <div className="main_div_cv">
        <table className="ui selectable inverted table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2006-2011</td>
              <td>I have dabbled in a gymnastics </td>
            </tr>
            <tr>
              <td>2009-2018</td>
              <td>
                I have studied at N6 secondary school in Ejmiatsin. Graduated
                with red certificate
              </td>
            </tr>

            <tr>
              <td>2011- till today</td>
              <td>I am attending Karate Leader Club in Ejmiatsin</td>
            </tr>
            <tr>
              <td>2016 - till today</td>
              <td>I am studying in TUMO center of creative technologies</td>
            </tr>
            <tr>
              <td>2018 - till today</td>
              <td>I am studying in N5 high school in Ejmiatsin</td>
            </tr>
            <tr>
              <td>02.2020 - till today </td>
              <td>
                I am improving my knowledges in web development in Global IT
                educational center
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
