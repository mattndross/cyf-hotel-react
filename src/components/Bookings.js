import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBooking from "./AddBooking.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = searchVal => {
    console.log("searchVal", searchVal);

    setBookings(
      bookings.filter(
        huesped =>
          huesped.firstName.toUpperCase() === searchVal.toUpperCase() ||
          huesped.surname.toUpperCase() === searchVal.toUpperCase()
      )
    );
  };

  useEffect(() => {
    const getData = () => {
      fetch(`https://cyf-react.glitch.me`)
        .then(response => response.json())
        .then(data => {
          setBookings(data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getData();
  }, []);

  const addNewBooking = newBooking => {
    setBookings(...bookings, newBooking);
    console.log("cuantos booking hay", bookings.length);
  };

  if (loading) {
    return <h2>Loading data...</h2>;
  } else if (bookings.error) {
    return <h2>{bookings.error}</h2>;
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <AddBooking addNewBooking={addNewBooking} />
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;
