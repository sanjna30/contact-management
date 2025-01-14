import React from "react";
import "./styles/App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => (
  <div className="App dark-theme">
    <h1>Contact Management App</h1>
    <ContactForm />
    <ContactList />
  </div>
);

export default App;
