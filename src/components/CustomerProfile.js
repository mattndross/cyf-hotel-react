import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const getData = () => {
      fetch(`https://cyf-react.glitch.me/customers/${props.ID}`)
        .then(Response => Response.json())
        .then(data => {
          console.log("customer data", data);
          setCustomer(data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getData();
  }, [props.ID]);

  return (
    <>
      <h3>Customer {props.ID} profile</h3>
      <ul>
        <li>
          Name: {customer.firstName} {customer.surname}
        </li>
        <li>email: {customer.email}</li>
        <li>VIP: {customer.vip ? "YES" : "NO"}</li>
        <li>Phone Number: {customer.phoneNumber}</li>
      </ul>
    </>
  );
};
export default CustomerProfile;
