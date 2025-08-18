import React from "react";
import "./Contact.css";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import About from "./About";
import { Link } from "react-router-dom";
import Contactimg from "./images/contact.png";

export default function Contact() {
  return (
    <>
      <header className="rb-navbar">
        <h1 className="rb-title">ResumeBuilder</h1>
        <nav className="rb-nav">
          <Link to="/" className="rb-link">
            Home
          </Link>
          <Link to="/about" className="rb-link">
            About
          </Link>
          <Link to="/Home" className="rb-link">
            Contact
          </Link>
        </nav>
      </header>

      <div className="contact-container">
        <h1 className="contact-head">Contact Us</h1>
        <p className="reviewweb">
          Hey!!If you find the website usefull follow us on
        </p>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/ramit-goyal-71b89431a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:ramitgoyal1987@gmail.com" className="contact-link">
            <FaEnvelope />
          </a>
          <a href="tel:+918307730036" className="contact-link">
            <FaPhone />
          </a>
          <a
            href="https://github.com/ramit8508"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub />
          </a>
          </div>
        </div>
        <div className="container-bug">
          <img src={Contactimg} alt="Contact" className="contact-image" />
          <div className="bug">
          <h1 className="bug">Found a Bug?</h1>
          <p className="bug">Let us know so we can squash it up!</p>
          <a className="link1" href="hmailto:ramitgoyal1987@gmail.com">Report Bug</a>
          </div>
        </div>
    </>
  );
}
