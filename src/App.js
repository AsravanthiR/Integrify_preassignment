import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "bootstrap";
import BrewerySingle from "./components/BrewerySingle";
import Layout from "./components/Layout";
import Brewery from "./components/Brewery";
import Home from "./pages/Home";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="brewery" element={<Brewery />} />
            <Route path="/:id" element={<BrewerySingle />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
