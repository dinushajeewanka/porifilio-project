import React from 'react';
import logo from '../logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
< div className="container">
  <a class="navbar-brand" href="#/"><img className ="logo" src={logo} alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link ml-auto" href="#/">Home<span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link ml-auto" href="#/">Link</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
