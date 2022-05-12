import Group from "./Pages/Group";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/social-media-site/" element={<Group />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
