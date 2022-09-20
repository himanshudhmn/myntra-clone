import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pdetails/:id" element={<Product />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
