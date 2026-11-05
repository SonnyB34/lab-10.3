import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const savedInfo = localStorage.getItem(key);
            return savedInfo ? (JSON.parse(savedInfo)) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // if storage is full or blocked ignore it
        }
    }, [key, value]);

    return [value, setValue];
}