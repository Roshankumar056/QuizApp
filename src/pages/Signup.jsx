import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup({ onSignup }) {
  const [email, setEmail]   = useState("");
  const [password, setPass] = useState("");
  const [name, setName]     = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name) {
      onSignup({ email, name });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "2.5rem",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
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
          Create Account ✨
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
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#ff7f50",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e8683d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff7f50")}
          >
            Signup
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
          Already have an account?{" "}
          <Link
            to="/"
            style={{
              color: "#ff7f50",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
