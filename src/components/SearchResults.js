import React from "react";

import { TableRow } from "./TableRow";

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
            return <TableRow key={index} item={item} />;
          })}
      </tbody>
    </table>
  );
};

export default SearchResults;
