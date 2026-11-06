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
    }

}