import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-photography-portfolio.pages.dev/astro-photography-portfolio',
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
