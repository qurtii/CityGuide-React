import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'

import App from './App.jsx'
import { Home } from './assets/componets/home.jsx';


ReactDOM.createRoot(root).render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //   </Routes>
  // </BrowserRouter>
  <>
    <App />
  </>
);
