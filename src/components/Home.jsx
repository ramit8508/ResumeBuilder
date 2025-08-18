import { React, useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import ClickToMakeResume from "./ClickToMakeResume";
import BrowseTemplate from "./BrowseTemplate";
import { Link } from "react-router-dom";
import ResumeImage from "./images/TemplateforHome.png";
import ResumeImage2 from "./images/TemplateforHome2.png";
import details from "./images/exampledetails.png";
import Footer from "./Footer";

function Home() {
  const [isExpanded, setisExpanded] = useState(false);
  const [isExpanded2, setisExpanded2] = useState(false);
  const handleclick = () => {
    setisExpanded(!isExpanded);
  };
  const handleclick2 = () => {
    setisExpanded2(!isExpanded2);
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="Resume-builder">
          <h1 className="Resume-builder-heading">
            Create your Personal Resume Effectively and affordlessly
          </h1>
          <p className="Resume-builder-paragraph">
            Build a standup resume in minutes with our easy-to-use resume
            builder. Choose from a variety of templates, customize your content,
            and download your resume in multiple formats. Whether you're a
            student, professional, or looking to switch careers, our tool is
            designed to help you showcase your skills and experience
            effectively.
          </p>
          <div className="button-display">
            <Link to="/ClickToMakeResume" className="Resume-builder-button">
              Click to Make Resume
            </Link>
            <Link to="/BrowseTemplate" className="Resume-builder-button1">
              Browse Template
            </Link>
          </div>
        </div>
        <div className="image-container">
          <h1 className="image-heading">Watch some sample Templates</h1>
          <img
            src={ResumeImage}
            alt="Resume Builder"
            className={
              isExpanded ? "resume-image expanded" : "resume-image small"
            }
            onClick={handleclick}
          />
          <img
            src={ResumeImage2}
            alt="Resume Builder"
            className={
              isExpanded2 ? "resume-image expanded2" : "resume-image small2"
            }
            onClick={handleclick2}
          />
        </div>
      </div>
      <div className="How-to-use">
        <h1 className="heading-how-to-use">
          Create your Resume in 3 easy steps
        </h1>
        <div className="step-container">
          <div className="step1-container">
            <h1 className="step1">1</h1>
            <p className="step1-para">
              Fill All the details wanna add in Resume
            </p>
          </div>
          <div className="step2-container">
            <h1 className="step2">2</h1>
            <p className="step2-para">
              Choose the template wanna add your details
            </p>
          </div>
          <div className="step3-container">
            <h1 className="step3">3</h1>
            <p className="step3-para">
              Preview your resume and dowload it in PDF format
            </p>
          </div>
        </div>
        <div className="image-details">
          <img src={details} alt="Details" className="details-image" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
