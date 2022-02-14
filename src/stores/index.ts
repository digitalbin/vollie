import { writable } from 'svelte/store';

export const pageTitle = writable('');

export const darkMode = writable(false);

darkMode.subscribe(dm => {
    if (dm) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})