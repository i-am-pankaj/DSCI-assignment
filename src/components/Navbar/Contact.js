import React from "react";

const Contact = ({ msg }) => {
  return (
    <div className="bg-success d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>{msg}</h1>
      <h2>Contact View</h2>
    </div>
  );
};

export default Contact;
