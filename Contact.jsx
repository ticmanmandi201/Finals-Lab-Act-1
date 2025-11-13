import React from "react";

function Contact() {
  const containerStyle = { padding: "2rem" };
  const headingStyle = { fontSize: "2rem", marginBottom: "1rem" };
  const paragraphStyle = { fontSize: "1.1rem", lineHeight: "1.6" };
  const linkStyle = { color: "#007bff", textDecoration: "none" };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <p style={paragraphStyle}>Email: ticmanmandi201@gmail.com</p>
      <p style={paragraphStyle}>Phone: 09692583004</p>
    </div>
  );
}

export default Contact;
