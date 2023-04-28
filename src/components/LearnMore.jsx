import React from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import back from "../images/back.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";

export default function LearnMore() {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="dashboard-section">
      <div className="dashboard-container">
        <div className="dashboard-bar">
          <Link to="/dashboard" className="link">
            <h1>
              <img src={back} alt="back button" />
              Go back to main menu
            </h1>
          </Link>

          <button onClick={handleLogout}>Log out</button>
        </div>
        <div className="learn-more-container">
          <p>
            <strong>Pizza Event</strong> is a celebration for all lovers of
            Italian pizza! During this event you will be able to taste delicious
            pizzas, which will be prepared for you by our best chefs. It will
            also be a great opportunity to meet new people and spend time in a
            relaxed atmosphere.
          </p>
          <img src={photo2} alt="event photo" />
          <p>
            At the <strong>Pizza Event</strong> there are many attractions
            waiting for you! In addition to delicious pizzas, you will be able
            to participate in competitions, tastings, and learn the secrets of
            preparing the perfect dough. For the youngest, we have prepared a
            special play area where they will be able to have fun.
          </p>
          <img src={photo3} alt="event photo" />
          <p>
            <strong>Pizza Event</strong> will be held on{" "}
            <strong>24th June in Jozefa Pulaskiego 12, Cracow.</strong> The
            event will provide a parking zone for participants' cars. It will
            also be possible to use public transportation - there is a bus stop
            near the event site. We would like to remind you that there are
            safety rules in the event area, which you should familiarize
            yourself with before you arrive.
          </p>
          <img src={photo4} alt="event photo" />
          <p>
            <strong>Pizza Event</strong> was made possible thanks to the
            generosity of our sponsors and partners. We thank them for their
            support and encourage you to learn more about their products and
            services.
          </p>
        </div>
      </div>
    </div>
  );
}
