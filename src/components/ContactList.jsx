import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length ? (
        contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} onDelete={() => handleDelete(index)} />
        ))
      ) : (
        <p>No contacts yet. Add one!</p>
      )}
    </div>
  );
};

export default ContactList;
