import React from "react";

function Home() {
  const containerStyle = { padding: "2rem", textAlign: "center" };
  const headingStyle = { fontSize: "2rem", marginBottom: "1rem" };
  const paragraphStyle = { fontSize: "1.1rem", lineHeight: "1.6" };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome!</h2>
      <p style={paragraphStyle}>
        Hello, I am a Computer Science student passionate about coding and web development.
      </p>
      <p style={paragraphStyle}>
        Explore my portfolio to see my projects and skills.
      </p>
    </div>
  );
}

export default Home;
