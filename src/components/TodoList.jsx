import TodoItem from './TodoItem';
import { useTodos } from '../context/TodoContext';
import { useFilter } from '../context/FilterContext';

export default function TodoList() {
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();

  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed; // unfinished
    if (filter === 'completed') return todo.completed; // finished
    return true;
 });
 
    let hasCompleted = todos.some((todo) => todo.completed);

 

  if (visibleTodos.length === 0) {
    return <p>No todos yet! Add one.</p>;
  }
  return (
    <>
      <ul className="todo-list">
        {visibleTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

    {hasCompleted && (
      <button onClick={clearCompleted}>Clear Completed</button>
      )}
    </>
  );
}
