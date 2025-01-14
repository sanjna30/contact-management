export const getContacts = () => {
  return JSON.parse(localStorage.getItem("contacts")) || [];
};

export const saveContacts = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};
