import React, { useState } from "react";

const ContactForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [phone, setPhone] = useState(initialData?.phone || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [image, setImage] = useState(initialData?.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone, email, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Save</button>
    </form>
  );
};

export default ContactForm;
