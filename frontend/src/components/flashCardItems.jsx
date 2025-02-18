import React, { useState } from "react";
import axios from "axios";

const FlashcardItem = ({ flashcard, updateFlashcard, deleteFlashcard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [question, setQuestion] = useState(flashcard.question);
  const [answer, setAnswer] = useState(flashcard.answer);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedFlashcard = { ...flashcard, question, answer };

    axios
      .put(`/api/${flashcard._id}/UpdateFlash`, updatedFlashcard)
      .then((response) => {
        updateFlashcard(response.data);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating flashcard:", error));
  };

  const handleDelete = () => {
    axios
      .delete(`/api/${flashcard._id}`)
      .then(() => {
        deleteFlashcard(flashcard._id);
      })
      .catch((error) => console.error("Error deleting flashcard:", error));
  };

  return (
    <div className="mb-4 border p-4">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <button onClick={handleSave} className="bg-green-500 text-white p-2">
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Q:</strong> {flashcard.question}
          </p>
          <p>
            <strong>A:</strong> {flashcard.answer}
          </p>
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white p-2 mr-2">
            Edit
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-2">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardItem;
