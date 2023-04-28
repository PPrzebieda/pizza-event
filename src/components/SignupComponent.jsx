import React from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import back from "../images/back.png";
import pizzaIco from "../images/pizza.png";

export default function SignupComponent() {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [view, setView] = useState(1);
  const [initial, setInitial] = useState(JSON.parse(localStorage.initial));
  const navigate = useNavigate();
  const initialUser = {
    name: "",
    surname: "",
    email: `${currentUser.email}`,
    phone: "",
    role: "",
    fav: "",
    info: false,
  };
  const [newUser, setNewUser] = useState(initialUser);
  const [users, setUsers] = useState(JSON.parse(localStorage.users));
  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }
  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const checked = target.checked;
    setNewUser({
      ...newUser,
      [name]: event.target.type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setView(2);
  };
  const handleClick2 = (e) => {
    setView(1);
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setView(1);
    setInitial(true);
    setNewUser(initialUser);
    setMsg(
      "Thank you, your application has been sent. You will receive a confirmation email shortly."
    );
  };
  localStorage.users = JSON.stringify(users);
  localStorage.initial = JSON.stringify(initial);

  if (view === 1) {
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
          <h1>To attend the Pizza Event complete the form</h1>
          {msg && (
            <alert className="alert">
              <img src={pizzaIco} alt="pizza icon" />
              {msg}
              <img src={pizzaIco} alt="pizza icon" />
            </alert>
          )}
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form">
                <label for="name">Name*:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  value={newUser.name}
                  required
                  autoComplete="off"
                />
                <label for="surname">Surame*:</label>
                <input
                  id="surname"
                  type="text"
                  name="surname"
                  placeholder="Enter your surname"
                  onChange={handleInputChange}
                  value={newUser.surname}
                  required
                  autoComplete="off"
                />
                <label for="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  value={currentUser.email}
                  disabled={true}
                  required
                />
                <label for="phone">Phone*:</label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={handleInputChange}
                  value={newUser.phone}
                  autoComplete="off"
                  min={9}
                  required
                />
              </div>
              <div className="form">
                <label for="">Your role*:</label>
                <select
                  id="role"
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                  required
                >
                  <option></option>
                  <option>Participant</option>
                  <option>Cook</option>
                  <option>Organizer</option>
                  <option>Promoter</option>
                </select>
                <label for="name">Your favourite pizza*:</label>
                <select
                  id="fav"
                  name="fav"
                  value={newUser.fav}
                  onChange={handleInputChange}
                  required
                >
                  <option></option>
                  <option>Neapolitan Pizza</option>
                  <option>Chicago Pizza</option>
                  <option>New York-Style Pizza</option>
                  <option>Sicilian Pizza</option>
                  <option>Greek Pizza</option>
                  <option>California Pizza</option>
                  <option>Detroit Pizza</option>
                </select>
                <label for="name">
                  Do you want to recive information about event?
                </label>
                <input
                  id="newsletter"
                  type="checkbox"
                  name="info"
                  value={newUser.info}
                  checked={newUser.info}
                  onChange={handleInputChange}
                />
                <button type="submit">Sign up now!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else if (view === 2) {
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
          <div className="summary">
            <h3>
              You want to participate in the Pizza Event as
              <strong>
                {" "}
                {newUser.name} {newUser.surname},
              </strong>{" "}
              your email is <strong>{newUser.email}</strong> and your phone
              number is <strong>{newUser.phone}</strong>. You will participate
              as <strong>"{newUser.role}"</strong> and your favorite pizza is{" "}
              <strong>{newUser.fav}</strong>. In addition, you{" "}
              {newUser.info ? (
                <strong>want</strong>
              ) : (
                <strong>do not want</strong>
              )}{" "}
              to receive information about the current and future editions of
              the Pizza Event. Is all the information correct?
            </h3>
            <div className="btns">
              <button onClick={handleClick2} className="backbtn">
                <img src={back} alt="back button" /> I want to correct my
                information
              </button>
              <button onClick={handleClick1} className="submitbtn">
                Information are correct, I want to register!
                <img src={pizzaIco} alt="pizza icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
