import React from "react";

const TouristInfoCards = props => {
  return (
    <div className={props.name}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p>{props.description}</p>
        <a href={props.enlace} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
