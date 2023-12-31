import React, { Fragment } from 'react';
import logo from '../images/logo.com.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
    <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
  <a className="navbar-brand" href="#"><img src={logo} alt="logo..." width="160rem" height="60rem"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">about me</a>
    </li>
      <li className="nav-item">
      <a className="nav-link" href="#">services</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portflio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contacts</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </Fragment>
  )
}

export default Navbar