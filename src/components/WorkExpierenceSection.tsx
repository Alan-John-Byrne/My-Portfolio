import React from 'react';

const WorkExpierenceSection: React.FC = () => {
  return (
    <section id="Work-Expierence" className="item">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="assets/images/Laptop PNG White Background.png"
                alt="Graduation Hat"
                className="rounded-circle mx-auto d-block src-resource"
                style={{ height: '11rem', width: '13rem' }}
              />
              <h4 className="card-title fw-bold text-center mb-4">
                Work Expierence
              </h4>
            </div>
            {/* Dunnes Column  */}
            <div className="inner-card-div col-lg-6 col-md-12">
              <div className="card inner-card h-100">
                {/* Image Carousel For Templeogue College */}
                <div className="card-header">
                  <div
                    id="carouselExampleControls4"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/Dun Image 1.jpg"
                          className="carousel-img src-resource"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/Dun Image 2.jpg"
                          className="carousel-img src-resource"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/Dun Image 3.jpg"
                          className="carousel-img src-resource"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls4"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls4"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <h5 className="card-title mt-4 text-center">Dunnes Stores</h5>
                <p className="card-text px-5">
                  I worked for Dunnes Stores from September 2019, through
                  the Covid-19 to Feburary of 2021. Here I assisted
                  customers and kept the shelves stocked. I assisted the
                  managers in taking stock of the latest supply, I worked on
                  checkouts during the busy seasons such as christmas. I
                  worked mostly on the shop floor stocking shelves from
                  frozen, deli, dairy and minerals.
                </p>
                <div
                  className="card-footer d-flex justify-content-center h-100"
                >
                  <button
                    id="roles"
                    type="button"
                    className="btn btn-secondary"
                  >
                    View Roles Undertaken
                  </button>
                  <div id="rolesContent" style={{ display: 'none' }}>
                    <ul>
                      <li>Assisting Managers in monthly stock counting.</li>
                      <li>
                        Carrying out monthly special offer stock change
                        overs.
                      </li>
                      <li>Working on checkouts.</li>
                      <li>
                        Working between frozen, dairy and deli sections.
                      </li>
                      <li>Assisting with customer queries.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Column END  */}
            {/* GridBeyond Column */}
            <div className="inner-card-div col-lg-6 col-md-12">
              <div className="card inner-card h-100">
                {/* Image Carousel For TUD Tallaght assets/images */}
                <div className="card-header">
                  <div
                    id="carouselExampleControls3"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/Grid Image 1.jpg"
                          className="carousel-img src-resource"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/Grid Image 2.jpg"
                          className="carousel-img src-resource"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/Grid Image 3.png"
                          className="carousel-img src-resource"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls3"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls3"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <h5 className="card-title text-center mt-4">GridBeyond</h5>
                <p className="card-text px-5">
                  I worked with a team of 16 people, including data
                  scientists, data engineers, data architects, cloud
                  engineers, systems analysts and contractors. During this
                  time I gained so much insight into the day to day running
                  of an IT department. I had the oppurtunity to partake in
                  data admisitrative work. A phenomenal expierence all
                  round.
                </p>
                <div
                  className="card-footer d-flex justify-content-center h-100"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Show Recommendations
                  </button>
                </div>
              </div>
            </div>
            {/* Column END */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExpierenceSection;
