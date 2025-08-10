import { React, useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import ClickToMakeResume from "./ClickToMakeResume";
import BrowseTemplate from "./BrowseTemplate";
import { Link } from "react-router-dom";
import ResumeImage from "./images/TemplateforHome.png";
import ResumeImage2 from "./images/TemplateforHome2.png";

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
          <h1>Watch some sample Templates</h1>
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
    </>
  );
}

export default Home;
