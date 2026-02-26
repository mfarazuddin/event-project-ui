import React, { useState } from "react";
import venueImage from "../assets/JaiKrishna/JaiShreeKrishna.jpg";
import "../components/Venuetypes.css";
import { Link } from "react-router-dom";

const venues = [1, 2, 3, 4];

function Venuetypes() {
  const [active, setActive] = useState("Auditorium");

  const types = ["Auditorium", "Corporate Offing", "Dance Triage"];

  return (
    <div className="venue-page">
      {/* Sidebar */}
      <div className="venue-sidebar">
        <h4>Venue Types</h4>

        <div className="sidebar-buttons">
          {types.map((type) => (
            <button
              key={type}
              className={active === type ? "active" : ""}
              onClick={() => setActive(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="venue-content">
        <h2 className="venue-title">Award Night Venues</h2>

        <div className="venue-cards">
          {venues.map((item, index) => (
            <div className="venue-card" key={index}>
              <div className="card-img">
                <img src={venueImage} alt={`Venue ${index + 1}`} />
              </div>

              <div className="card-body">
                <h4 className="price">₹ 35,999</h4>
                <h3 className="linkingpage">
                  <Link to="/Jpage">
                  Jai shree Krishna
                  </Link> 
                </h3>

                <p>
                  Welcome to a space where every celebration feels special. Our
                  venue offers premium services and modern facilities.
                </p>

                <div className="card-tags">
                  <span>Capacity: 300+</span>
                  <span>AC Hall</span>
                  <span>Parking</span>
                </div>

                <div className="card-actions">
                  <button className="details-btn">View Details</button>
                  <button className="contact-btn">Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Venuetypes;
