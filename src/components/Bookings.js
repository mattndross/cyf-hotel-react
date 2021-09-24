import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.log("searchVal", searchVal);

    console.log(
      bookings.filter(
        huesped =>
          huesped.firstName === searchVal || huesped.surname === searchVal
      )
    );
    setBookings(
      bookings.filter(
        huesped =>
          huesped.firstName.toUpperCase() === searchVal.toUpperCase() ||
          huesped.surname.toUpperCase() === searchVal.toUpperCase()
      )
    );
    console.log(bookings);
  };

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://cyf-react.glitch.me")
        .then(response => response.json())
        .then(data => {
          setBookings(data);
          console.log("data en api", data);
        });
    };
    getData();
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
