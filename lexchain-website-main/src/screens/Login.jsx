import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import logoOverlay from "../assets/logo-nobg-white.png";
import overlayBg from "../assets/logo-overlaybg1.jpg"; // your background image

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    // You can replace this with real authentication logic
    if (email && password) {
      // Fake success condition — you can hook this to real backend later
      navigate("/home");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSignInSubmit}>
          <img src={logo} alt="Logo" className="logo" />
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="form-container sign-up-container">
        <form>
          <img src={logo} alt="Logo" className="logo" />
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      <div className="overlay-container">
        <div
          className="overlay"
          style={{
            background: `linear-gradient(
              rgba(22, 55, 91, 0.85),
              rgba(22, 55, 91, 0.85)
            ), url(${overlayBg}) center/cover no-repeat`,
          }}
        >
          <div className="overlay-panel overlay-left">
            <img src={logoOverlay} alt="Logo" className="logo" />
            <h1>Hello, Friend!</h1>
            <p>To stay connected please login with your account</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <img src={logoOverlay} alt="Logo" className="logo" />
            <h1>Welcome to Lexchain!</h1>
            <p>Enter your details and start your journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
