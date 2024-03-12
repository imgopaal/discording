import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				// primary: '#7289DA',
				primary: '#5865F2',
				gray: {
					100: '#1E1F22',
					200: '#2B2D31',
					300: '#313338',
				},
				text: {
					100: '#f2f3f5',
				},
			},
		},
	},
	plugins: [require('daisyui')],
} satisfies Config
