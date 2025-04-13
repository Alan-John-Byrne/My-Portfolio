import React, { useState } from "react"
// Carousel Imports:
import Carousel from "react-bootstrap/Carousel";
// GridBeyond Expierence Images:
import GridBeyondImg1 from "../../assets/images/Grid Image 1.jpg"
import GridBeyondImg2 from "../../assets/images/Grid Image 2.jpg"
import GridBeyondImg3 from "../../assets/images/Grid Image 3.png"

const GridBeyondCarousel: React.FC = () => {

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
            src={GridBeyondImg1}
            className="carousel-img src-resource"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={GridBeyondImg2}
            className="carousel-img src-resource"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={GridBeyondImg3}
            className="carousel-img src-resource"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
      {/* End Of Carousel */}
    </>
  )
}

export default GridBeyondCarousel;
