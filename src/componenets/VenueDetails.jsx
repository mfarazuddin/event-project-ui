import React from "react";
import "../assets/css/VenueDetails.css";
import picvenue1 from "../assets/image/Venuedetail/venue2.jpg";
import picvenue2 from "../assets/image/Venuedetail/venue1.jpg";
import picvenue3 from "../assets/image/Venuedetail/venue3.jpg";

const VenueDetails = () => {
  return (
    <div className="venue-container">
      <div className="hero-section">
        <img src={picvenue1} alt="venue" />
      </div>

      <div className="venue-content">
        <div className="venue-header">
          <div>
            <p className="location">📍 Ahmedabad, Gujarat</p>
            <p className="rating">⭐ ⭐ ⭐ ⭐ ⭐ 5,899 Reviews</p>
            <h1>Jai shree Krishna</h1>
          </div>

          <div className="header-buttons">
            <button className="brochure-btn">⬇ Get Brochure</button>
            <br />
            <button className="contact-btn">📞 Contact Vendor</button>
          </div>
        </div>

        <div className="about">
          <h3>About</h3>
          <p>
            Welcome to a space where every celebration feels special. Our venue
            offers a perfect blend of elegance and comfort, with spacious indoor
            and outdoor areas that can be customized to suit any occasion—be it
            a wedding, birthday, engagement, or corporate event. We provide a
            range of services including decor, catering, and event support,
            designed to make your experience smooth and memorable.
          </p>
        </div>

        <div className="event-space">
          <h3>Event Spaces</h3>
          <div className="space-card">
            <h4>Orchid</h4>
            <p>Party Plot</p>
          </div>
        </div>

        <div className="bottom-section">
          <div className="subBottomSection">
            <h3>Get In Touch</h3>

            <div className="contact-form">
              <textarea placeholder="Tell us about your event requirements..." />

              <p className="inquiry-title">Purpose of inquiry</p>
              <div className="radio-group">
                <label>
                  <input type="radio" name="inquiry" /> Plan an event
                </label>
                <label>
                  <input type="radio" name="inquiry" /> B2B Collaboration
                </label>
                <label>
                  <input type="radio" name="inquiry" /> Knowing More
                </label>
              </div>

              <button className="send-btn">Send Inquiry</button>
            </div>
          </div>
          <div className="mainGalleryVenue">
            <h3>Gallery</h3>

            <div className="galleryVenue">
              <div className="gallery-grid">
                <img src={picvenue2} alt="" />
                <img src={picvenue1} alt="" />
                <img src={picvenue3} alt="" />
                <img src={picvenue2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
