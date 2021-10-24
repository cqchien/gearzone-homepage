import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default HomePage;
