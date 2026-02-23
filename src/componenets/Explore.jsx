import React from "react";
import vicon1 from "../assets/image/Vendor-icons/Vendor-icon7.png";
import vicon2 from "../assets/image/Vendor-icons/Vendor-icon1.png";
import vicon3 from "../assets/image/Vendor-icons/Vendor-icon2.png";
import vicon4 from "../assets/image/Vendor-icons/Vendor-icon3.png";
import vicon5 from "../assets/image/Vendor-icons/Vendor-icon4.png";
import vicon6 from "../assets/image/Vendor-icons/Vendor-icon5.png";
import vicon7 from "../assets/image/Vendor-icons/Vendor-icon6.png";
import "../assets/css/Explore.css";

const Explore = () => {
  const categories = [
    {
      id: 1,
      img: vicon7,
      title: "Event Services",
    },
    {
      id: 2,
      img: vicon5,
      title: "Entertainment",
    },
    {
      id: 3,
      img: vicon3,
      title: "Decor and Setup",
    },
    {
      id: 4,
      img: vicon1,
      title: "Venues",
    },
    {
      id: 5,
      img: vicon6,
      title: "Fashion & Styling",
    },
    {
      id: 6,
      img: vicon2,
      title: "Corporate",
    },
    {
      id: 7,
      img: vicon4,
      title: "Special",
    },
  ];

  return (
    <section className="explore-sectionExplore">
      <h2>Explore Vendors By Categories</h2>

      <div className="explore-container">
        {categories.map((item) => (
          <div className="explore-card" key={item.id}>
            <div className="icon-circle">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
