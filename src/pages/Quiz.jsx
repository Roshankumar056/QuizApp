import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { categoryQuizzes, bookQuizzes } from "../data/quizzes";

export default function Quiz() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  let questions = [];
  if (type === "category" && id) {
    questions = categoryQuizzes[id] || [];
  } else if (type === "book" && id) {
    questions = bookQuizzes[id] || [];
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  if (questions.length === 0) return <p>No quiz found</p>;

  const currentQ = questions[currentIndex];

  const handleNext = () => {
    if (selectedOption === null) {
      alert("Please select an option");
      return;
    }

    setAnswers([...answers, selectedOption]);
    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/result", { state: { questions, answers: [...answers, selectedOption] } });
    }
  };

return (
  <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
      }}
    >
      <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>
        Question {currentIndex + 1} of {questions.length}
      </h2>
      <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "#334155", marginBottom: "1.5rem" }}>
        {currentQ.question}
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentQ.options.map((opt, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                padding: "0.75rem 1rem",
                backgroundColor: selectedOption === idx ? "#e0f2fe" : "#f8fafc",
                border: selectedOption === idx ? "2px solid #0284c7" : "1px solid #cbd5e1",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onClick={() => setSelectedOption(idx)}
            >
              <input
                type="radio"
                name="option"
                checked={selectedOption === idx}
                onChange={() => setSelectedOption(idx)}
                style={{ marginRight: "10px" }}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>

      <button
        onClick={handleNext}
        style={{
          marginTop: "1.5rem",
          padding: "0.6rem 1.5rem",
          backgroundColor: "#1e40af",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {currentIndex + 1 === questions.length ? "Finish Quiz" : "Next"}
      </button>

      <br />

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1.2rem",
          backgroundColor: "#f1f5f9",
          color: "#1e293b",
          border: "1px solid #cbd5e1",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "0.95rem",
        }}
      >
        Cancel Quiz
      </button>
    </div>
  </div>
);


}
