import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layouts/index.layout";
import Dashboard from "./pages/Dashboard.pages";
import Order from "./pages/Order.pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
