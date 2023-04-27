import React from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import pizzaIco from "../images/pizza.png";
import pizza1 from "../images/pizza1.png";
import pizza2 from "../images/pizza2.png";
import cooking from "../images/cooking.png";

export default function Dashboard() {
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
          <h1>
            <img src={pizzaIco} />
            Welcome! You are logged in as: {currentUser.email}
          </h1>
          <button onClick={handleLogout}>Log out</button>
        </div>
        <h1>Choose what you want to do next:</h1>
        <div className="action-boxes">
          <div className="action">
            <h2>Sign up for Pizza Event</h2>
            <img src={pizza1} />
            <p>
              Sign up for Pizza Event: Join a unique event for pizza lovers and
              be part of a community of people who love this Italian dish.
              Register online - simply and quickly.
            </p>
            <Link to="/dashboard/signup" className="link">
              <button>Sign up now!</button>
            </Link>
          </div>
          <div className="action">
            <h2>See who else will participate</h2>
            <img src={cooking} />
            <p>
              Meet other pizza lovers who will attend the event. You can see
              what their favorite pizza is and their role in the Pizza Event.
              Check list of participants now!
            </p>
            <Link to="/dashboard/participans" className="link">
              <button>Check now!</button>
            </Link>
          </div>
          <div className="action">
            <h2>Learn more about the Pizza Event</h2>
            <img src={pizza2} />
            <p>
              Check out the event highlights and organizer information on our
              website. If you have any questions, please contact us. We look
              forward to hearing from you!
            </p>
            <Link to="/dashboard/learn-more" className="link">
              <button>Learn more!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
