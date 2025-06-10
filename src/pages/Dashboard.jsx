import React from "react";
import { useNavigate } from "react-router-dom";
import { quizCategories } from "../data/categories";
import { books } from "../data/books";

export default function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8faff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "1.8rem", color: "#2b2d42" }}>
          Welcome, {user.name || user.email}
        </h1>
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "#1e293b",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>

      {/* Quiz Categories */}
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem", color: "#1e293b" }}>
        Quiz Categories
      </h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {quizCategories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/quiz/category/${cat.id}`)}
            style={{
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              cursor: "pointer",
              minWidth: "180px",
              flex: "1 1 200px",
              textAlign: "left",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#1e40af", marginBottom: "0.5rem" }}>{cat.name}</h3>
            <p style={{ color: "#475569" }}>{cat.description || "Category details"}</p>
          </div>
        ))}
      </div>

      {/* Books Section */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem", color: "#1e293b" }}>Books</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {books.map((book) => (
          <div
  key={book.id}
  onClick={() => navigate(`/books/${book.id}`)}
  style={{
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    minWidth: "200px",
    flex: "1 1 220px",
    transition: "transform 0.2s",
    cursor: "pointer",
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  <img
    src={book.image || "https://via.placeholder.com/200x280?text=No+Image"}
    alt={book.title}
    style={{
      width: "100%",
      height: "280px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "0.5rem",
    }}
  />

  {/* Title navigates too, but stop bubbling so both don't fire simultaneously */}
  <h3
    onClick={(e) => {
      e.stopPropagation();
      navigate(`/books/${book.id}`);
    }}
    style={{ color: "#0f172a", marginBottom: "0.25rem", textDecoration: "underline" }}
  >
    {book.title}
  </h3>

  <p style={{ fontStyle: "italic", color: "#64748b", margin: 0 }}>{book.category}</p>
  <p style={{ color: "#475569", margin: "0.25rem 0" }}>by {book.author}</p>
  <p style={{ color: "#475569", fontSize: "0.9rem" }}>
    📘 {book.questionsCount || 10} Quiz Questions
  </p>

  {/* Buttons */}
  <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}
       onClick={(e) => e.stopPropagation()}> {/* Prevent button click from bubbling */}
    <button
      onClick={() => window.open(book.pdfLink, "_blank")}
      style={{
        flex: 1,
        padding: "0.4rem",
        backgroundColor: "#f1f5f9",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Read
    </button>
    <button
      onClick={() => navigate(`/quiz/book/${book.title}`)}
      style={{
        flex: 1,
        padding: "0.4rem",
        backgroundColor: "#1e293b",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Quiz
    </button>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}
