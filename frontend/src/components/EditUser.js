import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    //create method for take single data
    const getUserById = async () => {
      try {
        //use backtic `` and useParams for take id from parameter
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
      } catch (error) {
        console.log(error);
      }
    };

    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    //Add preventDefault when submit, page not reload
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        //For data post, data use from state
        name,
        email,
        gender,
      }); //If succes submited and save will redirect to home.Use useNavigate from react router dom
      navigate("/"); //for "/" its mean home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                //This function to update state
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                //This function to update state
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  //This function to update state
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-succes">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
