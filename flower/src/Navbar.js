import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Flower Identifier
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/products">Home</a>
      </li>
      <li>
        <a href="/about">Help</a>
      </li>
      <li>
        <a href="/contact">Login</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;