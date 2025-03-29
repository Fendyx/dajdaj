import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contacts from "./Pages/Contacts/Contacts";

const isProduction = window.location.hostname !== "localhost";

function App() {
  return (
    <Router basename={isProduction ? "/dajdaj" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;



