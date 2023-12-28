import logo from "../assets/images/msub-logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <a href="#home" id="msub-logo">
        <img src={logo} alt="logo" className="logo" />
      </a>

      {windowWidth <= 755 ? (
        <div className="mobile-menu">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          {showMenu && (
            <div className={`mobile-menu-options ${showMenu ? "show" : ""}`}>
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <a href="#summer">Program</a>
              <a href="#history">History</a>
              <a href="/resources">Resources</a>
            </div>
          )}
        </div>
      ) : (
        <div className="desktop-menu">
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#summer">Program</a>
          <a href="#history">History</a>
          <a href="/resources">Resources</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
