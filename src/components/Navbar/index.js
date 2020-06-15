import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

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
                <Link className="nav-link textVis" to="/">About</Link>
              </li>
              <li className="nav-item ml-auto">
              <Link className="nav-link textVis" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item ml-auto">
                <Link className="nav-link textVis" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;