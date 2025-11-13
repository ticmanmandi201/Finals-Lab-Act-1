import React from "react";

function About() {
  const containerStyle = { padding: "2rem" };
  const headingStyle = { fontSize: "2rem", marginBottom: "1rem" };
  const paragraphStyle = { fontSize: "1.1rem", lineHeight: "1.6" };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        My name is Mandi Ayuni C. Ticman, and I am currently studying Computer Science.
      </p>
      <p style={paragraphStyle}>
        I enjoy learning new technologies, building projects, and improving my programming skills.
      </p>
      <p style={paragraphStyle}>
        My goal is to become a skilled full-stack developer.
      </p>
    </div>
  );
}

export default About;
