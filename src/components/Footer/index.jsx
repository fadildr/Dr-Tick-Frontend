import React from "react";
import "./index.css";
import logo from "../../assets/img/icon.png";

export default function Footer() {
  return (
    <>
      {/* Hello world */}
      <footer
        className="
    footer
    container
    justify-content-center
    align-items-center
    text-center
   mt-3
  
   w-100
  "
      >
        <div className="container-footer w-100 ">
          <div className="row mx-3">
            <div className="col-md-4 pr-md-5">
              <a href="#" className="footer-logo d-block mb-3">
                <img src={logo} alt="logo" />
              </a>
              <div className="text-icon">
                <p className="desc-left">Find events you love with our</p>
                <ul className="social list-unstyled">
                  <li>
                    <a href="#" className="icon">
                      <span className="icon-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <h3>Dr-Tick</h3>
              <ul className="list-unstyled nav-links">
                <li>
                  <a href="#" className="text-list">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Features</h3>
              <ul className="list-unstyled nav-links">
                <li>
                  <a href="#" className="text-list">
                    Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Create Event
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Discover
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Company</h3>
              <ul className="list-unstyled nav-links">
                <li>
                  <a href="#" className="text-list">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Term of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Privacy Police
                  </a>
                </li>
                <li>
                  <a href="#" className="text-list">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 text-left">
              <div className="copyright mt-2 pt-2">
                <p>©2020 Dr-Tick All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
