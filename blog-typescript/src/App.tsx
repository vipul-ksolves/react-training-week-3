import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Vipul from "./pages/Vipul";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vipul" element={<Vipul />} />
      </Routes>
    </div>
  );
};

export default App;
