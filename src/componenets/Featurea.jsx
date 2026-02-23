import React from "react";
import arrow from "../assets/image/icon-arrow.png";
import "../assets/css/Featurea.css";

const Featurea = () => {
  return (
    <section className="packages">
      <h2 className="section-title">Featured Packages</h2>

      <div className="packages-container">
        <div className="package-card">
          <span className="badge">Basic</span>
          <p className="sub-text">Chosen by 120+ vendor partners</p>
          <h3 className="price">₹ 89,999/-</h3>
          <p className="desc">Best for married couples</p>

          <ul>
            <li>Vendor Profile Listing</li>
            <li>Limited Image Uploads</li>
            <li>One Category Listing</li>
            <li>Contact Form Access</li>
            <li>Basic Analytics</li>
          </ul>

            <button className="btn white-btn">
              See Details <img src={arrow} />
            </button>
        </div>

        <div className="package-card popular">
          <span className="badge white">Popular</span>
          <p className="sub-text white-text">Chosen by 1k+ vendor partners</p>
          <h3 className="price white-text">₹ 149,999/-</h3>
          <p className="desc white-text">Best for married couples</p>

          <ul className="white-text">
            <li>Everything in Basic, plus:</li>
            <li>Multiple Category Listings</li>
            <li>Up to 15 image Uploads</li>
            <li>Priority Listing Placement</li>
            <li>Monthly Performance Reports</li>
          </ul>
          <div className="btn-prt">
            <button className="btn white-btn newtnn">
              See Details <img src={arrow} />
            </button>
          </div>
        </div>

        <div className="package-card">
          <span className="badge">Premium</span>
          <p className="sub-text">Chosen by 100+ vendor partners</p>
          <h3 className="price">₹ 119,999/-</h3>
          <p className="desc">Best for married couples</p>

          <ul>
            <li>All Features in Popular Package</li>
            <li>Unlimited Category Listings</li>
            <li>Featured Vendor Badge</li>
            <li>Unlimited Image & Video Uploads</li>
            <li>Verified Vendor Tag</li>
          </ul>

          <div className="btn-prt">
            <button className="btn white-btn">
              See Details <img src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurea;
