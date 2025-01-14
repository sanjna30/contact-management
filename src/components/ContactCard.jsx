import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={contact.image} alt={contact.name} style={{ width: "50px" }} />
      <h3>{contact.name}</h3>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactCard;
