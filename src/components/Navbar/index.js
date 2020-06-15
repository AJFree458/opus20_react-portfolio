import React from "react";

function Navbar() {
  return (
    <div>
      <header className="cardBg">
        <nav className="navbar navbar-expand-lg border-bottom">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-auto active">
                <a className="nav-link textVis" href="index.html">About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item ml-auto">
              <a className="nav-link textVis" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link textVis" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;