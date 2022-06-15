import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCRUD } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addContactHandler } = useContactsCRUD();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <main className="container " style={{backgroundColor:'#E9EFC0' }}>
      <h2 className="">Add Contact</h2>
      <form className="mb-0 " onSubmit={add}>
        <div className="mb-3">
          <label className="form-label h6" for="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="form-label h6" for="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="d-grid col-6 mx-auto " style={{color:'#15133C'}}>
          <button type="submit" className="btn btn-primary" >
            Add
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddContact;
