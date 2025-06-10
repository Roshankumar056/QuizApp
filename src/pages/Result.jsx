import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No quiz data found.</p>;
  }

  const { questions, answers } = state;

  const score = answers.reduce((acc, ans, i) => {
    if (ans === questions[i].correctAnswer) return acc + 1;
    return acc;
  }, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>
        Your Score: {score} / {questions.length}
      </h2>
      <button onClick={() => navigate("/dashboard")} style={{ marginBottom: "1rem" }}>
        Back to Dashboard
      </button>

      <h3>Review Answers</h3>
      <ul>
        {questions.map((q, i) => (
          <li key={q.id} style={{ marginBottom: "1rem" }}>
            <p><b>Q:</b> {q.question}</p>
            <p><b>Your answer:</b> {q.options[answers[i]]}</p>
            <p><b>Correct answer:</b> {q.options[q.correctAnswer]}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
