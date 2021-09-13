import React from "react";
import moment from "moment";
moment().format();

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results &&
          props.results.map((item, index) => {
            console.log(item);
            const checkOut = moment(item.checkOutDate, "YYYY-MM-DD");
            const checkIn = moment(item.checkInDate, "YYYY-MM-DD");
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{checkOut.diff(checkIn, "days")}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default SearchResults;
