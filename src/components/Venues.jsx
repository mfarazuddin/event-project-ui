import React, { useState } from "react";
import venueImage from "../assets/JaiKrishna/JaiShreeKrishna.jpg";
import "../components/Venues.css";

const venues = [1, 2, 3, 4];

function Venuetypes() {
    const [active, setActive] = useState("Auditorium");

    const types = [
        "Auditorium",
        "Banquet Hall",
        "Convention & Exhibition",
        "Party Plot"
    ];

    return (
        <div className="vt-page">
            {/* Sidebar */}
            <div className="vt-sidebar">
                <h4>Venue Types</h4>

                <div className="vt-sidebar-buttons">
                    {types.map((type) => (
                        <button
                            key={type}
                            className={active === type ? "vt-active" : ""}
                            onClick={() => setActive(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="vt-content">
                <h2 className="vt-title">Venues</h2>

                <div className="vt-cards">
                    {venues.map((item, index) => (
                        <div className="vt-card" key={index}>
                            <div className="vt-card-img">
                                <img src={venueImage} alt="venue" />
                            </div>

                            <div className="vt-card-body">
                                <h3>Grand Royal Auditorium</h3>

                                <div className="vt-location">
                                    📍 Ahmedabad, Gujarat
                                </div>

                                <div className="vt-rating">
                                    ⭐⭐⭐⭐⭐
                                    <span> 5,899 Reviews</span>
                                </div>

                                <div className="vt-tags">
                                    <span>Capacity: 300+</span>
                                    <span>AC Hall</span>
                                    <span>Parking</span>
                                </div>

                                <div className="vt-price-row">
                                    <h4 className="vt-price">₹ 35,999</h4>
                                    <span>/ Event</span>
                                </div>

                                <button className="vt-request-btn">
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Filter Buttons */}
                {/* <div className="vt-filter-bottom">
                    <button className="vt-clear-btn">Clear all</button>
                    <button className="vt-apply-btn">Apply Filter</button>
                </div> */}
            </div>
        </div>
    );
}

export default Venuetypes;