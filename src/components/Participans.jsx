import React from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import back from "../images/back.png";
import sad from "../images/sad.png";
import happy from "../images/happy.png";

export default function Participans() {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState(JSON.parse(localStorage.users));
  const initial = JSON.parse(localStorage.initial);

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }
  const handleUl = (user, id) => {
    if (id === 0) {
      return <li> </li>;
    } else
      return (
        <li>
          <p>
            {id}.{" "}
            <strong>
              {" "}
              {user.name} {user.surname},{" "}
            </strong>{" "}
            {user.role}, Favourite pizza: <strong> {user.fav}</strong>. Want
            information? {user.info ? <img src={happy} /> : <img src={sad} />}
          </p>
        </li>
      );
  };
  return (
    <div className="dashboard-section">
      <div className="dashboard-container">
        <div className="dashboard-bar">
          <Link to="/dashboard" className="link">
            <h1>
              <img src={back} />
              Go back to main menu
            </h1>
          </Link>
          <button onClick={handleLogout}>Log out</button>
        </div>
        <h1>Meet other pizza lovers who will participate in the Pizza Event</h1>
        {initial === false ? (
          <h2>
            Currently no users registered <img src={sad} />
          </h2>
        ) : (
          <ul>{users.map((user, id) => handleUl(user, id))}</ul>
        )}
      </div>
    </div>
  );
}
