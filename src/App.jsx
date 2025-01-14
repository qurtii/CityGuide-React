import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./assets/componets/home.jsx";
import { Attractions } from "./assets/componets/attractions.jsx";
import { Contact } from "./assets/componets/contact.jsx";
import { Showplace } from "./assets/componets/showPlace.jsx";
import { Adminpage } from "./assets/componets/adminpage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/attractions/id" element={<Showplace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
