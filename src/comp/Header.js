import React from 'react';
import logo from '../images/Logo.svg';
import './header.css';

function Header(props) {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg container-fluid mt-2 justify-content-center sticky-top">
        <div className="container text-center">
          <a className="navbar-brand fw-bold" href="/">
            <img src={logo} alt="PrimsCosmic" title="PrimsCosmic" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`offcanvas offcanvas-end full-height ${props.mode === 'light' ? 'offcanvas-light' : 'offcanvas-dark'}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item px-2">
                  <a className="nav-link active text-reset" aria-current="page" href="#main"><b>HOME</b></a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link text-reset" href="#about"><b>ABOUT</b></a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link text-reset" href="#services"><b>SERVICES</b></a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link text-reset" href="#internship"><b>INTERNSHIPS</b></a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link text-reset" href="#contact"><b>CONTACT</b></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="switch">
      <input type="checkbox" className="switch__input" id="Switch" />
      <label className="switch__label" htmlFor="Switch">
        <span className="switch__indicator"></span>
        <span className="switch__decoration"></span>
      </label>
    </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ display: "none" }}>{props.btntext}</label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header; 