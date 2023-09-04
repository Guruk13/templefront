import { sveltekit } from '@sveltejs/kit/vite';
import './src/lib/lineicons/webfontfiles/lineicons.css';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
