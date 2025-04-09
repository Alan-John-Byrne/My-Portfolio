import React from 'react';
import HobbiesAndInterestsCarousel from './HobbiesAndInterestsCarousel';
import HobbiesImg from "../../assets/images/hobbies.png";
const HobbiesAndInterestsSection: React.FC = () => {
  return (
    <section id="HobbiesInterests" className="item">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <img
                src={HobbiesImg}
                alt="Hobbies And Interests"
                className="rounded-circle mx-auto d-block src-resource"
                style={{ height: '8rem', width: '10rem' }}
              />
              <h4 className="card-title fw-bold text-center">
                Hobbies & Interests
              </h4>
            </div>
            {/* <!-- Athletics Column --> */}
            <div className="inner-card-div col-xl-6 col-sm-12">
              {/* <!-- Image Carousel For Hobbiesj --> */}
              <div className="card h-100">
                <h5 className="card-header card-title text-center ">
                  Athletics & Fitness
                </h5>
                <HobbiesAndInterestsCarousel />
                <p className="card-text px-5 my-3">
                  I'm big into fitness. I've run for two clubs: Brothers
                  Pearse from 2014 to the end of track season in 2019, and
                  Tallaght Athletics Club from September 2019 to January
                  2020. I've competed in the All-Irelands and won some
                  sprinting medals in the Dublins. I play tennis when I can,
                  but these days I mostly do road running and cross country.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Column End --> */}
          {/* <!-- Books Column--> */}
          <div className="inner-card-div col-xl-6 col-sm-12">
            {/* <!-- Reading Column --> */}
            <div className="card inner-card">
              <div className="card-header">
                <h5 className="card-title text-center">Reading</h5>
              </div>
              <div className="card-body">
                <p className="card-text px-5">
                  I started reading regularly a couple years ago and have
                  kept it up since. You can find some of the books and
                  their genres below if you're interested. It helps me
                  stay focused and grounded during stressful times, like
                  dealing with daily college life. It's turned out to be a
                  pretty rewarding habit.
                </p>
              </div>
              <div className="card-footer">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Thriller
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Run On Red by Noelle W. Ihli</li>
                          <li>
                            The Overnight Guest by Heather Gudenkauf
                          </li>
                          <li>Lock Every Door by Riley Sager</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Horror
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Home Before Dark by Riley Sager</li>
                          <li>
                            The Haunting Of Ashburn House by Riley Sager
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Fantasy
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            Harry Potter And The Philosopher's Stone by JK
                            Rowling
                          </li>
                          <li>
                            Harry Potter And The Chamber Of Secrets by JK
                            Rowling
                          </li>
                          <li>
                            Harry Potter And The Prisoner Of Azkaban by JK
                            Rowling
                          </li>
                          <li>
                            Harry Potter And The Goblet Of Fire by JK
                            Rowling
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Science And Tech
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Exploring Raspberry Pi by Derek Molloy</li>
                          <li>
                            Machine Learning For Absolute Beginners by
                            Oliver Theobald
                          </li>
                          <li>
                            Programming The Raspberry Pi, Third Edition:
                            Getting Started With Python by Simon Monk
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Fact or Fiction?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>What Do They Really Know by M.S. Morgan</li>
                          <li>UFOs by Leslie Kean</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Interpersonal
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Show Your Work! by Austin Kleon</li>
                          <li>Un**** Yourself by Gary John Bishop</li>
                          <li>
                            How To Win Friends & Influence People by Dale
                            Carnegie
                          </li>
                          <li>
                            How To Deal With Difficult People by Gill
                            Hasson
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column End --> */}
        </div>
      </div>
    </section >
  )
}

export default HobbiesAndInterestsSection;
