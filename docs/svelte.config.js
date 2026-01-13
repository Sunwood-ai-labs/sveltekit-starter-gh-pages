import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-static configuration for GitHub Pages
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),

		// Configure base path for GitHub Pages
		// Note: docs/ folder is served as root by GitHub Pages
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-starter-gh-pages' : ''
		}
	}
};

export default config;
