import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        {" "}
        <p className="navigation_link">About me</p>
      </Link>
      <Link to="/cv">
        <p className="navigation_link" id="secondary_links">
          My CV
        </p>
      </Link>
      <Link to="/mywork">
        {" "}
        <p className="navigation_link" id="secondary_links">
          My works
        </p>
      </Link>
    </header>
  );
}
