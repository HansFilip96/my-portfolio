import React from "react";
import people from "../../assets/people.png";
import ProfilePic from "../../assets/ProfilePic.png";
import "./header.css";

const Header = () => (
  <div className="__header section__padding" id="home">
    <div className="__header-content">
      <h1 className="gradient__text">I Have Design Experience</h1>

      <div className="__header-content__input">
        <form>
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Email Adress" required />
          <input type="text" id="phone" placeholder="Phone Nr" required />
          <textarea id="message" placeholder="Message"></textarea>
          <button id="__button" type="submit">
            Get in Contact
          </button>
        </form>
      </div>

      <div className="__header-content__people">
        <img src={people} />
        <p>100 people have contacted me about my work</p>
      </div>
    </div>

    <div className="__header-image">
      <img src={ProfilePic} />
    </div>
  </div>
);

export default Header;
