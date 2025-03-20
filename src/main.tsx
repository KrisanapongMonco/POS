import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./layouts/index.layout";
import Order from "./pages/Order.pages";
import Dashboard from "./pages/Dashboard.pages";
import SignIn from "./pages/SignIn.pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/app" element={<Navigation />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
