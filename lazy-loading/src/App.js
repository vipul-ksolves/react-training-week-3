import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
const LazyAbout = React.lazy(() => import("./About"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading.....">
              <LazyAbout />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
