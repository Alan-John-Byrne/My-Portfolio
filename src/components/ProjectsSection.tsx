import React from 'react';
const ProjectsSection: React.FC = () => {
  return (
    <section id="Projects" className="item">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <img
                src="assets/images/Cogs.jpg"
                alt="Graduation Hat"
                className="mx-auto d-block src-resource"
                style={{ height: '8rem', width: '10rem' }}
              />
              <h4 className="card-title fw-bold text-center mb-3">Projects</h4>
            </div>
            <div className="inner-card-div col-xl-3 col-md-6 col-sm-12">
              <div className="card h-100 inner-card">
                <div className="card-header d-flex justify-content-center">
                  <img
                    src="assets/images/GTU.png"
                    className="card-img-top rounded-circle p-4"
                    alt="GTU"
                    style={{ height: '10rem', width: '10rem' }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title text-center blockquote">GTU</div>
                  <p className="card-text">
                    GTU or 'Gamer Time Universal' was a project I worked on
                    in my second year of college with two friends. It was an
                    ecommerce app for buying games online. I developed
                    features like randomly generated vouchers sent to
                    customers by email after certain purchases, and added a
                    search bar. We built it using the Django Web Framework,
                    consuming also the stripe API.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button disabled className="btn btn-info">
                    Preview Unavailable
                  </button>
                </div>
              </div>
            </div>
            <div className="inner-card-div col-xl-3 col-md-6 col-sm-12">
              <div className="card h-100 inner-card">
                <div className="card-header d-flex justify-content-center">
                  <img
                    src="assets/images/IBM.png"
                    className="card-img-top rounded p-4"
                    alt="GTU"
                    style={{ height: '10rem', width: '10rem' }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title text-center blockquote">IBM</div>
                  <p className="card-text">
                    I worked on a software development project called
                    Jira-Collab in collaboration with IBM for my final year
                    thesis. It was a valuable experience to work with a
                    major tech company on a real-world application while
                    completing my degree. The project gave me practical
                    insights into software development in a professional
                    setting.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button disabled className="btn btn-info">
                    Preview Unavailable
                  </button>
                </div>
              </div>
            </div>
            <div className="inner-card-div col-xl-3 col-md-6 col-sm-12">
              <div className="card h-100 inner-card">
                <div className="card-header d-flex justify-content-center">
                  <img
                    src="assets/images/Pexels.png"
                    className="card-img-top rounded p-4"
                    alt="GTU"
                    style={{ height: '10rem', width: '10rem' }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title text-center blockquote">
                    Pexels
                  </div>
                  <p className="card-text">
                    I built an application which consumes the Pexels API
                    using Microsofts new Blazor WebAssembly C# Framework.
                    Pexels is a place where photographers and videoographers
                    upload and provide royalty free media content that
                    content creators anyone can use for their own projects.
                    My application is there to simplify the searching of
                    said videos and or photos.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <a
                    href="https://x00167885.github.io/CA3_Ent_App_Dev/"
                    target="_blank"
                  >
                    <button className="btn btn-info">Preview</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="inner-card-div col-xl-3 col-md-6 col-sm-12">
              <div className="card h-100 inner-card">
                <div className="card-header d-flex justify-content-center">
                  <img
                    src="assets/images/John Hopkins University.png"
                    className="card-img-top rounded p-4"
                    alt="GTU"
                    style={{ height: '10rem', width: '10rem' }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title text-center blockquote">
                    John Hopkins Course Showcase
                  </div>
                  <p className="card-text">
                    Early in my software development journey I was not only
                    attending college but undertaking multiple online
                    courses when I could. I found this particular course to
                    be of great benefit when I was trying to grow my web
                    development skills. I wanted to complement my learnings
                    by attempting to apply some of these teachings to a
                    small showcase site where I got to tell you what I did
                    whilst taking the course.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button disabled className="btn btn-info">
                    Preview Unavailable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
