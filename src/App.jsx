import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PublicPortfolio from "./pages/PublicPortfolio.jsx";
import AdminDashboard from "./pages/AdminDashBoard";

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="p-4 bg-gray-900 text-white flex justify-between">
        <Link to="/" className="font-bold">
          Portfolio
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<PublicPortfolio />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}
