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
              <td>Gymnastics </td>
            </tr>
            <tr>
              <td>2009-2018</td>
              <td>N6 Secondary School in Ejmiatsin. Red certificate</td>
            </tr>

            <tr>
              <td>2011- till today</td>
              <td>Karate Leader Club in Ejmiatsin</td>
            </tr>
            <tr>
              <td>2016 - till today</td>
              <td>TUMO Center of Creative Technologies</td>
            </tr>
            <tr>
              <td>2018 - till today</td>
              <td>N5 High School in Ejmiatsin</td>
            </tr>
            <tr>
              <td>02.2020 - 06.2020 </td>
              <td>Global IT Educational Center. Web development</td>
            </tr>
            <tr>
              <td>07.2020 - 09.2020 </td>
              <td>Internship in Cross of Armenian Unity</td>
            </tr>
            <tr>
              <td>09.2020 - till today </td>
              <td>
                 Tech42 IT Center. Algorithms and Data Structures
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
