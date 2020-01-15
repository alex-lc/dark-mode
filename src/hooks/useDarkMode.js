import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { visitFunctionBody } from 'typescript';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode');

    useEffect(() => {

        // let body = document.getElementsByTagName('body');

        if (value) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }, [value]);

    return [value, setValue];
}