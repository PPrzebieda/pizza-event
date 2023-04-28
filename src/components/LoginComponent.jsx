import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import pizzaIco from "../images/pizza.png";

export default function LoginComponent() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const initial = false;
  const navigate = useNavigate();
  const users = [
    {
      name: "",
      surname: "",
      email: "",
      phone: "",
      role: "",
      fav: "",
      info: false,
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const getUsers = JSON.parse(localStorage.users);
      localStorage.users = JSON.stringify(getUsers);
    } catch (err) {
      // 👇️ This runs
      localStorage.users = JSON.stringify(users);
    }

    try {
      const getInitial = JSON.parse(localStorage.initial);
      localStorage.initial = JSON.stringify(getInitial);
    } catch (err) {
      // 👇️ This runs
      localStorage.initial = JSON.stringify(initial);
    }

    try {
      setError("");

      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to sign in");
    }
  }

  return (
    <>
      <div className="authentication-section">
        <div className="authentication-container">
          <h1>
            <img src={pizzaIco} alt="pizza icon" />
            Log In
            <img src={pizzaIco} alt="pizza icon" />
          </h1>
          {error && <alert className="alert">{error}</alert>}
          <form onSubmit={handleSubmit}>
            <form id="email">
              <label>Email:</label>
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                required
              />
            </form>
            <form id="password">
              <label>Password:</label>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
                required
              />
            </form>
            <button type="submit">Log In!</button>
          </form>
          <div className="info">
            <Link to="/forgot-password" className="link">
              Forgot password?
            </Link>
          </div>
          <div className="info">
            Need an account?{" "}
            <Link to="/register" className="link">
              Sign up!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
