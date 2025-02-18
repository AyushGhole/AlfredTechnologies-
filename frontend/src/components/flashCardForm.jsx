import React, { useState } from "react";
import axios from "axios";

const FlashcardForm = ({ addFlashcard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const flashcard = { question, answer };

    axios
      .post("/api/createFlashCard", flashcard)
      .then((response) => {
        addFlashcard(response.data);
        setQuestion("");
        setAnswer("");
      })
      .catch((error) => console.error("Error creating flashcard:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Create Flashcard
      </button>
    </form>
  );
};

export default FlashcardForm;
