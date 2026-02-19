import React from "react";
import Blogimg1 from "../assets/image/Blog/Blog1.jpg";
import Blogimg2 from "../assets/image/Blog/Blog2.jpg";
import Blogimg3 from "../assets/image/Blog/Blog3.jpg";



const Bloga = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Event Blogs & Insights</h2>
        <button className="view-btn">View all</button>
      </div>

      <div className="blog-cards">

        <div className="card">
          <img
            src={Blogimg1}
            alt="Bride Groom"
          />
          <div className="card-content green">
            <h3>34 Bride & Groom Entry Ideas</h3>
            <p>
              Catering Trends 2025: What's Cooking at Indian Weddings & Parties?
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src={Blogimg2}
            alt="Wedding"
          />
          <div className="card-content peach">
            <h3>2025 Wedding Photography Trends</h3>
            <p>
              2025 Wedding Photography Trends in India: For Newcomers & Industry Leaders
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src={Blogimg3}
            alt="Catering"
          />
          <div className="card-content purple">
            <h3>Catering Trends 2025 ?</h3>
            <p>
              Catering Trends 2025: What's Cooking at Indian Weddings & Parties?
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bloga;
