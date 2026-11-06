import TodoInput from './components/TodoInput'
import './App.css'
import TodoList from './components/TodoList'

function App() {
 

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>

      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
