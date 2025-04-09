import React, { useState } from "react"
// Carousel Imports:
import Carousel from "react-bootstrap/Carousel";
// TUD Images:
import BrotherPearseAC from "../../assets/images/TAC logo.jpg";
import TallaghtAC from "../../assets/images/BPAC logo.jpg";



const HobbiesAndInterestsCarousel: React.FC = () => {

  // Carousel Stuff:
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Carousel */}
      <Carousel className="mt-3" controls={true} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={TallaghtAC}
            className="carousel-img  card-img-top"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={BrotherPearseAC}
            className="carousel-img  card-img-top"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
      {/* End Of Carousel */}
    </>
  )
}

export default HobbiesAndInterestsCarousel;
