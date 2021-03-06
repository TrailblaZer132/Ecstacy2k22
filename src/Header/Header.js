import React, { Component } from "react";
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">
      <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
    </a>
            <a class="navbar-brand" href="#">
              <h1 className="display-4">Ecstasy 2022</h1> 
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link1
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link2
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link3
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
