import React, { useState } from "react";
import moment from "moment";
moment().format();

export const TableRow = props => {
  const [isActive, setActive] = useState(false);
  const select = () => {
    setActive(!isActive);
  };

  const checkOut = moment(props.item.checkOutDate, "YYYY-MM-DD");
  const checkIn = moment(props.item.checkInDate, "YYYY-MM-DD");
  return (
    <tr
      key={props.index}
      className={`${isActive ? "table-active" : ""}`}
      onClick={select}
    >
      <th scope="row" />
      <td>
        <button
          onClick={() => {
            props.clickHandler(props.item.id);
          }}
        >
          Show Profile
        </button>
      </td>
      <td>{props.item.id}</td>
      <td>{props.item.title}</td>
      <td>{props.item.firstName}</td>
      <td>{props.item.surname}</td>
      <td>{props.item.email}</td>
      <td>{props.item.roomId}</td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
    </tr>
  );
};
