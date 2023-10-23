import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Freelancer", "Blogger"],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 800,
    deleteSpeed: 50,
  });
  return (
    
    <div className="header-wrapper">
    <div className="container">
      <div className="main-info">
        <h3>Web development and website promotions</h3>
        <div className="auto-type-text">
          <span> {text} </span>
          <Cursor cursorStyle="_" />
        </div>
        <a href="#" className="btn-main-offer">Contact us</a>
      </div>
    </div>
    </div>
  );
};

export default Header;
