import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeItemCard from "./HomeItemCard";

const Home = () => {
  const [eventsInfo, setEventsInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events/info")
      .then((res) => res.json())
      .then((data) => {
        setEventsInfo(data);
      });
  }, []);
  return (
    <div>
      <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
      <div class="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div style={{ paddingLeft: 75 }}>
        {eventsInfo.map((event, i) => (
          <HomeItemCard key={i} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
