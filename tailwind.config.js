const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Fira Sans', 'Arial', 'sans-serif'],
				serif: ['Fira Sans', 'Arial', 'sans-serif'],
				mono: ['Fira Sans', 'Arial', 'sans-serif'],
			},
		},
	},

	plugins: [typography, daisyui],
	daisyui: {
		logs: false,
		themes: [
			{
				pastel: {
					...require('daisyui/src/theming/themes')['[data-theme=pastel]'],
					primary: '#2779a7',
					accent: '#27296d',
					secondary: '#ff7050',
					success: '#428c5f',
					error: '#e32d2d',
					neutral: '#818181',
				},
			},
		],
	},
};
