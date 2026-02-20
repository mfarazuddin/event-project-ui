import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import myToggle from "../assets/image/toggle.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  const [openMega, setopenMega] = useState(false);
  const buttonOpenMega = () => {
    setopenMega(!openMega);
  };
  const [openSub, setopenSub] = useState(false);
  const buttonOpenSub = () => {
    setopenSub(!openSub);
  };
  const [openSub1, setopenSub1] = useState(false);
  const buttonOpenSub1 = () => {
    setopenSub1(!openSub1);
  };
  const [openSub2, setopenSub2] = useState(false);
  const buttonOpenSub2 = () => {
    setopenSub2(!openSub2);
  };
  const [openSub3, setopenSub3] = useState(false);
  const buttonOpenSub3 = () => {
    setopenSub3(!openSub3);
  };
  const [openSub4, setopenSub4] = useState(false);
  const buttonOpenSub4 = () => {
    setopenSub4(!openSub4);
  };

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
              <ul className="Megaul">
                <li className="dropdownMega">
                  <button className="dropdown-btn" onClick={buttonOpenMega}>
                    <a href="#">Event Types </a>
                    <span className="down-icon">
                      <RiArrowDropDownLine />
                    </span>
                  </button>
                  {openMega && (
                    <div className="Megadropdown-menu">
                      <p onClick={buttonOpenSub} className="dropdownSub">
                        <a href="#">Corporate Events</a>

                        {openSub && (
                          <div className="subFullbg">
                            <div className="subDropdown-menu">
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                              <ul>
                                <li>BTL Activities</li>
                                <li>Concerts</li>
                                <li>Employee Engagement</li>
                                <li>IPO Launch</li>
                              </ul>
                              <ul>
                                <li>Builder Site Launch</li>
                                <li>Convention</li>
                                <li>Exhibition</li>
                                <li>Mall Activities</li>
                              </ul>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </p>

                      <p onClick={buttonOpenSub1} className="dropdownSub">
                        <a href="#"> Solo Entertainer</a>
                        {openSub1 && (
                          <div className="subFullbg2">
                            <div className={`subdropTwo`}>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                              <ul>
                                <li>BTL Activities</li>
                                <li>Concerts</li>
                                <li>Employee Engagement</li>
                                <li>IPO Launch</li>
                              </ul>
                              <ul>
                                <li>Builder Site Launch</li>
                                <li>Convention</li>
                                <li>Exhibition</li>
                                <li>Mall Activities</li>
                              </ul>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </p>
                      <p onClick={buttonOpenSub2} className="dropdownSub">
                        <a href="#"> Choreographer</a>
                        {openSub2 && (
                          <div className="subFullbg3">
                            <div className={` subdropThree`}>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                              <ul>
                                <li>BTL Activities</li>
                                <li>Concerts</li>
                                <li>Employee Engagement</li>
                                <li>IPO Launch</li>
                              </ul>
                              <ul>
                                <li>Builder Site Launch</li>
                                <li>Convention</li>
                                <li>Exhibition</li>
                                <li>Mall Activities</li>
                              </ul>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </p>
                      <p onClick={buttonOpenSub3} className="dropdownSub">
                        <a href="#">Active Stalls</a>
                        {openSub3 && (
                          <div className="subFullbg4">
                            <div className={`subdropFour`}>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                              <ul>
                                <li>BTL Activities</li>
                                <li>Concerts</li>
                                <li>Employee Engagement</li>
                                <li>IPO Launch</li>
                              </ul>
                              <ul>
                                <li>Builder Site Launch</li>
                                <li>Convention</li>
                                <li>Exhibition</li>
                                <li>Mall Activities</li>
                              </ul>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </p>
                      <p onClick={buttonOpenSub4} className="dropdownSub">
                        <a href="#">Kids Games & Rides</a>
                        {openSub4 && (
                          <div className="subFullbg5">
                            <div className={`subdropFive`}>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                              <ul>
                                <li>BTL Activities</li>
                                <li>Concerts</li>
                                <li>Employee Engagement</li>
                                <li>IPO Launch</li>
                              </ul>
                              <ul>
                                <li>Builder Site Launch</li>
                                <li>Convention</li>
                                <li>Exhibition</li>
                                <li>Mall Activities</li>
                              </ul>
                              <ul>
                                <li>Award Night</li>
                                <li>Celebrity Appearance</li>
                                <li>Corporate Retreat</li>
                                <li>PR Parties</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </p>
                    </div>
                  )}
                </li>
                <li className="dropdown-btn">
                  <a href="#">Vendors </a>
                  <span className="down-icon">
                    <RiArrowDropDownLine />
                  </span>
                </li>
                <li className="dropdown-btn">
                  <a href="#">Cities </a>
                  <span className="down-icon">
                    <RiArrowDropDownLine />
                  </span>
                </li>
                <li className="dropdown-btn">
                  <a href="#">Venues </a>
                  <span className="down-icon">
                    <RiArrowDropDownLine />
                  </span>
                </li>
                <button className="login-btn">
                  <a href="#">Login</a>
                </button>
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
