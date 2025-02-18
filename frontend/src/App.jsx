import { useState, useEffect } from "react";
import axios from "axios";
import FlashcardForm from "./components/flashcardForm";
import FlashcardList from "./components/flashCardItems";
import Login from "./components/Login";
import SignUp from "../src/components/SignUp";

function App() {
  const [page, setPage] = useState("Login");

  return (
    <>
      {page === "Login" ? (
        <Login setPage={setPage} />
      ) : page === "SignUp" ? (
        <SignUp setPage={setPage} />
      ) : page === "dashboard" ? (
        <div className="container mx-auto p-4">
          <h1 className="text-center text-2xl mb-4">Flashcard Learning App</h1>
          <FlashcardForm />
          <FlashcardList />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
