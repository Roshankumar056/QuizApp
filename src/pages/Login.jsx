import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email, name: email.split("@")[0] });
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #74ebd5 0%, #9face6 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "2.5rem",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#333",
            fontSize: "1.75rem",
          }}
        >
          Welcome Back 👋
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              transition: "border-color 0.3s",
            }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1.5rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              transition: "border-color 0.3s",
            }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#4A90E2",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3a78c2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4A90E2")}
          >
            Login
          </button>
        </form>
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            color: "#555",
            fontSize: "0.95rem",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#4A90E2",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}
