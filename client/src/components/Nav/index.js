import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark" id="dark">

      <img src="../../assets/images/route420.png" alt="logo" />

      <a className="navbar-brand" href="/" id="dark">Route 420</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/" id="link">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/locations" id="link"> Locations </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user" id="link"> Account</a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav;
