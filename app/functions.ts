// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pathChecker = (path: string | number, matches: any) => {
	const currentRoute = matches[matches.length - 1]
	const parts = currentRoute.pathname.split('/')
	const lastPart = parts[parts.length - 1]
	return lastPart === path
}
export const servers: Server[] = [
	{
		id: '1',
		title: 'Laptop',
		initials: 'L',
		imageUrl:
			'https://media.wired.com/photos/64daad6b4a854832b16fd3bc/191:100/w_1280,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg',
		notif: true,
	},
	{
		id: '2',
		title: 'Mobile',
		initials: 'M',
		imageUrl: null,
		notif: false,
	},
	{
		id: '3',
		title: 'Discord',
		initials: 'D',
		imageUrl: 'https://cdn.discordapp.com/icons/770287896669978684/e1e3ff1c3519034de5b462ee06e3b6f9.webp',
		notif: false,
	},
	{
		id: '4',
		title: 'BMW',
		initials: 'B',
		imageUrl: 'https://cdn.motor1.com/images/mgl/NzkPy/s1/1980-bmw-m1-for-sale.webp',
		notif: true,
	},
]
