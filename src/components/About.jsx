import React from "react";
import { Link } from "react-router-dom";
import './About.css';
import Aboutimg from "./images/about.png"; 

export default function About() {
  return (
    <>
      <header className="rb-navbar">
        <h1 className="rb-title">ResumeBuilder</h1>
        <nav className="rb-nav">
          <Link to="/" className="rb-link">Home</Link>
          <Link to="/about" className="rb-link">About</Link>
          <Link to="/contact" className="rb-link">Contact</Link>
        </nav>
      </header>

      <main className="about-container">
        
        <div className="about-left">
          <h2 className="about-heading">About</h2>
          <p className="about-text">
            ResumeBuilder helps job seekers create professional resumes quickly
            and easily — no design or writing skills required. Pick a template,
            enter your details, and download a polished CV in minutes.
          </p>
        </div>

        
        <div className="about-right">
  
          <img src={Aboutimg} alt="Person creating a resume" className="about-img" />
        </div>
      </main>
    </>
  );
}
