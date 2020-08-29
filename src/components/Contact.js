import React from "react";
import "./About.css";
import name from "../images/person.png";
import mail from "../images/origami.png";
import phone from "../images/phone.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

export default function Contact() {
  return (
    <section className="education_section" id="contact_section">
      <div
        data-aos="fade-right"
        data-aos-duration="1400"
        className="education_on_scroll_div"
      >
        <h2 className="education_title">Contact Me</h2>
        <div className="contact_items">
          <div className="contact_item_div">
            <div className="contact_image">
              <img
                src={name}
                alt="name"
                width="13%"
                className="contact_icon_image"
              />{" "}
            </div>
            <div className="contact_description">
              <p className="list_second_part"> Arman </p>
            </div>
          </div>
          <div className="contact_item_div">
            <div className="contact_image">
              <img
                src={phone}
                alt="name"
                width="13%"
                className="contact_icon_image"
              />{" "}
            </div>
            <div className="contact_description">
              <p className="list_second_part"> +374 98 80 67 81 </p>
            </div>
          </div>
          <div className="contact_item_div">
            <div className="contact_image">
              <img
                src={mail}
                alt="name"
                width="13%"
                className="contact_icon_image"
              />{" "}
            </div>
            <div className="contact_description">
              <p className="list_second_part"> arman-1995-umroyan@mail.ru </p>
            </div>
          </div>

          <div className="contact_icons">
            <a
              href="https://www.instagram.com/armanumroyan/"
              target="_blank"
              rel="noopener noreferrer"
            
            >
              <img src={instagram} alt="insta" width="35%"  className="contact_icon_link"/>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006926419157"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <img src={facebook} alt="facebook" width="35%"  className="contact_icon_link"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
