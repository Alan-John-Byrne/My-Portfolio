function Navbar() {
  return (
    <>
      <nav id="navbar-main" className="navbar navbar-expand-md navbar-dark bg-dark px-4 fixed-top" >
        <div className="container-fluid">
          { /* Navbar Brand */}
          <a id="homeName" className="navbar-brand" href="#">Alan Byrne</a>
          { /* Toggle Button for Collapsible Navbar */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          { /* Navbar Mobile Collapsible Burger menu Content */}
          <div className="collapse navbar-collapse bg-dark" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item text-center">
                <a className="nav-link" href="#Education">Education</a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#Work-Expierence">Work Experience</a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#Projects">Projects</a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#HobbiesInterests">
                  Hobbies & Interests
                </a>
              </li>
              { /* Trigger link for contact modal */}
              <li className="nav-item text-center">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#contactFormModal"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
