import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary px-3">
        <Link to="/" className="navbar-brand mx-3 fw-bold text-light">
          Exercise Tracker
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              View Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link text-light">
              Create Exercise
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link text-light">
              Create User
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
