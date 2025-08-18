import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const footer_container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100px",
  width: "100%",
  backgroundColor: "black",
  color: "white",
  padding: "20px",
  textAlign: "center",
};

const heading = {
  fontSize: "20px",
  marginBottom: "10px",
  fontFamily: "Arial, sans-serif",
};

const right_reserve = {
  fontSize: "12px",
  margin: "0",
  fontFamily: "Arial, sans-serif",
};

const para1 = {
  fontSize: "14px",
  margin: "5px 0",
};

const icons = {
  color: "white",
  fontSize: "20px",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const iconContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "12px",
  marginTop: "10px",
};

function Footer() {
  return (
    <div className="footer" style={footer_container}>
      <h1 style={heading}>Build your resume in minutes</h1>
      <p style={right_reserve}>© 2023 Resume Builder. All rights reserved.</p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
        <p style={para1}>“Turn Skills into Opportunities.”</p>
        <p style={{ fontSize: "14px" }}>Follow us on</p>

        <div className="contact-icons" style={iconContainer}>
          <a
            href="https://www.linkedin.com/in/ramit-goyal-71b89431a/"
            target="_blank"
            rel="noopener noreferrer"
            style={icons}
          >
            <FaLinkedin />
          </a>
          <a href="mailto:ramitgoyal1987@gmail.com" style={icons}>
            <FaEnvelope />
          </a>
          <a href="tel:+918307730036" style={icons}>
            <FaPhone />
          </a>
          <a
            href="https://github.com/ramit8508"
            target="_blank"
            rel="noopener noreferrer"
            style={icons}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
