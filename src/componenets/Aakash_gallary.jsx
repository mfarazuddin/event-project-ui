import React from "react";
import img1 from "../assets/image/gallary/imag1.jpg";
import img2 from "../assets/image/gallary/imag2.jpg";
import img3 from "../assets/image/gallary/imag3.jpg";
import img4 from "../assets/image/gallary/imag4.jpg";
import img5 from "../assets/image/gallary/imag5.jpg";
import img6 from "../assets/image/gallary/imag6.jpg";
import img7 from "../assets/image/gallary/imag7.jpg";
import img8 from "../assets/image/gallary/imag8.jpg";
import img9 from "../assets/image/gallary/imag9.jpg";
import img10 from "../assets/image/gallary/imag10.jpg";
import img11 from "../assets/image/gallary/imag11.jpg";
// import img12 from "../assets/image/gallary/imag12.jpg"
import img13 from "../assets/image/gallary/imag13.jpg";
import img14 from "../assets/image/gallary/imag14.jpg";
import img15 from "../assets/image/gallary/imag15.jpg";
import img16 from "../assets/image/gallary/imag16.jpg";
import img17 from "../assets/image/gallary/imag17.jpg";
import img18 from "../assets/image/gallary/imag18.jpg";
import img19 from "../assets/image/gallary/imag19.jpg";
import img20 from "../assets/image/gallary/imag20.jpg";
import img21 from "../assets/image/gallary/imag21.jpg";
import img22 from "../assets/image/gallary/imag22.jpg";
import img23 from "../assets/image/gallary/imag23.jpg";
import "../assets/css/Gallary.css";

// import "./Gallery.css";

function Aakash_gallary() {
  const images = [img1, img2, img3, img4];
  const images1 = [img9, img8, img13, img6, img5];
  const images2 = [img10, img11, img17, img14];
  const images3 = [  img19,img7, img18,img16,img15];
  const images4 = [img20, img21, img7, img23];

  return (
    <section className="gallery-section">
      <h2>
        Our <span>Gallery</span>
      </h2>
      <div className="mainGallaary">
              <div className="gallery sub-gaalary">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`gallery-${index}`} />
        ))}
      </div>
      <div className=" sub-gaalary gallery2">
        {images1.map((img, index) => (
          <img key={index} src={img} alt={`gallery-${index}`} />
        ))}
      </div>
      <div className=" sub-gaalary gallery3">
        {images2.map((img, index) => (
          <img key={index} src={img} alt={`gallery-${index}`} />
        ))}
      </div>
      <div className="sub-gaalary gallery4">
        {images3.map((img, index) => (
          <img key={index} src={img} alt={`gallery-${index}`} />
        ))}
      </div>
      <div className=" sub-gaalary gallery5">
        {images4.map((img, index) => (
          <img key={index} src={img} alt={`gallery-${index}`} />
        ))}
      </div>

      </div>

    </section>
  );
}

export default Aakash_gallary;
