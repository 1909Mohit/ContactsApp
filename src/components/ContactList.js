import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useContactsCRUD } from "../context/ContactsCrudContext";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
    const { contacts,text,retrieveContacts,searchResults,searchHandler } = useContactsCRUD();

    useEffect(() => {
        retrieveContacts();  
    }, []); 
     

    const renderContact = (text.length < 1 ? contacts: searchResults).map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
      />
    );
  });

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="mt-3 container-fluid" style={{backgroundColor:'#E9EFC0'}}>
      <h2 className="container">
        Contact List
        <Link to="/add">
          <button className="btn btn-primary float-end">Add Contact</button>
        </Link>
      </h2>
      <div>
        <div className="input-group container">
          <input   
            type="text"
            placeholder="Search Contacts"
            className="form-control"
            value={text}
            onChange={(e) => onUserSearch(e)}
          />
          <span class="input-group-text" id="basic-addon2">
            <i className="bi-search"></i>
          </span>
        </div>
      </div>
      <div className="container" >
        {renderContact.length > 0 ? renderContact : "No Contacts available"}
      </div>
    </div>
  );
};

export default ContactList;
