import { forwardRef } from "react";
import "./Cards.css"; // Ensure Cards.css is imported
import { FiUpload } from "react-icons/fi";
import { NavLink } from "react-router-dom";
export const Cards = forwardRef(({ cardsToDisplay }, ref) => {
  return (
    <>
      <div className="cards-grid scrollbar-hide" ref={ref}>
        {cardsToDisplay.map((card, index) => (
          <div key={index} className="experience-card">
            <NavLink to={`/experience/${card.id}`}>
              <img src={card.image} alt={card.title} className="card-image" />
            </NavLink>
            {card.type === "Popular" && (
              <div className="card-popular-tag">Popular</div>
            )}
            {card.type === "Original" && (
              <div className="card-original-tag">Original</div>
            )}
            <div className="card-heart-icon-wrapper">
              {/* <svg
                className="card-heart-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 100 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg> */}
              <FiUpload className="upload-icon" />
            </div>
            <div className="card-content">
              <p className="card-title">{card.title}</p>
              <p className="card-details">
                <p>{card.location && `${card.location} `}</p>
                From {card.price} / {card.guestType}
                {card.rating && (
                  <span className="card-rating"> {card.rating}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
