import { useState, useEffect } from 'react'

function getStorageValue(key, defaultValue) {
    const storedValue = JSON.parse(localStorage.getItem(key))
    return storedValue || defaultValue
}

function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export { useLocalStorage }