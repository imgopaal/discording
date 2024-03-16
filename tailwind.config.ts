import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5865F2',
				gray: {
					100: '#1E1F22',
					200: '#2B2D31',
					300: '#313338',
					400: '#404249',
					500: '#2a2b30',
					600: '#232428',
					700: '#B5BAC1',
					800: '#383a40',
					900: '#2e3035',
				},

				text: {
					100: '#f2f3f5',
					200: '#949BA4',
					300: '#DBDEE1',
				},
				placeholder: {
					100: '#6d6f78',
				},
			},
		},
	},
	plugins: [require('daisyui')],
} satisfies Config
