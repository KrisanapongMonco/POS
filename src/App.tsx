// import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Users from "./pages/Users";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Simulate authentication
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSignUp = (email: string, password: string) => {
    // Simulate sign-up
    alert(`Account created for ${email}`);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
