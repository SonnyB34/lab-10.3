import { createContext, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    // If its light make it dark otherwise make it light
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }, [setTheme]);

    // Bundles the theme and toggleTheme function re create the value object only when one of them changes
    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be inside ThemeProvider");
    }

    return context;
}