import React from "react";
import { books } from "../data/books";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8faff", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#1e293b" }}>All Books</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => navigate(`/books/${book.id}`)}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              padding: "1rem",
              cursor: "pointer",
              minWidth: "200px",
              maxWidth: "220px",
              flex: "1 1 220px",
              transition: "transform 0.2s",
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
            <div>
              <span
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "#e0f2fe",
                  color: "#0369a1",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontWeight: "500",
                }}
              >
                {book.category}
              </span>
              <h3 style={{ margin: "0.5rem 0 0.25rem", color: "#0f172a" }}>{book.title}</h3>
              <p style={{ margin: 0, color: "#475569", fontSize: "0.9rem" }}>by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
