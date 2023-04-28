import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import pizzaIco from "../images/pizza.png";

export default function RegisterComponent() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (passwordRef.current.value.length < 6) {
      return setError("Password must contain at least 6 characters");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setMessage(`Account created successfully, go back to login!`);
    } catch {
      setError("Failed to create an account");
    }
  }

  return (
    <>
      <div className="authentication-section">
        <div className="authentication-container">
          <h1>
            <img src={pizzaIco} alt="pizza icon" />
            Sign up
            <img src={pizzaIco} alt="pizza icon" />
          </h1>
          {error && <alert className="alert">{error}</alert>}
          {message && <alert className="alert">{message}</alert>}
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
            <form id="password-confirm">
              <label>Password Confirmation:</label>
              <input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Re-enter your password"
                required
              />
            </form>
            <button className="" type="submit" disabled={loading}>
              Sign Up
            </button>
            <div className="info">
              Already have an account?{" "}
              <Link to="/login" className="link">
                Log in!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
