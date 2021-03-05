import "./styles.css";
import Users from "./Components/Users/Users";
import React, { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  const addMember = (name) => {
    console.log("added");
  };
  return (
    <div className="App">
      {users.map((user) => (
        <Users user={user} addMember={addMember}></Users>
      ))}
    </div>
  );
}
