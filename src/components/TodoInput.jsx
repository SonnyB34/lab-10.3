import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export default function TodoInput() {
    // remembers what the user has typed so far in the input box
    const [text, setText] = useState("");

    // Listen to the TodoContext and grab just the addTodo function
    const { addTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Tell the TodoContext to add this new todo
        addTodo(text);

        // Empty the input box so it's ready for next todo
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text} // box always shows whats stored in text
                placeholder="what do we need to do?"
                onChange={(e) => setText(e.target.value)} // every key entered updates text
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}