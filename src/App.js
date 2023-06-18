import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./Components/Events/Events";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Register from "./Components/Register/Register";

// Exporting Logged User Context
export const LoggedUserInfo = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  const [register, setRegister] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  return (
    <div className="App">
      <LoggedUserInfo.Provider
        value={{
          loggedIn,
          setLoggedIn,
          register,
          setRegister,
          isAdmin,
          setAdmin,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:link" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedUserInfo.Provider>
    </div>
  );
}

export default App;
