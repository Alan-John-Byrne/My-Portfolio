import React, { useState } from "react"
// Carousel Imports:
import Carousel from "react-bootstrap/Carousel";
// Dunnes Expierence Images:
import DunnesImg1 from "../../assets/images/Dun Image 1.jpg"
import DunnesImg2 from "../../assets/images/Dun Image 2.jpg"
import DunnesImg3 from "../../assets/images/Dun Image 3.jpg"

const WorkExpierenceDunnesCarousel: React.FC = () => {

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
            src={DunnesImg1}
            className="carousel-img src-resource"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={DunnesImg2}
            className="carousel-img src-resource"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={DunnesImg3}
            className="carousel-img src-resource"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
      {/* End Of Carousel */}
    </>
  )
}

export default WorkExpierenceDunnesCarousel;
