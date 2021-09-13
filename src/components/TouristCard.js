import React from "react";
import TouristInfoCards from "./TouristInfoCard";
const cities = [
  {
    name: "Glasgow",
    image: "url",
    enlace: "peoplemakeglasgow.com",
    description: "lorem ipsum"
  },
  {
    name: "Manchester",
    image: "url",
    enlace: "visitmanchester.com",
    description: "Lorem Ipsum"
  },
  {
    name: "London",
    image: "url",
    enlace: "visitlondon.com",
    description: "Lorem ipsum"
  }
];

const TouristCard = () => {
  return cities.map(city => (
    <TouristInfoCards
      name={city.name}
      image={city.image}
      description={city.description}
      enlace={city.enlace}
    />
  ));
};
export default TouristCard;
