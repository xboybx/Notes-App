import React, { useState } from "react";

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
        // this add on function is same as Additem()
        //  in app which precess note in app component
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
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
                <button onClick={submitNote}>+</button>
            </form>
        </div>
    );
}

export default CreateArea;
