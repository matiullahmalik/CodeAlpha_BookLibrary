import React from "react";
import './App.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BorrowHistoryPage from "./Pages/BorrowHistoryPage";
import CategoriesPage from "./Pages/CategoriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/borrow-history" element={<BorrowHistoryPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
