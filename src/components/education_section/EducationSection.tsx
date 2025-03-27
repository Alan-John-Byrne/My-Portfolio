function EducationSection() {
  return (
    <>
      { /*EDUCATION SECTION */}
      <section id="Education" className="item">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="assets/images/Graduation Hat.png"
                  alt="Graduation Hat"
                  className="rounded-circle mx-auto d-block src-resource"
                  style={{ height: '10rem', width: '10rem' }}
                />
                <h4 className="card-title fw-bold text-center mb-4">Education</h4>
              </div>
              { /*Certificates Column */}
              <div className="inner-card-div col-lg-6 col-md-12">
                <div className="card inner-card h-100">
                  <div className="card-header">
                    <h5 className="text-center">Certificates</h5>
                  </div>
                  <div
                    className="card-body d-flex justify-content-center align-items-center"
                  >
                    <div className="list-group">
                      <a
                        href="https://courses.nvidia.com/certificates/0468996f54864b959d3548c6538163c1/"
                        target="_blank"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">Fundamentals of Deep Learning</h6>
                          <small className="text-muted">Nvidia</small>
                          <img
                            src="assets/images/Nvidia Logo.jpg"
                            className="rounded"
                            style={{ width: '3rem', height: '3rem' }}
                            alt=""
                          />
                        </div>
                        <small>Date Earned: March 14th, 2023</small>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/byrne-alan/overlay/1635502398298/single-media-viewer/?profileId=ACoAADK4RokBxrrlBaKCtyIExSg0HAvXKirsxV8"
                        target="_blank"
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">
                            Certificate of Excellence AWS Cloud Computing
                            Competition
                          </h6>
                          <small className="text-muted">
                            Worldskills Ireland
                          </small>
                          <img
                            src="assets/images/World Skills Ireland Logo.jpg"
                            className="rounded"
                            style={{ width: '3rem', height: '3rem' }}
                            alt=""
                          />
                        </div>
                        <small>Date Earned: September, 2023</small>
                      </a>
                      <a
                        href="https://www.coursera.org/account/accomplishments/verify/WLPZ63CWZUHN"
                        target="_blank"
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">
                            HTML, CSS, and JavaScript htmlFor Web Developers
                          </h6>
                          <small className="text-muted">
                            The John Hopkins University
                          </small>
                          <img
                            src="assets/images/John Hopkins University.png"
                            className="rounded"
                            style={{ width: '3rem', height: '3rem' }}
                            alt=""
                          />
                        </div>
                        <small>Date Earned: June 5th, 2021</small>
                      </a>
                      <a
                        href="https://www.codecademy.com/profiles/Bowser2524/certificates/65f0ff88f4fc58e0536b3b51648dff24"
                        target="_blank"
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">C# Course</h6>
                          <small className="text-muted">Codecademy</small>
                          <img
                            src="assets/images/Codecademy Logo.jpg"
                            className="rounded"
                            style={{ width: '3rem', height: '3rem' }}
                            alt=""
                          />
                        </div>
                        <small>Date Earned: May 28, 2022</small>
                      </a>
                      <a
                        href="https://www.codecademy.com/profiles/Bowser2524/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
                        target="_blank"
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">JavaScript Course</h6>
                          <small className="text-muted">Codecademy</small>
                          <img
                            src="assets/images/Codecademy Logo.jpg"
                            className="rounded"
                            style={{ width: '3rem', height: '3rem' }}
                            alt=""
                          />
                        </div>
                        <small>Date Earned: July 8th, 2022</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              { /*Column End */}
              { /*Tallaght TUD Column */}
              <div className="inner-card-div col-lg-6 col-md-12">
                <div className="card inner-card">
                  <div className="card-header">
                    { /*Image Carousel htmlFor TUD Tallaght assets/images */}
                    <div
                      id="carouselExampleControls1"
                      className="carousel carousel-dark slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="assets/images/TUD Logo.png"
                            className="carousel-img src-resource card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/images/TUD Image 1.jpg"
                            className="carousel-img src-resource card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/images/TUD Image 2.png"
                            className="carousel-img src-resource card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/images/TUD Image 3.jpg"
                            className="carousel-img src-resource card-img-top"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls1"
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
                        data-bs-target="#carouselExampleControls1"
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
                  <h5 className="mt-4 text-center">
                    Technological University Dublin, Tallaght Campus
                  </h5>
                  <p className="card-text" style={{ padding: '0rem 3rem 0rem 3rem' }}>

                    The Tallaght campus, situated in the southwest of Dublin
                    City, spans an 18-hectare site bordered by Old Blessington
                    Road, Belgard Road, and Greenhills Road in Tallaght,
                    Dublin 24. Established in 1992, the campus hosts over
                    5,000 undergraduate students.
                  </p>
                  <div className="card-footer">
                    { /* Show More */}
                    <div className="d-flex justify-content-center my-3">
                      <button
                        id="showMoreBtn"
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ShowGrades"
                        aria-expanded="false"
                        aria-controls="ShowGrades"
                      >
                        Show Grades & Skills
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            { /* Column End */}
            { /* Show More Section Of Tallaght TUD */}
            <div id="ShowGrades" className="row collapse mt-4">
              <div className="inner-card-div col-lg-6 col-md-12">
                <div className="card inner-card h-100">
                  { /* Grades */}
                  <div className="card-header">
                    <h2 className="text-center">Grades: GPA 3.96</h2>
                  </div>
                  <div className="card-body">
                    <div id="tableContainer" className="container">
                      <nav
                        aria-label="..."
                        className="d-flex justify-content-center"
                      >
                        <ul className="pagination pagination-md">
                          <li className="page-item">
                            <button className="page-link">Year 4</button>
                          </li>
                          <li className="page-item">
                            <button className="page-link">Year 3</button>
                          </li>
                          <li className="page-item">
                            <button className="page-link">Year 2</button>
                          </li>
                          <li className="page-item">
                            <button className="page-link">Year 1</button>
                          </li>
                        </ul>
                      </nav>
                      <table className="table grade-table">
                        { /* Table is populated dynamically with Grade Data */}
                        <thead></thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-card-div col-lg-6 col-md-12">
                <div className="card inner-card h-100">
                  { /* Skills */}
                  <div className="card-header">
                    <h2 className="text-center">Skills</h2>
                  </div>
                  <div
                    className="card-body d-flex justify-content-center align-items-center"
                  >
                    <p className="card-text">
                      Below is a brief overview of how I evaluate and measure
                      my skillset from an overall perspective. This is not a
                      definitive measure of my abilities but provides an idea
                      of how I perceive my strengths across different
                      categories. While I have personal preferences that may
                      influence my assessment, this should give you a general
                      sense of my capabilities.
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="progress-group">
                      <label htmlFor="webDevelopment">Web Development</label>
                      <div className="progress my-2" id="webDevelopment">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-group">
                      <label htmlFor="mlDataScience">
                        Machine Learning & Data Science
                      </label>
                      <div className="progress my-2" id="mlDataScience">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-group">
                      <label htmlFor="mobileDev">
                        Mobile Application Development
                      </label>
                      <div className="progress my-2" id="mobileDev">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-group">
                      <label htmlFor="dataStructuresAlgorithms">
                        Data Structures & Algorithms
                      </label>
                      <div
                        className="progress my-2"
                        id="dataStructuresAlgorithms"
                      >
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EducationSection
