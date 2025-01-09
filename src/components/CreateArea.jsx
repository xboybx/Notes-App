import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function HandleChange(event) {
        const { name, value } = event.target;
        setNote((preNote) => {
            return {
                ...preNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        event.preventDefault();

        // Check if note is empty
        if (note.title.trim() === "" && note.content.trim() === "") {
            return;
        }

        // this add on function is same as Additem()
        //  in app which precess note in app component
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
    }

    // Handle Enter key press
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            submitNote(event);
        }
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={HandleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={HandleChange}
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                />
                <button onKeyDown={handleKeyPress} onClick={submitNote}><AddIcon /></button>
            </form>
        </div>
    );
}

export default CreateArea;
