import React from "react";
import wedding from "../assets/image/Vendor/vendor1.jpg";
import corporate from "../assets/image/Vendor/vendor2.jpg";
import religious from "../assets/image/Vendor/vendor3.jpg";
import celebration from "../assets/image/Vendor/vendor4.jpg";
import "../assets/css/Event_vendor.css";

const Event_vendor = () => {
  const data = [
    {
      id: 1,
      img:corporate ,
      discount: "Upto 10% Off",
      type: "Corporate Events",
    },
    {
      id: 2,
      img:religious ,
      discount: "Upto 5% Off",
      type: "Wedding Events",
    },
    {
      id: 3,
      img: wedding,
      discount: "Upto 20% Off",
      type: "Religious Events",
    },
    {
      id: 4,
      img: celebration,
      discount: "Upto 15% Off",
      type: "Celebrations Events",
    },
  ];

  return (
    <section className="explore-section">
      <h2>Explore Vendors By Event Type</h2>
      <p className="subtitle">
        Easily browse top vendors for weddings, corporate events, parties, and more.
      </p>

      <div className="card-container">
        {data.map((item) => (
          <div className="carda" key={item.id}>
            <img src={`${item.img}`} alt={item.type} />
            <div className="card-content">
              <h3>{item.discount}</h3>
              <button>{item.type}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event_vendor;