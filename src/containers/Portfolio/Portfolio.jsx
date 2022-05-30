import React from "react";
import Feature from "../../components/feature/Feature";
import "./Portfolio.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Portfolio = () => (
  <div className="__Portfolio section__margin">
    <div className="__Portfolio-feature">
      <Feature
        title="Who Am I"
        text="I am Filip and I am 25 years old. I live in Stockholm, Sweden. By looking at this portfolio about me and my projects that I have built, you will notice that I have learned quite a lot during my relatively short time as a web developer, and I strive to develop even more"
      />
    </div>
    <div className="__Portfolio-heading">
      <h1 className="gradient__text">This Is What I Have Developed</h1>
      <p>Explore The Portfolio</p>
    </div>
    <div className="__Portfolio-container">
      <Feature
        title="Klarna Checkout"
        text="https://klarna-app96.herokuapp.com/cart-checkout/1"
      />
      <Button
        href="https://klarna-app96.herokuapp.com/cart-checkout/1"
        variant="text"
      >
        Link
      </Button>
      <Feature title="Spotify-Clone" text="in development." />
      <Button href="https://open.spotify.com/" variant="text">
        Link
      </Button>
      <Feature
        title="Tic Tac Toe "
        text="https://group-assignment-ttt.vercel.app/"
      />
      <Button href="https://group-assignment-ttt.vercel.app/" variant="text">
        Link
      </Button>
      <Feature
        title="Youtube-Clone "
        text="https://react-training-youtube-youtube-api.vercel.app/"
      />
      <Button
        href="https://react-training-youtube-youtube-api.vercel.app/"
        variant="text"
      >
        Link
      </Button>
    </div>
  </div>
);

export default Portfolio;
