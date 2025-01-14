import React from "react";

const ContactCard = ({ contact, onDelete }) => (
  <div className="contact-card">
    {contact.image && <img src={contact.image} alt={contact.name} className="contact-image" />}
    <h3>{contact.name}</h3>
    <p>Email: {contact.email}</p>
    <p>Phone: {contact.phone}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default ContactCard;
