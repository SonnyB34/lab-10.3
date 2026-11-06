import { useState } from 'react';
import { useTodos } from '../context/TodoContext';


export default function TodoItem() {
    
    const { toggleTodo, deleteTodo, editTodo } = useTodos();

    // are we in editing mode (true) normal mode (false)
    const [isEditing, setIsEditing] = useState(false);

    // starts as the todos current text
    const [draft, setDraft] = useState(todo.text);

    // Save the edit updat the real todo and leave the editing mode  
    const saveEdit = () => {
        editTodo(todo.id, draft);
        setIsEditing(false);
    }

    const cancelEdit = () => {
        setDraft(todo.text); // reset draft to original text
        setIsEditing(false);
    };

    return (
        <li className='todo-item'>
            <input 
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />

            {/* If editing show the text box*/}
            {isEditing ? (
                <input 
                    className='edit-input'
                    value={draft}
                    autoFocus
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                        if (e.key === "Escape") cancelEdit();
                    }}
                />
            ) : (
                // if the todo is complete add done wiht a line through
                <span className={todo.completed ? "done" : ""}>{todo.text}</span>
            )}

            {/* Show different buttons depending on the mood */}
      {isEditing ? (
        <>
          <button onClick={save}>Save</button>
          <button onClick={cancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
        </li>
    );

}