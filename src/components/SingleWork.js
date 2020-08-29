import React from "react";
import { Link } from "react-router-dom";

export default function SingleWork(props) {
  return (
    <div className="main_div" id="my_work_main_div">
      <div className="my_work">
        <div className="my_work_image">
          <img
            src={props.data.main_image}
            alt="work_image"
            width="100%"
            height="100%"
          />
        </div>
        <div className="my_work_introduction">
          <h2 className="my_work_intro_title">{props.data.title}</h2>
          <p className="my_work_intro_description">{props.data.intro}</p>
          <Link
            to={`/mywork/${props.data.id}`}
            className="my_work_intro_readmore_button"
            rel="noopener noreferrer"
          >
            <div>Read More</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
