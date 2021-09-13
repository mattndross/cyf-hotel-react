import React from "react";

const info = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <ul>
      {info.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
