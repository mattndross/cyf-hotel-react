import React, { useState } from "react";

const AddBooking = props => {
  const [newBooking, setNewBooking] = useState({});

  const handleSubmit = e => {
    setNewBooking({
      id: "",
      roomId: e.target[0].value,
      title: e.target.title.value,
      firstName: e.target.firstName.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      checkInDate: e.target.checkInDate.value,
      checkOutDate: e.target.checkOutDate.value
    });
    console.log("new booking", newBooking);
    props.addNewBooking(newBooking);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Room Id</label>
      <input type="text" id="room-id" name="roomId" />
      <br />
      <label>Title</label>
      <input type="text" id="title" name="title" />
      <br />
      <label>First Name</label>
      <input type="text" id="first-name" name="firstName" />
      <br />
      <label>Surname</label>
      <input type="text" id="surname" name="surname" />
      <br />
      <label>email</label>
      <input type="text" id="email" name="email" />
      <br />
      <label> Phone number</label>
      <input type="text" id="phone-number" name="phoneNumber" />
      <br />
      <label>Checkin Date</label>
      <input type="date" id="checkin-date" name="checkInDate" />
      <br />
      <label>Checkout Date</label>
      <input type="date" id="checkout-date" name="checkOutDate" />
      <br />
      <button>Add booking</button>
    </form>
  );
};

export default AddBooking;
