import React from "react";

const About = ({ msg }) => {
  return (
    <div className=" bg-secondary d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>{msg}</h1>
      <h2>About View</h2>
    </div>
  );
};

export default About;
