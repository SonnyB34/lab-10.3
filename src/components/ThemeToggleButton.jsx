import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleButton() {

    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>

          {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
        </button>
    );
}