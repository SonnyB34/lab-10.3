import { createContext, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = useCallback(
    (text) => {
      const trimText = text.trim();
      if (!trimText) return;
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: trimText, completed: false },
      ]);
    },
    [setTodos],
  );

  const toggleTodo = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
      );
    },
    [setTodos],
  );

  const deleteTodo = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    },
    [setTodos],
  );

  const editTodo = useCallback(
    (id, newText) => {
      const trimText = newText.trim();
      if (!trimText) return;
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, text: trimText } : t)),
      );
    },
    [setTodos],
  );

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }, [setTodos]);

  const value = useMemo(
    () => ({
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      editTodo,
      clearCompleted,
    }),
    [todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be in TodoProvider');
  }
  return context;
}
