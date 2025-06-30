import React, { useState } from "react";
import "../styles/UniqueStay.css";

const uniqueStaysLinks = [
  {
    name: "Cabins",
    country: "United States",
    url: "https://www.airbnb.com/s/Cabins--United-States/homes",
  },
  {
    name: "Treehouses",
    country: "United States",
    url: "https://www.airbnb.com/s/Treehouses--United-States/homes",
  },
  {
    name: "Glamping",
    country: "United States",
    url: "https://www.airbnb.com/s/Glamping--United-States/homes",
  },
  {
    name: "Yurt Rentals",
    country: "United Kingdom",
    url: "https://www.airbnb.com/s/Yurt--United-Kingdom/homes",
  },
  {
    name: "Lakehouses",
    country: "United States",
    url: "https://www.airbnb.com/s/Lakehouses--United-States/homes",
  },
  {
    name: "Private Island Rentals",
    country: "United States",
    url: "https://www.airbnb.com/s/Private-Island--United-States/homes",
  },
  {
    name: "Farm Houses",
    country: "United States",
    url: "https://www.airbnb.com/s/Farm-Houses--United-States/homes",
  },
  {
    name: "Tiny Houses",
    country: "United States",
    url: "https://www.airbnb.com/s/Tiny-Houses--United-States/homes",
  },
  {
    name: "Castle Rentals",
    country: "United States",
    url: "https://www.airbnb.com/s/Castles--United-States/homes",
  },
  {
    name: "Cabin Rentals",
    country: "Australia",
    url: "https://www.airbnb.com/s/Cabin--Australia/homes",
  },
  {
    name: "Beach Houses",
    country: "United States",
    url: "https://www.airbnb.com/s/Beach-Houses--United-States/homes",
  },
  {
    name: "Houseboats",
    country: "United States",
    url: "https://www.airbnb.com/s/Houseboats--United-States/homes",
  },
  {
    name: "Luxury Cabins",
    country: "United Kingdom",
    url: "https://www.airbnb.com/s/Luxury-Cabins--United-Kingdom/homes",
  },
  // Extra links for dropdown
  {
    name: "Villas",
    country: "Italy",
    url: "https://www.airbnb.com/s/Villas--Italy/homes",
  },
  {
    name: "Cottages",
    country: "Ireland",
    url: "https://www.airbnb.com/s/Cottages--Ireland/homes",
  },
  {
    name: "Barns",
    country: "United States",
    url: "https://www.airbnb.com/s/Barns--United-States/homes",
  },
  {
    name: "Domes",
    country: "United States",
    url: "https://www.airbnb.com/s/Domes--United-States/homes",
  },
  {
    name: "A-frames",
    country: "United States",
    url: "https://www.airbnb.com/s/A-frames--United-States/homes",
  },
  {
    name: "Shepherd’s huts",
    country: "United Kingdom",
    url: "https://www.airbnb.com/s/Shepherds-Huts--United-Kingdom/homes",
  },
  {
    name: "Earth homes",
    country: "United States",
    url: "https://www.airbnb.com/s/Earth-homes--United-States/homes",
  },
  {
    name: "Windmills",
    country: "Netherlands",
    url: "https://www.airbnb.com/s/Windmills--Netherlands/homes",
  },
  {
    name: "Towers",
    country: "France",
    url: "https://www.airbnb.com/s/Towers--France/homes",
  },
  {
    name: "Caves",
    country: "Spain",
    url: "https://www.airbnb.com/s/Caves--Spain/homes",
  },
  {
    name: "Boats",
    country: "Greece",
    url: "https://www.airbnb.com/s/Boats--Greece/homes",
  },
  {
    name: "Treehouses",
    country: "Brazil",
    url: "https://www.airbnb.com/s/Treehouses--Brazil/homes",
  },
  {
    name: "Igloos",
    country: "Finland",
    url: "https://www.airbnb.com/s/Igloos--Finland/homes",
  },
  {
    name: "Houseboats",
    country: "Netherlands",
    url: "https://www.airbnb.com/s/Houseboats--Netherlands/homes",
  },
  {
    name: "Tiny homes",
    country: "Canada",
    url: "https://www.airbnb.com/s/Tiny-homes--Canada/homes",
  },
  {
    name: "Castles",
    country: "Scotland",
    url: "https://www.airbnb.com/s/Castles--Scotland/homes",
  },
  {
    name: "Riads",
    country: "Morocco",
    url: "https://www.airbnb.com/s/Riads--Morocco/homes",
  },
  {
    name: "Ryokans",
    country: "Japan",
    url: "https://www.airbnb.com/s/Ryokans--Japan/homes",
  },
  {
    name: "Trulli",
    country: "Italy",
    url: "https://www.airbnb.com/s/Trulli--Italy/homes",
  },
  {
    name: "Dammusos",
    country: "Italy",
    url: "https://www.airbnb.com/s/Dammusos--Italy/homes",
  },
  {
    name: "Lighthouses",
    country: "United States",
    url: "https://www.airbnb.com/s/Lighthouses--United-States/homes",
  },
  {
    name: "Mansions",
    country: "United States",
    url: "https://www.airbnb.com/s/Mansions--United-States/homes",
  },
  {
    name: "Tented camps",
    country: "South Africa",
    url: "https://www.airbnb.com/s/Tented-camps--South-Africa/homes",
  },
  {
    name: "Chalets",
    country: "Switzerland",
    url: "https://www.airbnb.com/s/Chalets--Switzerland/homes",
  },
  {
    name: "Pensions",
    country: "Germany",
    url: "https://www.airbnb.com/s/Pensions--Germany/homes",
  },
  {
    name: "Paradores",
    country: "Spain",
    url: "https://www.airbnb.com/s/Paradores--Spain/homes",
  },
  {
    name: "Boutique hotels",
    country: "United States",
    url: "https://www.airbnb.com/s/Boutique-hotels--United-States/homes",
  },
];

const tabData = [
  {
    label: "Unique stays",
    links: uniqueStaysLinks,
  },
  {
    label: "Categories",
    links: [
      {
        name: "Amazing Pools",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A8004",
      },
      {
        name: "Arctic",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A789",
      },
      {
        name: "Camping",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A6348",
      },
      {
        name: "Campers",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A817",
      },
      {
        name: "Castles",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A818",
      },
      {
        name: "Containers",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A819",
      },
      {
        name: "Countryside",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A820",
      },
      {
        name: "Design",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A821",
      },
      {
        name: "Earth homes",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A822",
      },
      {
        name: "Farms",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A823",
      },
      {
        name: "National Parks",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A824",
      },
      {
        name: "Vineyards",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A825",
      },
      {
        name: "OMG!",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A827",
      },
      {
        name: "Tiny homes",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A826",
      },
      {
        name: "Towers",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A828",
      },
      {
        name: "Windmills",
        url: "https://www.airbnb.com/s/homes?category_tag=Tag%3A829",
      },
      { name: "Luxe", url: "https://www.airbnb.com/luxe" },
    ],
  },
  {
    label: "Travel tips & inspiration",
    links: [
      {
        name: "Family travel hub",
        url: "https://www.airbnb.com/e/family-travel",
        subtitle: "Tips and inspiration",
      },
      {
        name: "Family budget travel",
        url: "https://www.airbnb.com/e/family-budget-travel",
        subtitle: "Get there for less",
      },
      {
        name: "Vacation ideas for any budget",
        url: "https://www.airbnb.com/e/6-budget-friendly-family-vacations",
        subtitle: "Make it special without it being expensive",
      },
      {
        name: "Road trips",
        url: "https://www.airbnb.com/resources/road-trips",
        subtitle: "Plan your next adventure",
      },
      {
        name: "Work-friendly stays",
        url: "https://www.airbnb.com/resources/work-friendly",
        subtitle: "Remote work made easy",
      },
      {
        name: "Outdoor Adventure",
        url: "https://www.airbnb.com/e/outdoor-adventure",
        subtitle: "Explore nature with family",
      },
      {
        name: "Pet-friendly travel",
        url: "https://www.airbnb.com/e/resources/pet-friendly",
        subtitle: "Bring your furry friends",
      },
      {
        name: "Romantic getaways",
        url: "https://www.airbnb.com/resources/romantic",
        subtitle: "Trips for two",
      },
    ],
  },
  {
    label: "Airbnb-friendly apartments",
    links: [
      { name: "Find Airbnb-friendly apartments", url: "/apartments/find" },
      { name: "How it works", url: "/apartments/how-it-works" },
      { name: "For property owners", url: "/apartments/owners" },
      { name: "For renters", url: "/apartments/renters" },
      { name: "FAQ", url: "/apartments/faq" },
    ],
  },
];

const airbnbFriendlyCities = [
  {
    name: "Austin Metro",
    subtitle: "Texas",
    url: "https://www.airbnb.com/s/Austin-Metro--Texas--United-States/homes",
  },
  {
    name: "Fort Myers",
    subtitle: "Florida",
    url: "https://www.airbnb.com/s/Fort-Myers--Florida--United-States/homes",
  },
  {
    name: "Palm Beach",
    subtitle: "Florida",
    url: "https://www.airbnb.com/s/Palm-Beach--Florida--United-States/homes",
  },
  {
    name: "Phoenix",
    subtitle: "Arizona",
    url: "https://www.airbnb.com/s/Phoenix--Arizona--United-States/homes",
  },
  {
    name: "Las Vegas",
    subtitle: "Nevada",
    url: "https://www.airbnb.com/s/Las-Vegas--Nevada--United-States/homes",
  },
  {
    name: "Orlando",
    subtitle: "Florida",
    url: "https://www.airbnb.com/s/Orlando--Florida--United-States/homes",
  },
  {
    name: "Miami",
    subtitle: "Florida",
    url: "https://www.airbnb.com/s/Miami--Florida--United-States/homes",
  },
  {
    name: "Los Angeles",
    subtitle: "California",
    url: "https://www.airbnb.com/s/Los-Angeles--California--United-States/homes",
  },
  {
    name: "San Diego",
    subtitle: "California",
    url: "https://www.airbnb.com/s/San-Diego--California--United-States/homes",
  },
  {
    name: "Chicago",
    subtitle: "Illinois",
    url: "https://www.airbnb.com/s/Chicago--Illinois--United-States/homes",
  },
  {
    name: "Seattle",
    subtitle: "Washington",
    url: "https://www.airbnb.com/s/Seattle--Washington--United-States/homes",
  },
  {
    name: "Denver",
    subtitle: "Colorado",
    url: "https://www.airbnb.com/s/Denver--Colorado--United-States/homes",
  },
  {
    name: "New York City",
    subtitle: "New York",
    url: "https://www.airbnb.com/s/New-York--New-York--United-States/homes",
  },
  {
    name: "Boston",
    subtitle: "Massachusetts",
    url: "https://www.airbnb.com/s/Boston--Massachusetts--United-States/homes",
  },
  {
    name: "Nashville",
    subtitle: "Tennessee",
    url: "https://www.airbnb.com/s/Nashville--Tennessee--United-States/homes",
  },
  {
    name: "Charlotte",
    subtitle: "North Carolina",
    url: "https://www.airbnb.com/s/Charlotte--North-Carolina--United-States/homes",
  },
  {
    name: "Atlanta",
    subtitle: "Georgia",
    url: "https://www.airbnb.com/s/Atlanta--Georgia--United-States/homes",
  },
  {
    name: "Tampa",
    subtitle: "Florida",
    url: "https://www.airbnb.com/s/Tampa--Florida--United-States/homes",
  },
  {
    name: "Salt Lake City",
    subtitle: "Utah",
    url: "https://www.airbnb.com/s/Salt-Lake-City--Utah--United-States/homes",
  },
  {
    name: "Minneapolis",
    subtitle: "Minnesota",
    url: "https://www.airbnb.com/s/Minneapolis--Minnesota--United-States/homes",
  },
  {
    name: "Cleveland",
    subtitle: "Ohio",
    url: "https://www.airbnb.com/s/Cleveland--Ohio--United-States/homes",
  },
  {
    name: "Cincinnati",
    subtitle: "Ohio",
    url: "https://www.airbnb.com/s/Cincinnati--Ohio--United-States/homes",
  },
  {
    name: "Indianapolis",
    subtitle: "Indiana",
    url: "https://www.airbnb.com/s/Indianapolis--Indiana--United-States/homes",
  },
  {
    name: "St. Louis",
    subtitle: "Missouri",
    url: "https://www.airbnb.com/s/St-Louis--Missouri--United-States/homes",
  },
  {
    name: "Kansas City",
    subtitle: "Missouri",
    url: "https://www.airbnb.com/s/Kansas-City--Missouri--United-States/homes",
  },
  {
    name: "Oklahoma City",
    subtitle: "Oklahoma",
    url: "https://www.airbnb.com/s/Oklahoma-City--Oklahoma--United-States/homes",
  },
  {
    name: "Tulsa",
    subtitle: "Oklahoma",
    url: "https://www.airbnb.com/s/Tulsa--Oklahoma--United-States/homes",
  },
  {
    name: "Austin",
    subtitle: "Texas",
    url: "https://www.airbnb.com/s/Austin--Texas--United-States/homes",
  },
  {
    name: "Dallas",
    subtitle: "Texas",
    url: "https://www.airbnb.com/s/Dallas--Texas--United-States/homes",
  },
  {
    name: "Houston",
    subtitle: "Texas",
    url: "https://www.airbnb.com/s/Houston--Texas--United-States/homes",
  },
  {
    name: "San Antonio",
    subtitle: "Texas",
    url: "https://www.airbnb.com/s/San-Antonio--Texas--United-States/homes",
  },
  {
    name: "El Paso",
    subtitle: "Texas",
    url: "https://www.airbnb.com/s/El-Paso--Texas--United-States/homes",
  },
  {
    name: "Albuquerque",
    subtitle: "New Mexico",
    url: "https://www.airbnb.com/s/Albuquerque--New-Mexico--United-States/homes",
  },
  {
    name: "Portland",
    subtitle: "Oregon",
    url: "https://www.airbnb.com/s/Portland--Oregon--United-States/homes",
  },
  {
    name: "San Francisco",
    subtitle: "California",
    url: "https://www.airbnb.com/s/San-Francisco--California--United-States/homes",
  },
  {
    name: "Sacramento",
    subtitle: "California",
    url: "https://www.airbnb.com/s/Sacramento--California--United-States/homes",
  },
  {
    name: "Fresno",
    subtitle: "California",
    url: "https://www.airbnb.com/s/Fresno--California--United-States/homes",
  },
  {
    name: "Bakersfield",
    subtitle: "California",
    url: "https://www.airbnb.com/s/Bakersfield--California--United-States/homes",
  },
  {
    name: "Anaheim",
    subtitle: "California",
    url: "https://www.airbnb.com/s/Anaheim--California--United-States/homes",
  },
  {
    name: "Riverside",
    subtitle: "California",
    url: "https://www.airbnb.com/s/Riverside--California--United-States/homes",
  },
  {
    name: "Long Beach",
    subtitle: "California",
    url: "https://www.airbnb.com/s/Long-Beach--California--United-States/homes",
  },
  {
    name: "Honolulu",
    subtitle: "Hawaii",
    url: "https://www.airbnb.com/s/Honolulu--Hawaii--United-States/homes",
  },
  {
    name: "Anchorage",
    subtitle: "Alaska",
    url: "https://www.airbnb.com/s/Anchorage--Alaska--United-States/homes",
  },
  {
    name: "Boise",
    subtitle: "Idaho",
    url: "https://www.airbnb.com/s/Boise--Idaho--United-States/homes",
  },
  {
    name: "Billings",
    subtitle: "Montana",
    url: "https://www.airbnb.com/s/Billings--Montana--United-States/homes",
  },
  {
    name: "Cheyenne",
    subtitle: "Wyoming",
    url: "https://www.airbnb.com/s/Cheyenne--Wyoming--United-States/homes",
  },
  {
    name: "Rapid City",
    subtitle: "South Dakota",
    url: "https://www.airbnb.com/s/Rapid-City--South-Dakota--United-States/homes",
  },
  {
    name: "Fargo",
    subtitle: "North Dakota",
    url: "https://www.airbnb.com/s/Fargo--North-Dakota--United-States/homes",
  },
  {
    name: "Des Moines",
    subtitle: "Iowa",
    url: "https://www.airbnb.com/s/Des-Moines--Iowa--United-States/homes",
  },
  {
    name: "Omaha",
    subtitle: "Nebraska",
    url: "https://www.airbnb.com/s/Omaha--Nebraska--United-States/homes",
  },
  {
    name: "Wichita",
    subtitle: "Kansas",
    url: "https://www.airbnb.com/s/Wichita--Kansas--United-States/homes",
  },
  {
    name: "Little Rock",
    subtitle: "Arkansas",
    url: "https://www.airbnb.com/s/Little-Rock--Arkansas--United-States/homes",
  },
  {
    name: "Jackson",
    subtitle: "Mississippi",
    url: "https://www.airbnb.com/s/Jackson--Mississippi--United-States/homes",
  },
  {
    name: "Birmingham",
    subtitle: "Alabama",
    url: "https://www.airbnb.com/s/Birmingham--Alabama--United-States/homes",
  },
  {
    name: "New Orleans",
    subtitle: "Louisiana",
    url: "https://www.airbnb.com/s/New-Orleans--Louisiana--United-States/homes",
  },
  {
    name: "Columbia",
    subtitle: "South Carolina",
    url: "https://www.airbnb.com/s/Columbia--South-Carolina--United-States/homes",
  },
  {
    name: "Charleston",
    subtitle: "South Carolina",
    url: "https://www.airbnb.com/s/Charleston--South-Carolina--United-States/homes",
  },
  {
    name: "Savannah",
    subtitle: "Georgia",
    url: "https://www.airbnb.com/s/Savannah--Georgia--United-States/homes",
  },
  {
    name: "Louisville",
    subtitle: "Kentucky",
    url: "https://www.airbnb.com/s/Louisville--Kentucky--United-States/homes",
  },
  {
    name: "Lexington",
    subtitle: "Kentucky",
    url: "https://www.airbnb.com/s/Lexington--Kentucky--United-States/homes",
  },
  {
    name: "Detroit",
    subtitle: "Michigan",
    url: "https://www.airbnb.com/s/Detroit--Michigan--United-States/homes",
  },
  {
    name: "Grand Rapids",
    subtitle: "Michigan",
    url: "https://www.airbnb.com/s/Grand-Rapids--Michigan--United-States/homes",
  },
  {
    name: "Milwaukee",
    subtitle: "Wisconsin",
    url: "https://www.airbnb.com/s/Milwaukee--Wisconsin--United-States/homes",
  },
  {
    name: "Madison",
    subtitle: "Wisconsin",
    url: "https://www.airbnb.com/s/Madison--Wisconsin--United-States/homes",
  },
  {
    name: "Pittsburgh",
    subtitle: "Pennsylvania",
    url: "https://www.airbnb.com/s/Pittsburgh--Pennsylvania--United-States/homes",
  },
  {
    name: "Philadelphia",
    subtitle: "Pennsylvania",
    url: "https://www.airbnb.com/s/Philadelphia--Pennsylvania--United-States/homes",
  },
  {
    name: "Baltimore",
    subtitle: "Maryland",
    url: "https://www.airbnb.com/s/Baltimore--Maryland--United-States/homes",
  },
  {
    name: "Washington",
    subtitle: "District of Columbia",
    url: "https://www.airbnb.com/s/Washington--District-of-Columbia--United-States/homes",
  },
];

const UniqueStaySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const isAirbnbFriendly = activeTab === 3;
  const visibleCities = showMore
    ? airbnbFriendlyCities
    : airbnbFriendlyCities.slice(0, 15);

  return (
    <div className="unique-stays-wrapper">
      <h3 className="section-title">Inspiration for future getaways</h3>
      <div className="tabs">
        {tabData.map((tab, idx) => (
          <div
            key={tab.label}
            className={idx === activeTab ? "active-tab" : ""}
            onClick={() => {
              setActiveTab(idx);
              setShowMore(false);
            }}
            style={{ cursor: "pointer" }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div
        className="link-grid"
        style={
          isAirbnbFriendly
            ? {
                display: "grid",
                gridTemplateColumns: `repeat(6, 1fr)`,
                gap: "32px",
              }
            : {}
        }
      >
        {activeTab === 0
          ? (showMore ? uniqueStaysLinks : uniqueStaysLinks.slice(0, 13))
              .map((link, idx) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="link-item"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <span>{link.name}</span>
                  {link.country && (
                    <div className="link-country">{link.country}</div>
                  )}
                </a>
              ))
              .concat(
                !showMore
                  ? [
                      <button
                        key="show-more"
                        className="show-more dropdown-style"
                        onClick={() => setShowMore(true)}
                        style={
                          {
                            // display: "flex",
                            // alignItems: "center",
                            // gap: "8px",
                            // background: "#fff",
                            // border: "1px solid #ddd",
                            // borderRadius: "24px",
                            // boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                            // padding: "8px 20px",
                            // fontSize: "1rem",
                            // fontWeight: 500,
                            // cursor: "pointer",
                            // minWidth: "220px",
                            // justifyContent: "center",
                            // margin: "0 auto",
                          }
                        }
                      >
                        <span>Show more</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginLeft: 6 }}
                        >
                          <path
                            d="M4.5 7.5L9 12L13.5 7.5"
                            stroke="#222"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>,
                    ]
                  : [
                      <button
                        key="show-less"
                        className="show-more dropdown-style"
                        onClick={() => setShowMore(false)}
                        style={
                          {
                            // display: "flex",
                            // alignItems: "center",
                            // gap: "8px",
                            // background: "#fff",
                            // border: "1px solid #ddd",
                            // borderRadius: "24px",
                            // boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                            // padding: "8px 20px",
                            // fontSize: "1rem",
                            // fontWeight: 500,
                            // cursor: "pointer",
                            // minWidth: "220px",
                            // justifyContent: "center",
                            // margin: "0 auto",
                          }
                        }
                      >
                        <span>Show less</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginLeft: 6, transform: "rotate(180deg)" }}
                        >
                          <path
                            d="M4.5 7.5L9 12L13.5 7.5"
                            stroke="#222"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>,
                    ]
              )
          : isAirbnbFriendly
          ? visibleCities
              .map((link, idx) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="link-item"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <span>{link.name}</span>
                  <span className="link-subtitle">{link.subtitle}</span>
                </a>
              ))
              .concat(
                !showMore
                  ? [
                      <button
                        key="show-more"
                        className="show-more dropdown-style"
                        onClick={() => setShowMore(true)}
                        style={
                          {
                            // display: "flex",
                            // alignItems: "center",
                            // gap: "8px",
                            // background: "#fff",
                            // border: "1px solid #ddd",
                            // borderRadius: "24px",
                            // boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                            // padding: "8px 20px",
                            // fontSize: "1rem",
                            // fontWeight: 500,
                            // cursor: "pointer",
                            // minWidth: "220px",
                            // justifyContent: "center",
                            // margin: "0 auto",
                          }
                        }
                      >
                        <span>Show more Airbnb-friendly apartments</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginLeft: 6 }}
                        >
                          <path
                            d="M4.5 7.5L9 12L13.5 7.5"
                            stroke="#222"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>,
                    ]
                  : [
                      <button
                        key="show-less"
                        className="show-more dropdown-style"
                        onClick={() => setShowMore(false)}
                        style={
                          {
                            // display: "flex",
                            // alignItems: "center",
                            // gap: "8px",
                            // background: "#fff",
                            // border: "1px solid #ddd",
                            // borderRadius: "24px",
                            // boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                            // padding: "8px 20px",
                            // fontSize: "1rem",
                            // fontWeight: 500,
                            // cursor: "pointer",
                            // minWidth: "220px",
                            // justifyContent: "center",
                            // margin: "0 auto",
                          }
                        }
                      >
                        <span>Show less</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginLeft: 6, transform: "rotate(180deg)" }}
                        >
                          <path
                            d="M4.5 7.5L9 12L13.5 7.5"
                            stroke="#222"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>,
                    ]
              )
          : tabData[activeTab].links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="link-item"
                target="_self"
                rel="noopener noreferrer"
              >
                <span>{link.name}</span>
                {link.subtitle && (
                  <span className="link-subtitle">{link.subtitle}</span>
                )}
                {link.country && (
                  <div className="link-country">{link.country}</div>
                )}
              </a>
            ))}
      </div>
    </div>
  );
};

export default UniqueStaySection;
