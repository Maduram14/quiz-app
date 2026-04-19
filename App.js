import React, { useState } from "react";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language"],
    answer: "Library"
  },
  {
    question: "What is JSX?",
    options: ["HTML in JS", "CSS", "Database"],
    answer: "HTML in JS"
  },
  {
    question: "Who maintains React?",
    options: ["Google", "Facebook", "Microsoft"],
    answer: "Facebook"
  }
];

// Child Component
function Question({ data, index, handleAnswer }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{data.question}</h3>

      {data.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(index, opt)}
          style={{
            margin: "5px",
            padding: "8px 12px",
            cursor: "pointer"
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// Parent Component
function App() {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});

  const handleAnswer = (index, option) => {
    // prevent multiple scoring for same question
    if (answered[index]) return;

    if (option === questions[index].answer) {
      setScore((prev) => prev + 1);
    }

    setAnswered({ ...answered, [index]: true });
  };

  const resetQuiz = () => {
    setScore(0);
    setAnswered({});
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Quiz App</h1>

      {questions.map((q, index) => (
        <Question
          key={index}
          data={q}
          index={index}
          handleAnswer={handleAnswer}
        />
      ))}

      <h2>Score: {score} / {questions.length}</h2>

      <button
        onClick={resetQuiz}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default App;