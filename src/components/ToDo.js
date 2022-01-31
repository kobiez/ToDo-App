import React, { useState } from "react";

function ToDo({ text, deleteFromList, taskKey, editTask }) {
    const [isReadOnly, setIsReadOnly] = useState(true)
    return (
        <div >
            <input
                type="text"
                value={text}
                readOnly={isReadOnly}
                onChange={(e) => editTask(text, taskKey)}
            />
            <button onClick={() => setIsReadOnly(false)}>Edit Task</button>
            <button onClick={() => setIsReadOnly(true)}>Save Changes</button>
            <button onClick={() => deleteFromList(taskKey)}>Delete</button>
        </div>
    )
}

export default ToDo;