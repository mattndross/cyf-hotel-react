import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  console.log(FakeBookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={FakeBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
