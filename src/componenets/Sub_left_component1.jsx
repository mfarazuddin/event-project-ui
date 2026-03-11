import React from "react";
import vicon1 from "../assets/image/Vendor-icons/Vendor-icon7.png";
import vicon2 from "../assets/image/Vendor-icons/Vendor-icon1.png";
import vicon3 from "../assets/image/Vendor-icons/Vendor-icon2.png";
import vicon4 from "../assets/image/Vendor-icons/Vendor-icon3.png";
import vicon5 from "../assets/image/Vendor-icons/Vendor-icon4.png";
import vicon6 from "../assets/image/Vendor-icons/Vendor-icon5.png";
import vicon7 from "../assets/image/Vendor-icons/Vendor-icon6.png";
import "../assets/css/Explore.css";
import "../assets/css/SUB_left.css";

const Sub_left_component1 = () => {
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
  ];
  const categoriesNew = [
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
      title: "Special and Setup",
    },
    {
      id: 8,
      img: vicon4,
      title: "Special",
    },
  ];

  return (
    <section className="explore-sectionExplore subExploresection">
      <div className="explore-container subExploreContainer">
        {categories.map((item) => (
          <div className="explore-card" key={item.id}>
            <div className="icon-circle Sub-icon">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="explore-container ">
        {categoriesNew.map((item) => (
          <div className="explore-card" key={item.id}>
            <div className="icon-circle Sub-icon">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sub_left_component1;
