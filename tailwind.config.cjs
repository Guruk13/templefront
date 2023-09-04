/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				//https://www.rapidtables.com/convert/color/hex-to-rgb.html
				'templered': '#D91136',
				'templeredlight': '#D91448',
				'templebluelight': '#123273',
				'templeblue': '#0F2F59',
				'templestar': '#F2BC1B'
			}
		}

	},

};

module.exports = config;
