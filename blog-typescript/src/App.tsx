import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Details from "./components/blogs/Details";
import Update from "./pages/Update";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
