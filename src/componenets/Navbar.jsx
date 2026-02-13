import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="logo">
              <h2>
                {" "}
                <span className="khush">Khush</span>• Event
              </h2>
            </div>
            <nav className={showMenu ? "menu-mobaile" : "menu-web"}>
              <ul>
                <li>
                  <a href="#">Event Types</a>
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
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
