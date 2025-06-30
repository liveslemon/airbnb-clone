import React, { useState } from "react";
import "../styles/Footer.css";
import countries from "world-countries";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import UniqueStaysSection from "./UniqueStaySection";
const Footer = () => {
  const defaultCountry = countries.find((c) => c.cca2 === "US") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState({
    name: defaultCountry.name.common,
    language: defaultCountry.languages
      ? Object.values(defaultCountry.languages)[0]
      : "",
    currency: defaultCountry.currencies
      ? Object.values(defaultCountry.currencies)[0].name
      : "",
    flag: defaultCountry.flag || "",
  });
  const [showLangModal, setShowLangModal] = useState(false);
  const [showCurrModal, setShowCurrModal] = useState(false);
  const [searchLang, setSearchLang] = useState("");
  const [searchCurr, setSearchCurr] = useState("");

  const allLanguages = Array.from(
    new Set(
      countries.flatMap((c) => (c.languages ? Object.values(c.languages) : []))
    )
  );

  const allCurrencies = Array.from(
    new Set(
      countries.flatMap((c) =>
        c.currencies
          ? Object.values(c.currencies).map(
              (cur) => cur.name + (cur.symbol ? ` (${cur.symbol})` : "")
            )
          : []
      )
    )
  );

  const filteredLanguages = allLanguages.filter((lang) =>
    lang.toLowerCase().includes(searchLang.toLowerCase())
  );

  const filteredCurrencies = allCurrencies.filter((curr) =>
    curr.toLowerCase().includes(searchCurr.toLowerCase())
  );

  return (
    <>
      <UniqueStaysSection />
      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Support</h4>
            <a href="https://www.airbnb.com/help " target="_self">
              Help Center
            </a>
            <a href="https://www.airbnb.com/aircover" target="_self">
              AirCover
            </a>
            <a
              href="https://www.airbnb.com/against-discrimination"
              target="_self"
            >
              Anti-discrimination
            </a>
            <a href="https://www.airbnb.com/accessibility" target="_self">
              Disability support
            </a>
            <a
              href="https://www.airbnb.com/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19"
              target="_self"
            >
              Cancellation Options
            </a>
            <a href="https://www.airbnb.com/neighbors" target="_self">
              Report neighborhood concerns
            </a>
          </div>
          <div>
            <h4>Hosting</h4>
            <a href="https://www.airbnb.com/host/homes" target="_self">
              Airbnb your home
            </a>
            <a href="https://www.airbnb.com/aircover-for-hosts" target="_self">
              AirCover for Hosts
            </a>
            <a
              href="https://www.airbnb.com/resources/hosting-homes"
              target="_self"
            >
              Hosting resources
            </a>
            <a href="https://community.withairbnb.com/" target="_self">
              Community forum
            </a>
          </div>
          <div>
            <h4>Airbnb</h4>
            <a href="https://news.airbnb.com/" target="_self">
              Newsroom
            </a>
            <a href="https://careers.airbnb.com/" target="_self">
              Careers
            </a>
            <a href="https://investors.airbnb.com/" target="_self">
              Investors
            </a>
            <a href="https://www.airbnb.com/giftcards" target="_self">
              Gift cards
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-left">
            <p>© {new Date().getFullYear()} Airbnb, Inc.</p>
            <a
              href="https://www.airbnb.com/terms/privacy_policy"
              target="_self"
            >
              Privacy
            </a>
            <a href="https://www.airbnb.com/terms" target="_self">
              Terms
            </a>
            <a target="_self" href="https://www.airbnb.com/sitemaps/v2">
              Sitemap
            </a>
          </div>

          <div className="footer-right">
            <button
              className="selector globe-selector"
              onClick={() => setShowLangModal(true)}
            >
              <SlGlobe /> {selectedCountry.language}
            </button>
            <span className="selector" onClick={() => setShowCurrModal(true)}>
              {selectedCountry.currency}
            </span>
            {/* <a href="https://www.facebook.com/airbnb"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="https://twitter.com/airbnb"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="https://instagram.com/airbnb"><img src={instagramIcon} alt="Instagram" /></a> */}
            <FaFacebook />
            <FaXTwitter />
            <IoLogoInstagram />
          </div>
        </div>

        {showLangModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowLangModal(false)}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <label className="translation-toggle">
                  <span>Translation</span>
                  <div className="toggle-switch">
                    <input type="checkbox" checked readOnly />
                    <span className="slider" />
                  </div>
                  <small>
                    Automatically translate descriptions and reviews to English.
                  </small>
                </label>
                <h2>Choose a language and region</h2>
              </div>

              <input
                type="text"
                className="modal-search"
                placeholder="Search language..."
                value={searchLang}
                onChange={(e) => setSearchLang(e.target.value)}
                autoFocus
              />

              <div className="modal-grid">
                {filteredLanguages.map((lang) => (
                  <div
                    key={lang}
                    className="modal-grid-item"
                    onClick={() => {
                      setSelectedCountry((prev) => ({
                        ...prev,
                        language: lang,
                      }));
                      setShowLangModal(false);
                    }}
                  >
                    <div>{lang}</div>
                  </div>
                ))}
                {filteredLanguages.length === 0 && (
                  <div className="modal-list-item empty">No results found.</div>
                )}
              </div>
            </div>
          </div>
        )}

        {showCurrModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowCurrModal(false)}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Choose a currency</h2>
              <input
                type="text"
                className="modal-search"
                placeholder="Search currency..."
                value={searchCurr}
                onChange={(e) => setSearchCurr(e.target.value)}
                autoFocus
              />

              <div className="modal-grid">
                {filteredCurrencies.map((curr) => (
                  <div
                    key={curr}
                    className="modal-grid-item"
                    onClick={() => {
                      setSelectedCountry((prev) => ({
                        ...prev,
                        currency: curr,
                      }));
                      setShowCurrModal(false);
                    }}
                  >
                    {curr}
                  </div>
                ))}
                {filteredCurrencies.length === 0 && (
                  <div className="modal-list-item empty">No results found.</div>
                )}
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
