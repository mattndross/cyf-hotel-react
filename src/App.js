import React from "react";
import Restaurant from "./components/Restaurant";
import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristCard from "./components/TouristCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristCard />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
