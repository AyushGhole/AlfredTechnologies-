import React, { useState } from "react";
import FlashcardItem from "./FlashcardItem";

const FlashcardList = ({ flashcards, updateFlashcard, deleteFlashcard }) => {
  return (
    <div>
      {flashcards.map((flashcard) => (
        <FlashcardItem
          key={flashcard._id}
          flashcard={flashcard}
          updateFlashcard={updateFlashcard}
          deleteFlashcard={deleteFlashcard}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
