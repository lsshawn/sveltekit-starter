const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-family)', 'Arial', 'sans-serif'],
				serif: ['var(--font-family)', 'Arial', 'sans-serif'],
				mono: ['var(--font-family)', 'Arial', 'sans-serif']
			}
		}
	},

	plugins: [forms, typography, daisyui],
	daisyui: {
		logs: false,
		themes: []
	}
};

module.exports = config;
