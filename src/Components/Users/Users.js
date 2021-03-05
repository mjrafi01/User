import React, { useState } from "react";

const Users = (props) => {
  const { name, gender, email, phone, picture } = props.user;
  const fullName = name.title + " " + name.first + " " + name.last;
  const addMember = props.addMember;
  const [phoneNumber, setPhoneNumber] = useState("");
  const usersStyle = {
    border: "2px solid red",
    margin: "10px",
    borderRadius: "10px ",
    padding: "10px",
    display: "flex",
    width: "40%"
  };
  const ShowPhoneNumber = () => setPhoneNumber(phone);
  return (
    <div style={usersStyle}>
      <div style={{ marginTop: "25px" }}>
        <img src={picture.large} alt="" />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <p>Name:{fullName} </p>
        <p>Gender:{gender}</p>
        <p>Email:{email}</p>
        <p>Phone:{phoneNumber}</p>
        <button onClick={ShowPhoneNumber}>Show Phone Number</button>
        <button onClick={() => addMember(fullName)}>Add me</button>
      </div>
    </div>
  );
};

export default Users;
