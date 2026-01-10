import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
	if (browser) {
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored === 'light' || stored === 'dark') {
			return stored;
		}
		// Check system preference
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			return 'light';
		}
	}
	return 'dark';
}

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>(getInitialTheme());

	return {
		subscribe,
		set: (value: Theme) => {
			if (browser) {
				localStorage.setItem('theme', value);
				document.documentElement.classList.remove('light', 'dark');
				document.documentElement.classList.add(value);
			}
			set(value);
		},
		toggle: () => {
			update((current) => {
				const newTheme = current === 'dark' ? 'light' : 'dark';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					document.documentElement.classList.remove('light', 'dark');
					document.documentElement.classList.add(newTheme);
				}
				return newTheme;
			});
		},
		init: () => {
			if (browser) {
				const theme = getInitialTheme();
				document.documentElement.classList.remove('light', 'dark');
				document.documentElement.classList.add(theme);
				set(theme);
			}
		}
	};
}

export const theme = createThemeStore();
