import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);

  if (!book) return <p style={{ padding: "2rem", color: "red" }}>❌ Book not found</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>{book.title}</h2>

        <p style={{ color: "#334155", fontSize: "1rem", marginBottom: "0.5rem" }}>
          <b>Author:</b> {book.author}
        </p>
        <p style={{ color: "#334155", fontSize: "1rem", marginBottom: "0.5rem" }}>
          <b>Category:</b> {book.category}
        </p>
        <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "1.5rem" }}>
          {book.description || "No description available."}
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate(`/quiz/book/${book.title}`)} // quiz route using book title
            style={{
              backgroundColor: "#1e40af",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            🚀 Take Quiz for this Book
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              backgroundColor: "#e2e8f0",
              color: "#1e293b",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            🔙 Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
