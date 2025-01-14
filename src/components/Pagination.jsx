import React from "react";

const Pagination = ({ totalContacts, contactsPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalContacts / contactsPerPage);

  return (
    <div>
      {[...Array(totalPages)].map((_, index) => (
        <button key={index} onClick={() => setCurrentPage(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
