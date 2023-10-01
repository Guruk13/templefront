/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
			pattern: /bg-(red|yellow|emerald|gray|slate|blue|green|indigo|pink|orange|rose)-[0-9]+/
		}
	],

	theme: {
		extend: {
			colors: {
				//https://www.rapidtables.com/convert/color/hex-to-rgb.html
				'templered': '#D91136',
				'templeredlight': '#D91448',
				'templebluelight': '#123273',
				'templeblue': '#0F2F59',
				'templestar': '#F2BC1B',
				'templedark': '#606000'
			},
			// that is animation class
			animation: {
				fade: 'fadeOut 4s ease-in-out',
				fadeBgLong: 'fadeBg 2s ease-in-out',
			},
			fontFamily: {
				templeslim: "OleoRegular",
				templeband: "GalaxyForce",
				templeevt: "IntroRust",
				templescript: "Kaushan",
				firamed: "FiraSans-Medium",
				firaext: "FiraSans-ExtraBold"
			},
			aspectRatio: {
				'A1': '1 / 1.42',
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
				'6xl': '0 65px 80px -30px rgba(0, 0, 0, 0.6)',
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
