import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import myToggle from "../assets/image/toggle.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  const [open, setopen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="logo">
              <h2>
                <span className="khush">Khush</span>• Event
              </h2>
            </div>
            <nav className={showMenu ? "menu-mobaile" : "menu-web"}>
              <ul>
                <li className="dropdown">
                  <button
                    className="dropdown-btn"
                    onClick={() => setopen(!open)}
                  >
                    <a href="#">Event Types</a>
                  </button>
                  {open && (
                    <div className="dropdown-menu">
                      <p>Corporate Events</p>
                      <p>Solo Entertainer</p>
                      <p>Choreographer</p>
                      <p>Active Stalls</p>
                      <p>Kids Games & Rides</p>
                    </div>
                  )}
                </li>
                <li>
                  <a href="#">Vendors</a>
                </li>
                <li>
                  <a href="#">Cities</a>
                </li>
                <li>
                  <a href="#">Venues</a>
                </li>
                <li className="login-btn">
                  <a href="#">Login</a>
                </li>
              </ul>
            </nav>
            <div className="ham-menu">
              <button onClick={handleButtonToggle}>
                <img src={myToggle} alt="toggleButton" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
