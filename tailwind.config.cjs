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
			},
			// that is animation class
			animation: {
				fade: 'fadeOut 4s ease-in-out',
				fadeBgLong: 'fadeBg 2s ease-in-out',
			},
			fontFamily: {
				templeslim: "OleoRegular",
				templeband: "GalaxyForce"
			},

			// that is actual animation
			keyframes: theme => ({
				fadeOut: {
					'0%': { opacity: '0', top: '-35px' },
					'100%': { opacity: '1', top: '0' },
				},
			}),
		}

	},

};

module.exports = config;
