import Navbar from "./navbar";
import photo from "../assets/images/msub-photo.jpeg";
//import logo from "../assets/images/msub-logo.png";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner-overlay"></div> {/* Add the banner-overlay */}
      <img src={photo} alt="Banner-Media-Scroller" className="media-item" />
      <div className="banner-text">
        {/*<img src={logo} alt="logo" className="logo" />*/}
        <h1>Math-Science Upward Bound</h1>
      </div>
    </div>
  );
};

export default Banner;
