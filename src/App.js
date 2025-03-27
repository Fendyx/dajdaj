import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contacts from "./Pages/Contacts/Contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dajdaj" element={<Home />} />
        <Route path="/dajdaj/products" element={<Products />} />
        <Route path="/dajdaj/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;

