import React from "react";

export const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.eventHandler}>
      Add
    </button>
  );
};
