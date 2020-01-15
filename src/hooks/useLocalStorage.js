import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // if (localStorage.getItem(key)) {
        //     return;
        // }
        // else {
        //     return initialValue;
        // }

        // get item from local storage by key
        const item = window.localStorage.getItem(key);

        // parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        // save state
        setStoredValue(value);

        // save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}