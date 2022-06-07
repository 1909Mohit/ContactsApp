import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../api/contacts";

const contactsCRUDContext = createContext();

export function ContactsCRUDContextProvider({ children }) {
    const [searchResults, setSearchResults] = useState([]);
    const [text, setText] = useState("");
    const [contacts, setContacts] = useState([]);
    const [contact] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  } 

  //addContacts
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  //DeleteContacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //updateContacts
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  //searchContact
  const searchHandler = (searchTerm) => {
    setText(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

    const value = {
        contact,
        contacts,
        retrieveContacts,
        removeContactHandler,
        addContactHandler,
        updateContactHandler,
        searchHandler,
        searchResults,
        text
    };

  return (
    <contactsCRUDContext.Provider value={value}>
      {children}
    </contactsCRUDContext.Provider>
  );
}

export function useContactsCRUD() {
  return useContext(contactsCRUDContext);
}
