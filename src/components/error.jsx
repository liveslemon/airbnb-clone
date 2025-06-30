import React from "react";
import { Link } from "react-router-dom";
import "./error.css";
import logo from "/logo.svg";
import Girl from "/girl.gif";
// import sadGirl from "/sad-girl.jpg";

const Error = () => {
  return (
    <>
      <div className="error-page-container">
        <header>
          <div>
            <Link to="/">
              <img src={logo} alt="" className="error-logo" />
            </Link>
          </div>
        </header>
        <div className="container">
          <div className="error-content">
            <h1 className="error-title">Oops!</h1>
            <h2 className="error-subtitle">
              We can't seem to find the page you're looking for.
            </h2>
            <p className="error-code">Error code: 404</p>
            <p className="error-links-text">
              Here are some helpful links instead:
            </p>
            <ul className="error-links-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/search">Search</a>
              </li>
              <li>
                <a href="/help">Help</a>
              </li>
              <li>
                <a href="/traveling">Traveling on Airbnb</a>
              </li>
              <li>
                <a href="/hosting">Hosting on Airbnb</a>
              </li>
              <li>
                <a href="/trust-safety">Trust &amp; Safety</a>
              </li>
              <li>
                <a href="/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="error-image">
            {/* <img src={sadGirl} alt="" className="error-sad-girl"/> */}
            <img
              src={Girl}
              alt=""
              className="error-sad-girl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
