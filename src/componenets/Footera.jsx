import React from "react";
import "../assets/css/Footera.css";

import Icons1 from "../assets/image/Icons/icon1.png";
import Icons2 from "../assets/image/Icons/icon2.png";
import Icons3 from "../assets/image/Icons/icon3.png";
import Icons4 from "../assets/image/Icons/icon4.png";
// import { SlSocialFacebook } from "react-icons/sl";
// import { BsTwitterX } from "react-icons/bs";
// import { FaInstagram } from "react-icons/fa6";
// import { VscGithub } from "react-icons/vsc";
const Footera = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col logo-section">
          <h2 className="logo">
            <span className="logo-box">
              <span className="highlight">KHUSH</span>• EVENT
            </span>
          </h2>

          <p className="description">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>

          <div className="social-icons">
            <img src={Icons1} alt="icons" />
            <img src={Icons2} alt="icons" />
            <img src={Icons3} alt="icons" />
            <img src={Icons4} alt="icons" />
            {/* <BsTwitterX />
            <SlSocialFacebook />
            <FaInstagram />
            <VscGithub /> */}
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footera;
