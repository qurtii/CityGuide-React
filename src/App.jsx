import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./application/home/home.jsx";
import { Attractions } from "./application/attractions/attractions.jsx";
import { Contact } from "./application/contact/Contact.jsx";
import { Details } from "./application/details/details.jsx";
import { Adminpage } from "./assets/componets/adminpage.jsx";

function App() {
  return (
    <HashRouter basename="CityGuide-React">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/attractions/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
