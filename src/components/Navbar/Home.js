import React from "react";

const Home = ({ msg }) => {
  return (
    <div className="bg-warning d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>{msg}</h1>
      <h2>Home View</h2>
    </div>
  );
};

export default Home;
