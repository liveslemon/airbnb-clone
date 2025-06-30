import { useState, useRef } from "react";
import { Cards } from "./Cards.jsx";
import "./MainDiv.css"; // Ensure MainDiv.css is imported

export default function MainDiv() {
  const allCardData = [
    // Airbnb Originals
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6157437/original/7acdcf7a-494c-46a9-aaa9-d8cb30cd11b2.jpeg?im_w=960",
      title: "Glam up for Lollapalooza with a star makeup artist",
      location: "Berlin, Germany",
      price: "$334",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/6b80385e-18e3-4889-b0e8-75784bfbc1d5.jpeg?im_w=480",
      title: "Lunch with fashion icon Lenny Neymeyer in her home",
      location: "Rio de Janeiro, Brazil",
      price: "$104",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6259920/original/ed0abd96-d2e6-4bd1-b549-08dae16eb858.jpeg?im_w=960",
      title: "Create seasonal ikebana with Wataru Toru",
      location: "Kamakura, Japan",
      price: "$103",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6235333/original/85aa0587-af99-4231-9df7-ae5a72b3bdd2.jpeg?im_w=960",
      title: "Cycle a Tour de France route with Philippe Gilbert",
      location: "Pontarlier, France",
      price: "$305",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6280438/original/6e1c0c43-17a7-43e9-9128-12fcfcbbdaf8.jpeg?im_w=960",
      title: "Learn how to mix with DJ Lady D at Lollapalooza",
      location: "Chicago, United States",
      price: "$225",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6158527/original/d26828d6-8e1e-4ebb-81d0-2db1066617bb.jpeg?im_w=480",
      title: "Bike Alpine trails with Olympian Arianna Fontana",
      price: "$230",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6280380/original/ba501065-8c21-4d2f-bda0-e7f19464396f.jpeg?im_w=480",
      title: "Curate your Lollapalooza fit with Ann-Marie Hoang",
      location: "Chicago, United States",
      price: "$85",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6171972/original/fd2d4fee-2baa-465b-b9f5-cedbd28a3353.jpeg?im_w=480",
      title: "Curate your Lollapalooza fit with Ann-Marie Hoang",
      location: "Chicago, United States",
      price: "$85",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6146329/original/ac380252-0bb5-419f-8b11-a02b6bdad1bd.jpeg?im_w=480",
      title: "Curate your Lollapalooza fit with Ann-Marie Hoang",
      location: "Chicago, United States",
      price: "$85",
      guestType: "guest",
      rating: null,
    },

    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6255922/original/084ebbda-ca4c-4ecc-b598-133555811236.jpeg?im_w=480",
      title: "Dine with Dalad Kambhu in a design forward home",
      location: "Berlin, Germany",
      price: "$117",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6259162/original/4edbabe1-1970-4a27-80ab-59cf936a1828.jpeg?im_w=480",
      title: "Practice the art of tattooing with Scott Campbell",
      location: "Los Angeles, United States",
      price: "$150",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6146518/original/f5df24e7-9167-47c1-9547-6e51c4c3f795.jpeg?im_w=480",
      title: "Hike in the Alps with Olympian Omar Visintin",
      location: "Merano, Italy",
      price: "$80",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6146467/original/a752fe02-1c64-48d2-be3c-b469723ee0e8.jpeg?im_w=480",
      title: "Hit the ice with Paralympician Andrea Macri",
      location: "Turin, Italy",
      price: "$50",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6260235/original/967c5852-a192-456f-8fd0-729022535089.jpeg?im_w=960",
      title: "Up your street art skills with Rio's Marcelo Ment",
      location: "Rio de Janeiro, Brazil",
      price: "$62",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6259354/original/c476c558-077c-41cb-b3c0-91299b417120.jpeg?im_w=480",
      title: "Rediscover tostadas with Gabriela Camara",
      location: "Mexico City, Mexico",
      price: "$252",
      guestType: "guest",
      rating: null,
    },
    {
      section: "Airbnb Originals",
      type: "Original",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6244232/original/a408e089-4033-4dce-969e-a041e52c87bb.jpeg?im_w=480",
      title: "Join chef Gilbert Celina for a seafood feast",
      location: "Malibu, United States",
      price: "$200",
      guestType: "guest",
      rating: null,
    },

    // Experiences in London
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-2081014/original/cb5c94ad-3078-476c-82eb-909ae056178f.jpeg?im_w=960",
      title: "London sightseeing walking tour with 30 sights",
      price: "$26",
      guestType: "guest",
      rating: "4.96",
    },
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-329331/original/58f6e5f3-57f0-4f5a-b46b-b23cd616ec2d.jpeg?im_w=480",
      title: "Explore the hidden pubs of London",
      price: "$40",
      guestType: "guest",
      rating: "4.96",
    },
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-165149-active_media/original/b0499a80-9efa-4618-843f-fa8be3ad140b.jpg?im_w=480",
      title: "Walk London with a local - in easy English",
      price: "$37",
      guestType: "guest",
      rating: "4.97",
    },
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-966579/original/ae34d97d-2a90-4e04-9cbc-1f9bde9b26ad.jpeg?im_w=480",
      title: "Walk London's sights with a retired royal guard",
      price: "$38",
      guestType: "guest",
      rating: "4.98",
    },
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3720406/original/6fc36d58-67a1-4ae3-9d68-4a038eb70751.jpeg?im_w=480",
      title: "Visit unique bars in London",
      price: "$52",
      guestType: "guest",
      rating: "4.96",
    },
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-4448239-active_media/original/aa4e941a-193b-4998-8ffb-72ecdb2ae9f4.jpg?im_w=480",
      title: "Changing of the Guard Walking Tour",
      price: "$16",
      guestType: "guest",
      rating: "4.94",
    },
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-111593/original/d0810b46-462a-4f7e-bcf8-69a3233991e1.jpeg?im_w=480",
      title: "No Diet Club - Best food tour in East London",
      price: "$60",
      guestType: "guest",
      rating: "4.97",
    },
    {
      section: "Experiences in London",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-286921/original/5db685ff-1e28-4838-80d7-5f69b973c30a.jpeg?im_w=480",
      title: "No Diet Club - Best food tour in East London",
      price: "$60",
      guestType: "guest",
      rating: "4.97",
    },

    // Experiences in Cape Town
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-1366360/original/1cc4140c-b5bd-44f6-8f49-3f3823c224f5.jpeg?im_w=480",
      title: "Hike Lions Head for Sunrise or Sunset",
      price: "$50",
      guestType: "guest",
      rating: "4.98",
    },
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-120627/original/15b314ec-e389-4700-9c6f-11176516418a.jpeg?im_w=480",
      title: "Explore Africa's culinary scene with storytelling",
      price: "$67",
      guestType: "guest",
      rating: "4.94",
    },
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3960956/original/637df4e2-7e92-4edf-a6ac-3b35f367a7a9.jpeg?im_w=480",
      title: "Table Mountain & Cape of Good Hope, and Penguins",
      price: "$72",
      guestType: "guest",
      rating: "4.91",
    },
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-330991-active_media/original/ffc33423-c620-4940-9f36-db7a28bb3f55.jpg?im_w=480",
      title: "Experience the Stellenbosch Winelands",
      price: "$128",
      guestType: "guest",
      rating: "4.97",
    },
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-735506/original/d1ab6436-a22c-4ec8-890f-8032e37074f6.jpeg?im_w=480",
      title: "Ocean Wildlife Encounter",
      price: "$87",
      guestType: "guest",
      rating: "4.94",
    },
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-54508/original/16f900ee-e8d3-41a7-a9a7-7cd29d61a736.jpeg?im_w=480",
      title: "Hike Table Mountain Adventurous Route",
      price: "$65",
      guestType: "guest",
      rating: "4.99",
    },
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-25598/original/79cad280-1d4b-4894-a624-981c9f8c53d3.jpeg?im_w=480",
      title: "Hike Table Mountain",
      price: "$51",
      guestType: "guest",
      rating: "4.96",
    },
    {
      section: "Experiences in Cape Town",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-137248-active_media/original/4e24db45-b7a2-4c4a-84a6-624cbc8ee220.jpg?im_w=320",
      title: "Hike Table Mountain Adventurous Route",
      price: "$65",
      guestType: "guest",
      rating: "4.99",
    },

    // Experiences in Nairobi
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3892585/original/3e147238-78f0-40ff-833b-8d5146ee09b1.jpeg?im_w=480",
      title: "Visit Nairobi National Park",
      price: "$190",
      guestType: "guest",
      rating: "4.98",
    },
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-723019/original/dfb872ad-cc8b-4282-86d7-1924b9dcf34b.jpeg?im_w=480",
      title: "Explore the local food market & Cook a Kenyan meal",
      price: "$50",
      guestType: "guest",
      rating: "4.94",
    },
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3792485/original/f880f56c-b9f1-479c-91f0-3ddbb83bd7cf.jpeg?im_w=480",
      title: "Explore Africa's culinary scene Safari Tour",
      price: "$100",
      guestType: "guest",
      rating: "4.98",
    },
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-237642/original/2ac96610-3ceb-4475-bed6-7734821df4ef.jpeg?im_w=960",
      title: "Organic Mountai nRide & Cook Kenyan Food",
      price: "$70",
      guestType: "guest",
      rating: "4.97",
    },
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-401985/original/6676a2e0-71f2-4d30-b4ca-d4558b6a7b34.jpeg?im_w=480",
      title: "Design Ankara clothes or get your hair braided",
      price: "$23",
      guestType: "guest",
      rating: "4.97",
    },
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-84258/original/0ff081ef-59f3-45c6-a0b4-1f3ae48438be.jpeg?im_w=480",
      title: "Wander Kibera with a local nonprofit founder",
      price: "$24",
      guestType: "guest",
      rating: "4.96",
    },
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-107396/original/e901ace9-5d24-4ee1-959c-8dce1f2f5d63.jpeg?im_w=480",
      title: "See Nairobi through the eyes of street kids",
      price: "$45",
      guestType: "guest",
      rating: "4.92",
    },
    {
      section: "Experiences in Nairobi",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-2795394/original/40d7a310-a0bd-4c5a-86a6-69909af898fd.jpeg?im_w=480",
      title: "Paint the african savannah",
      price: "$30",
      guestType: "guest",
      rating: "4.99",
    },
    // Experiences in Toronto
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-618258/original/f7b0b7f9-e354-4107-b92d-588209c57f17.jpeg?im_w=480",
      title: "Enjoy R&B on a pirate ship",
      price: "$34",
      guestType: "guest",
      rating: "4.96",
    },
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-184410/original/b86fa6df-4a7b-4d30-93a4-77ffd3b1e947.jpeg?im_w=480",
      title: "Show me the City",
      price: "$34",
      guestType: "guest",
      rating: "4.94",
    },
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-209002-active_media/original/1d340f5d-d873-4667-9ffa-a019b0ce1295.jpg?im_w=480",
      title: "Waterfalls Waterfalls",
      price: "$128",
      guestType: "guest",
      rating: "4.96",
    },
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-68755-active_media/original/f109281f-5402-4074-a180-3df420c1585c.jpg?im_w=480",
      title: "Create a custom silver ring with a goldsmith",
      price: "$30",
      guestType: "guest",
      rating: "4.97",
    },
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3109584/original/a3d035ec-cf9e-40f8-bdef-18ca5c7671cd.jpeg?im_w=480",
      title: "Taste 16 wild gelatos and peek inside the lab",
      price: "$15",
      guestType: "guest",
      rating: "4.94",
    },
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4796791/original/9eaa0636-0943-49d3-9f62-a4ed9fe19f70.jpeg?im_w=480",
      title: "Capture Toronto on a photo walk",
      price: "$30",
      guestType: "guest",
      rating: "4.92",
    },
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3264661/original/36622fed-7d7b-4190-83eb-d9599ddd4607.jpeg?im_w=480",
      title: "Discover Toronto like a Local",
      price: " $25 ",
      guestType: "guest",
      rating: "4.95",
    },
    {
      section: "Experiences in Toronto",
      type: "Popular",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5433678/original/e44b0081-4e16-4a82-abce-e745d352c881.jpeg?im_w=480",
      title: "Walk Toronto's vibrant downtown",
      price: "$4",
      guestType: "guest",
      rating: "4.22",
    },
  ];

  // Refs for each scrollable section
  const airbnbOriginalsRef = useRef(null);
  const londonRef = useRef(null);
  const capeTownRef = useRef(null);
  const nairobiRef = useRef(null);
  const torontoRef = useRef(null);

  // Map section names to their refs
  const sectionRefs = {
    "Airbnb Originals": airbnbOriginalsRef,
    "Experiences in London": londonRef,
    "Experiences in Cape Town": capeTownRef,
    "Experiences in Nairobi": nairobiRef,
    "Experiences in Toronto": torontoRef,
  };

  const scrollAmount = 300; // Adjust scroll distance as needed

  const handleScroll = (section, direction) => {
    const ref = sectionRefs[section];
    if (ref.current) {
      if (direction === "left") {
        ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const renderSection = (sectionTitle, data) => (
    <div key={sectionTitle}>
      <div className="section-header">
        <h2 className="section-title">
          {sectionTitle}
          <svg
            className="section-title-arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </h2>
        <div className="scroll-buttons">
          <button
            className="scroll-button scroll-button-left"
            onClick={() => handleScroll(sectionTitle, "left")}
          >
            <svg
              className="scroll-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            className="scroll-button scroll-button-right"
            onClick={() => handleScroll(sectionTitle, "right")}
          >
            <svg
              className="scroll-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Cards cardsToDisplay={data} ref={sectionRefs[sectionTitle]} />
    </div>
  );

  return (
    <div className="main-div-container">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="content-wrapper">
        {/* Render Airbnb Originals Section */}
        {renderSection(
          "Airbnb Originals",
          allCardData.filter((card) => card.section === "Airbnb Originals")
        )}

        {/* Render "Popular with travelers from your area" header */}
        <h2 className="popular-travelers-header">
          Popular with travelers from your area
        </h2>

        {/* Render Experiences in London Section */}
        {renderSection(
          "Experiences in London",
          allCardData.filter((card) => card.section === "Experiences in London")
        )}

        {/* Render Experiences in Cape Town Section */}
        {renderSection(
          "Experiences in Cape Town",
          allCardData.filter(
            (card) => card.section === "Experiences in Cape Town"
          )
        )}

        {/* Render Experiences in Nairobi Section */}
        {renderSection(
          "Experiences in Nairobi",
          allCardData.filter(
            (card) => card.section === "Experiences in Nairobi"
          )
        )}

        {/* Render Experiences in Toronto Section */}
        {renderSection(
          "Experiences in Toronto",
          allCardData.filter(
            (card) => card.section === "Experiences in Toronto"
          )
        )}
      </div>
    </div>
  );
}
