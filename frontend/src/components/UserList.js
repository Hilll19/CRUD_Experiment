import React, { useState, useEffect } from "react";
import axios from "axios"; //for interaction with database

const UserList = () => {
  //create new state,have function to update statenya 'setUser'.And inisial value is empty array
  const [users, setUser] = useState([]);

  //running function getUsers will use usEffect
  useEffect(() => {
    getUsers();
  }, []);

  //create for method patch data
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <button className="button is-small is-info">Edit</button>
                  <button className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default UserList;
