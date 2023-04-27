import React from "react";
import pizzaIco from "../images/pizza.png";
import photo1 from "../images/photo1.png";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="mainpage-section">
      <div className="mainpage-container">
        <h1>
          <img src={pizzaIco} />
          Welcome to Pizza Event!
          <img src={pizzaIco} />
        </h1>
        <p>
          Welcome to the official website of the "Pizza Event" - an event that
          every pizza lover should visit! We have prepared for you a full range
          of activities related to your favorite Italian dish. Our event will be
          held soon, so don't delay and sign up today! During the event you will
          have the opportunity to try different types of pizza, prepared by the
          best chefs in the city.
        </p>
        <img src={photo1} className="photos" />
        <p>
          {" "}
          It will be an ideal opportunity to learn new flavors and talk to other
          pizza lovers. We have also prepared contests and games where you will
          be able to win fantastic prizes. Don't wait, sign up today for the
          "Pizza Event" and join our community of pizza lovers. This is a unique
          opportunity to spend time among people who share your interests and
          love for good Italian cuisine!
        </p>
        <div className="buttons">
          <Link to="/login">
            <button className="login">Log in!</button>
          </Link>
          <Link to="/register">
            <button className="register">Register now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
