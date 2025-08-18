import React from "react";
import { Link } from "react-router-dom";



const style1 = {
  padding: "6px 12px",
  width: "100%",
  backgroundColor: "black",
  position: "fixed",
  top: "0",
  left: "0",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  zIndex: "1000",
  flexWrap: "wrap", 
};

const style2 = {
  color: "white",
  fontStyle: "italic",
  fontFamily: "Arial, sans-serif",
  fontSize: "20px",
  textAlign: "left",
};

const style3 = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  margin: "0 15px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  transition: "color 0.3s",
  display: "inline-block",
  borderRadius: "5px",
};

const responsiveStyles = `
@media (max-width: 600px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 10px;
  }
  .navbar-container h1 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .navbar-links {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .navbar-links a {
    font-size: 16px;
    margin: 5px 0;
  }
}
`;

function Navbar() {
  return (
    <>
      <style>{responsiveStyles}</style>
      <div className="navbar-container" style={style1}>
        <h1 style={style2}>ResumeBuilder</h1>
        <nav className="navbar-links" style={{ backgroundColor: "black", padding: "10px" }}>
          <Link to="/" style={style3}>
            Home
          </Link>
          <Link to="/about" style={style3}>
            About
          </Link>
          <Link to="/contact" style={style3}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
