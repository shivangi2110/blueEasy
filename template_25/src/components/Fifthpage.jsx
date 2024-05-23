import React from "react";

const Fifthpage =()=>{
    return(
        <>
        <div className="hero group">
      <div className="nav-bar group">
        <p className="blueasy">
          blu<span className="color4bcaff">e</span>asy
        </p>
        <nav className="navigation group">
          <ul className="navigation">
            <li>
              <a className="active-holder-2">Home</a>
            </li>
            <li>
              <a href="#service" className="services-3">
                Services
              </a>
            </li>
            <li>
              <a href="#features" className="features">
                Features
              </a>
            </li>
            <li>
              <a href="#port" className="portfolio-3">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#cont" className="contact-3">
                Contact
              </a>
            </li>
          </ul>
          <button className="menu-btn" onclick="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </nav>
      </div>
      <div className="highlight-holder">
        “I’m looking for the unexpected.
        <br />
        I’m looking for things I’ve never seen before.”
      </div>
    </div>
        </>
    )
}
export default Fifthpage