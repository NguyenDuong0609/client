import React, { useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <!--footer showroom--> */}
        <div className="footer-showroom">
          <div className="row">
            <div className="col-sm-8">
              <h2>Visit our showroom</h2>
              <p>200 12th Ave, New York, NY 10001, USA</p>
              <p>
                Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm
                - 2 pm
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <a href="#" className="btn btn-clean">
                <span className="icon icon-map-marker"></span> Get directions
              </a>
              <div className="call-us h4">
                <span className="icon icon-phone-handset"></span> 333.278.06622
              </div>
            </div>
          </div>
        </div>

        {/* <!--footer links--> */}
        <div className="footer-links">
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <h5>Browse by</h5>
              <ul>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2">
              <h5>Recources</h5>
              <ul>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2">
              <h5>Our company</h5>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6">
              <h5>Sign up for our newsletter</h5>
              <p>
                <i>
                  Add your email address to sign up for our monthly emails and
                  to receive promotional offers.
                </i>
              </p>
              <div className="form-group form-newsletter">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Email address"
                />
                <input type="submit" className="btn btn-clean btn-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* <!--footer social--> */}

        <div className="footer-social">
          <div className="row">
            <div className="col-sm-6">
              <a
                href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                target="_blank"
              >
                <i className="fa fa-download"></i> Download Mobel
              </a>{" "}
              &nbsp; | <a href="#">Sitemap</a> &nbsp; | &nbsp;{" "}
              <a href="#">Privacy policy</a>
            </div>
            <div className="col-sm-6 links">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
