import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "/logo.svg";
import Bell from "/bell-2.png";
import { FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "./Navbar2.css";
// import Calendar from "./calender";

const Navbar = () => {
  const [hideTop, setHideTop] = useState(false);
  const [compactSearch, setCompactSearch] = useState(false);
  const [showDestinationPopup, setShowDestinationPopup] = useState(false);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHideTop(true);
        setCompactSearch(true);
      } else {
        setHideTop(false);
        setCompactSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExpand = () => {
    setHideTop(false);
    setCompactSearch(false);
  };

  return (
    <>
      {/* The header adjusts its height based on 'hideTop' state */}
      <header className={`${hideTop ? "shrink" : ""} header`}>
        {/* New wrapper to help with vertical centering and content flow */}
        <div className="navbar-content-wrapper">
          <div className="navbar_container">
            <div className="navbar_logo">
              <img src={Logo} alt="AirBnb Logo" />
            </div>

            <div className="navbar_menu">
              <ul className="navbar_menu_list">
                <NavLink to="/become-a-host">
                  <li className="navbar_menu_list_item">Become a Host</li>
                </NavLink>
                <li>
                  <FiGlobe /> {/* Global icon */}
                </li>
                <li>
                  <GiHamburgerMenu /> {/* Hamburger menu icon */}
                </li>
              </ul>
            </div>
          </div>

          {/* The middle section now also gets a 'scrolled' class for position adjustments */}
          <div className="navbar_middle_section">
            {/* This top part of the middle section fades out on scroll */}
            <div
              className={`navbar_middle_top transition-navbar-top ${
                hideTop ? "shrink-and-fade" : ""
              }`}
            >
              <div className="navbar_middle_top_item homes">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <img
                    className="home-icon"
                    src="https://img.icons8.com/fluency/48/home-page.png"
                    alt="home-page"
                  />
                  Homes
                </NavLink>
              </div>
              <div className="navbar_middle_top_item experiences">
                <NavLink
                  to="/experiences"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <img
                    className="balloon-icon"
                    src="https://img.icons8.com/3d-fluency/94/hot-air-balloon.png"
                    alt="hot-air-balloon"
                  />
                  Experiences
                </NavLink>
              </div>
              <div className="navbar_middle_top_item services">
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <img className="bell-icon" src={Bell} alt="Services Bell" />
                  Services
                </NavLink>
              </div>
            </div>

            {/* The main search bar section */}
            <div
              className={`navbar_middle_bottom ${
                hideTop ? "shift-up scrolled" : ""
              } ${compactSearch ? "compact" : ""}`}
            >
              <div
                className={`navbar_middle_bottom_field ${
                  hideTop ? "shrink-padding" : ""
                }`}
                onClick={handleExpand}
              >
                <p>
                  {hideTop ? (
                    <>
                      {/* <img
                        className="small-home-icon"
                        src="https://img.icons8.com/fluency/48/home-page.png"
                        alt="home-page"
                      />{" "} */}
                      Anywhere
                    </>
                  ) : (
                    "Where"
                  )}
                </p>
                <div
                  className="input-wrapper"
                  onFocus={() => setShowDestinationPopup(true)}
                  onBlur={() => setShowDestinationPopup(false)}
                  tabIndex={0}
                >
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className={`${hideTop ? "hidden" : ""}`}
                  />
                </div>
              </div>
              <div
                className={`navbar_middle_bottom_field ${
                  !hideTop ? "" : "hidden"
                }`}
                onClick={handleExpand}
              >
                <p>Check in</p>
                <h5 className={`${hideTop ? "hidden" : ""}`}>Add dates</h5>
              </div>
              <div
                className={`navbar_middle_bottom_field ${
                  hideTop ? "shrink-padding" : ""
                }`}
                onClick={handleExpand}
              >
                <p>{hideTop ? "Anytime" : "Check out"}</p>
                <h5 className={`${hideTop ? "hidden" : ""}`}>Add dates</h5>
              </div>
              <div
                className={`navbar_middle_bottom_field guests ${
                  hideTop ? "shrink-padding shrink-guests" : ""
                }`}
                onClick={() => {
                  handleExpand();
                  setShowGuestPopup(true);
                }}
              >
                <p>{hideTop ? "Add guests" : "Who"}</p>
                <div
                  className="input-wrapper"
                  onFocus={() => setShowGuestPopup(true)}
                  onBlur={() => setShowGuestPopup(false)}
                  tabIndex={0}
                >
                  <input
                    type="number"
                    placeholder="Add guests"
                    className={`${hideTop ? "hidden" : ""}`}
                  />
                </div>
              </div>
              <div
                className={`navbar_search_icon ${hideTop ? "shrink-icon" : ""}`}
              >
                <FaSearch className="search-icon" />
              </div>
            </div>
            {showDestinationPopup && (
              <div
                className="destination-popup"
                tabIndex={0}
                onBlur={() => setShowDestinationPopup(false)}
              >
                <h4>Suggested destinations</h4>
                <ul>
                  <li onClick={() => navigate("*")}>
                    <span className="popup-icon">📍</span>
                    <div>
                      <strong>Nearby</strong>
                      <br />
                      <span>Find what’s around you</span>
                    </div>
                  </li>
                  <li onClick={() => navigate("*")}>
                    <span className="popup-icon">🏰</span>
                    <div>
                      <strong>London, United Kingdom</strong>
                      <br />
                      <span>Because your wishlist has stays in London</span>
                    </div>
                  </li>
                  <li onClick={() => navigate("*")}>
                    <span className="popup-icon">🏖️</span>
                    <div>
                      <strong>Lekki, Nigeria</strong>
                      <br />
                      <span>For its seaside allure</span>
                    </div>
                  </li>
                  <li onClick={() => navigate("*")}>
                    <span className="popup-icon">🗼</span>
                    <div>
                      <strong>Toronto, Canada</strong>
                      <br />
                      <span>For sights like CN Tower</span>
                    </div>
                  </li>
                  <li onClick={() => navigate("*")}>
                    <span className="popup-icon">🌊</span>
                    <div>
                      <strong>Mississauga, Canada</strong>
                      <br />
                      <span>For a trip abroad</span>
                    </div>
                  </li>
                  <li onClick={() => navigate("*")}>
                    <span className="popup-icon">🏙️</span>
                    <div>
                      <strong>Ikeja, Nigeria</strong>
                      <br />
                      <span>Near you</span>
                    </div>
                  </li>
                  <li onClick={() => navigate("*")}>
                    <span className="popup-icon">🏝️</span>
                    <div>
                      <strong>Accra, Ghana</strong>
                      <br />
                      <span>Popular beach destination</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {showGuestPopup && (
              <div
                className="guests-popup"
                tabIndex={0}
                onBlur={() => setShowGuestPopup(false)}
              >
                <h4>Guests</h4>
                <ul>
                  <li onClick={(e) => e.preventDefault()}>
                    <span className="popup-icon">🧍</span>
                    <div>
                      <strong>Adults</strong>
                      <br />
                      <span>Ages 13 or above</span>
                    </div>
                    <div className="counter">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </li>
                  <li onClick={(e) => e.preventDefault()}>
                    <span className="popup-icon">🧒</span>
                    <div>
                      <strong>Children</strong>
                      <br />
                      <span>Ages 2–12</span>
                    </div>
                    <div className="counter">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </li>
                  <li onClick={(e) => e.preventDefault()}>
                    <span className="popup-icon">👶</span>
                    <div>
                      <strong>Infants</strong>
                      <br />
                      <span>Under 2</span>
                    </div>
                    <div className="counter">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </li>
                  <li onClick={(e) => e.preventDefault()}>
                    <span className="popup-icon">🐾</span>
                    <div>
                      <strong>Pets</strong>
                      <br />
                      <span>Bringing a service animal?</span>
                    </div>
                    <div className="counter">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* This div provides scrollable content to demonstrate the fixed navbar */}
      {/* <div className="main"></div> */}
      {/* <Calendar /> */}
    </>
  );
};

export default Navbar;
