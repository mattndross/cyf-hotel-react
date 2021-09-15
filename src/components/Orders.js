import React, { useState } from "react";
import { RestaurantButton } from "./RestaurantButton";

export const Orders = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton eventHandler={orderOne} />
    </li>
  );
};
