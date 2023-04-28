import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import pizzaIco from "../images/pizza.png";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { forgotPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await forgotPassword(emailRef.current.value);
      setMessage("Email send: Check your email for further instructions");
    } catch {
      setError("Failed to reset password");
    }
  }

  return (
    <>
      <div className="authentication-section">
        <div className="authentication-container">
          <h1>
            <img src={pizzaIco} alt="pizza icon" />
            Forgot password
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

            <button type="submit">Reset password</button>
            <div className="info">
              <Link to="/login" className="link">
                Log in
              </Link>
            </div>
            <div className="info">
              Need an account?{" "}
              <Link to="/register" className="link">
                Sign up!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
