import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Login onLogin={loginUser} />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <Signup onSignup={loginUser} />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} onLogout={logoutUser} /> : <Navigate to="/" />}
        />
        <Route path="/books" element={user ? <Books /> : <Navigate to="/" />} />
        <Route path="/books/:id" element={<BookDetails />} />

        {/* <Route path="/books/:id" element={user ? <BookDetails /> : <Navigate to="/" />} /> */}
        <Route path="/quiz/:type/:id?" element={user ? <Quiz /> : <Navigate to="/" />} />
        <Route path="/result" element={user ? <Result /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
