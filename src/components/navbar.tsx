//this is a static navbar
import logo from "../assets/images/msub-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home" id="msub-logo">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <a href="#about"> About </a>
      <a href="#services"> Services </a>
      <a href="#teams"> Team </a>
      <a href="#summer"> Summer Program </a>
      <a href="#history"> History </a>
      <a href="/resources"> Resources </a>
    </div>
  );
};

export default Navbar;
