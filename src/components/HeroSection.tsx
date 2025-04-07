import React from 'react';
import AlanPic from '../assets/images/Alan Byrne - Original.jpg';
import BannerBackground from '../assets/images/Banner Background.jpg';

const HeroSection: React.FC = () => {

  return (
    <section className="container-fluid py-5 item hero-section" style={{ backgroundImage: `url( ${BannerBackground} )` }}>
      <div
        className="mb-3"
        data-bs-toggle="popover"
        data-bs-trigger="hover focus"
        data-bs-placement="right"
        data-bs-content="Hello! I'm Alan, a Computing with Software Development graduate from TUD Tallaght Campus. Thank you for taking the time to look at my portfolio."
      >
        <img
          id="Alan-Image"
          alt="heroimg"
          src={AlanPic}
          className="rounded-circle img-fluid src-resource"
          data-bs-toggle="modal"
          data-bs-target="#contactFormModal"
        />
      </div>
      <div className="row g-md-5 herolinks text-center">
        <div className="col-md-6">
          <a href="https://www.linkedin.com/in/byrne-alan/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="col-md-6">
          <a href="https://github.com/x00167885" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
