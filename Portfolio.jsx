import React from "react";

function Portfolio() {
  const containerStyle = { padding: "2rem" };
  const headingStyle = { fontSize: "2rem", marginBottom: "1rem" };
  const listStyle = { fontSize: "1.1rem", lineHeight: "1.6" };
  const sectionStyle = { marginTop: "2rem" };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>My Projects</h2>
      <ul style={listStyle}>
        <li>Project 1: [Eccomerce Website]</li>
        <li>Project 2: [Calculator App]</li>
        <li>Project 3: [Library System]</li>
      </ul>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>My Skills</h2>
        <ul style={listStyle}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>Git & GitHub</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
