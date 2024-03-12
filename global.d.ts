type Server = {
	id: number | string
	title: string
	initials: string
	imageUrl: string | null | undefined
	notif: boolean
}
type Friend = {
	id: string
	imageUrl: string
	imageAlt: string
	isOnline: boolean
	name: string
}
