import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Home;
