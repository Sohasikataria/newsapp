import React, { Component } from 'react';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <div className="me-auto">
              <a className="navbar-brand" href="/">NewsMonkey</a>
            </div>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="nav nav-underline mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">Latest</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">World</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">shows</a>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
