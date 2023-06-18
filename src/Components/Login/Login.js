import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoggedUserInfo } from "../../App";
import { signUpwithGoogle } from "../../config/firebase";

import "./Login.css";

const Login = () => {
  const [userData, setUserData] = useState({});
  const { setLoggedIn, setRegister } = useContext(LoggedUserInfo);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email } = userData;
    if (!name || !email) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm) {
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Registration Failed");
          }
        })
        .then((data) => {
          setLoggedIn(userData);
          setUserData({});
          setRegister(true);
          navigate("/profile");
          console.log(data);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };
  return (
    <>
      <div class="container">
        <div class="login-form">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="name"
              name="name"
              placeholder="Enter Your Full Name"
              onChange={handleFieldChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleFieldChange}
              required
            />
            <button type="submit">Login</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create new account</Link>
          </p>
          <div class="google-login">
            <button onClick={() => signUpwithGoogle()} class="google-button">
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
