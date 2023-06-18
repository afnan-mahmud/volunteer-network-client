import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoggedUserInfo } from "../../App";
import { signUpwithGoogle } from "../../config/firebase";
import "./Register.css";

const Register = () => {
  const [userData, setUserData] = useState({});
  const { setLoggedIn, setRegister } = useContext(LoggedUserInfo);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Taking value form search query
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const libraryValue = queryParams.get("library");

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    const { name, email, date } = userData;
    if (!name || !email || !date) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Adding data to the database
      fetch("http://localhost:5000/register", {
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
            throw new Error("You already have an account here. Please login");
          }
        })
        .then((data) => {
          setLoggedIn(userData);
          setUserData({});
          setRegister(true);
          alert(data.message);
          navigate("/profile");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const handleGooogleRegistration = () => {
    signUpwithGoogle();
  };

  return (
    <>
      <div className="container">
        <div className="signup-form">
          <h3>Create an Account</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={userData.name || ""}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="User name or Email"
              value={userData.email || ""}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={userData.date || ""}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={userData.description || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="library"
              placeholder="Organize books at the library"
              value={libraryValue}
              onChange={handleChange}
              disabled
            />
            <button type="submit">Registration</button>
            {errorMessage ? <p className="error">{errorMessage}</p> : <p></p>}
            <p>
              By registering, you agree to our Terms, Data Policy, and Cookies
              Policy.
            </p>
          </form>
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
          <div className="google-signup">
            <button
              onClick={handleGooogleRegistration}
              className="google-button"
            >
              <span className="google-icon"></span> Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
