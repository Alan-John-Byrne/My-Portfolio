import React, { useState } from "react"
// Carousel Imports:
import Carousel from "react-bootstrap/Carousel";
// TUD Images:
import TUDLogo from "../../assets/images/TUD Logo.png";
import TUDImg1 from "../../assets/images/TUD Image 1.jpg";
import TUDImg2 from "../../assets/images/TUD Image 2.png";
import TUDImg3 from "../../assets/images/TUD Image 3.jpg";

const EducationCarousel: React.FC = () => {

  // Carousel Stuff:
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Carousel */}
      <Carousel controls={true} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={TUDLogo}
            className="carousel-img  card-img-top"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TUDImg1}
            className="carousel-img  card-img-top"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TUDImg2}
            className="carousel-img  card-img-top"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TUDImg3}
            className="carousel-img src-resource card-img-top"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
      {/* End Of Carousel */}
    </>
  )
}

export default EducationCarousel;
