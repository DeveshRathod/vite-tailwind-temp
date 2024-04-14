import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Details />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

export default App;
