import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <Link className="navbar-brand" to="/">React Django Blog</Link>
      <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
