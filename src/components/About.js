import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>
        I am CS enthusiast and self-taught{" "}
        <span id="webDeveloper">Web Developer</span>.
      </p>
      <div>
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default About;
