import TodoInput from './components/TodoInput'
import './App.css'
import TodoList from './components/TodoList'
import ThemeToggleButton from './components/ThemeToggleButton'
import FilterButtons from './components/FilterButtons'
import { useTheme } from './context/ThemeContext'

function App() {
 
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Todo App</h1>
        <ThemeToggleButton />
      </header>

      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  )
}

export default App
