/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'base': '#222831',
			'mid': '#2E333C',
			'main': '#393E46',
			'light': '#535A65',
			'accent': '#2BB800',
			'accent-mid':'#26A300',
			'warn':'#D96C28',
			'white': '#EEEEEE'
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
