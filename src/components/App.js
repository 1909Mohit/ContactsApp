import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import EditContacts from "./EditContacts";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import { ContactsCRUDContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="container-fluid m-0 p-0" style={{backgroundColor:'#E9EFC0' }}>
      <Router>
        <Header />
        <ContactsCRUDContextProvider>
          <Routes>
            <Route path="/" element={<ContactList/>}/>
            <Route path="/add" element={<AddContact/>}/>
            <Route path="/edit" element={<EditContacts/> } />
            <Route path="/contact/:id" element={<ContactDetails/>}/>
          </Routes>
        </ContactsCRUDContextProvider>
      </Router>
    </div>
  );
}

export default App;
