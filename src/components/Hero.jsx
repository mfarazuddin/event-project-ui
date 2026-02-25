import React from "react";
import "../components/hero.css";
import style from "../components/hero.module.css";
import bannerImg from "../assets/Banner/marrige.jpg";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bannerImg})`,
      }}
    >
      
      <div className="hero-content">
        <h1>
          Make Your Event <span className="italic-gold">Unforgettable</span>{" "}
          <br />
          with the Right Vendors
        </h1>
        <p className="sub-textNew">
          Discover <span className="italic-gold">Trusted</span> Event Vendors <br/> in
          Your City
        </p>

        {/* Search Box */}
        <div className="search-card">
          <div className="filter-group">
            <div className="select-wrapper">
              <select>
                <option>Vendor</option>
              </select>
            </div>
            <div className="select-wrapper">
              <select>
                <option>State</option>
              </select>
            </div>
            <div className="select-wrapper">
              <select>
                <option>City</option>
              </select>
            </div>
          </div>

          <div className="button-section">
            <button className="search-btn">
              <span className="icon"><FiSearch /></span> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
