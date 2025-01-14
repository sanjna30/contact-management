import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "", image: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setContact((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    localStorage.setItem("contacts", JSON.stringify([...savedContacts, contact]));
    alert("Contact added!");
    setContact({ name: "", email: "", phone: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Add Contact</h2>
      {["name", "email", "phone"].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={contact[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <div>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {contact.image && <img src={contact.image} alt="Preview" className="image-preview" />}
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
