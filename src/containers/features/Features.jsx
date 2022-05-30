import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Klarna-Checkout",
    text: "This Was An Amazing Learning Experience For Me And My Team ",
  },
  {
    title: "Spotify-Clone",
    text: "in development",
  },
  {
    title: "Tic Tac Toe",
    text: "A Very Fun Game That Almost Everyone Has Played At Some Point In Life. ",
  },
  {
    title: "Are You A Webb Developer",
    text: "A DSIGNR KNWS HE HS ACHVD PRFCTN NT WHN THR IS NTHNG LFT TO AD, BT WHN THR IS NTHNG LFT TO TK AWY.",
  },
];

const Features = () => (
  <div className="__features section__padding" id="features">
    <div className="__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into the endless
        possibilities . & Make it Happen.
      </h1>
    </div>
    <div className="__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
