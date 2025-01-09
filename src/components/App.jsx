import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";


function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to local storage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    if (note.title.trim() === "" && note.content.trim() === "") {
      setError("Note Cannot be Empty");
      return;
    }
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    // After adding notes it removes the error message
    setError("");
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
        // returing all the notes which are not equal to id
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {notes.map((newNoteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onComplete={deleteNote}
            title={newNoteItem.title}
            content={newNoteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
