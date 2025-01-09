import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleDelete(event) {
        event.stopPropagation(); // Prevent event from bubbling up to the parent div
        props.onComplete(props.id);
    }

    function toggleExpand() {
        setIsExpanded(!isExpanded);
    }//

    return (
        <div className={`note ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
