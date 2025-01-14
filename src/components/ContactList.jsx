import React, { useState } from "react";
import ContactCard from "./ContactCard";
import Pagination from "./Pagination";

const ContactList = () => {
  const [contacts, setContacts] = useState([]); // Contacts ka state
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 20;

  // Pagination logic
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  return (
    <div>
      {currentContacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
      <Pagination
        totalContacts={contacts.length}
        contactsPerPage={contactsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ContactList;
