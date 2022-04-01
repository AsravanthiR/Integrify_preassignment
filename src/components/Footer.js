import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const githubHandler = () => {
    window.open("https://github.com/AsravanthiR/Integrify_preassignment");
  };
  return (
    <div className="link-wrapper">
      <center>
        <p>
          Avadhanula Sravanthi- &copy;2022
          <button onClick={githubHandler} className="click">
            <FaGithub color="purple" className="svgIcon" />
          </button>
        </p>
      </center>
    </div>
  );
};

export default Footer;
