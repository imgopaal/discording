type Server = {
	id: number | string
	title: string
	initials: string
	imageUrl: string | null | undefined
	notif: boolean
}
type Friend = {
	id: string
	display_picture_url: string
	display_picture_alt: string
	is_online: boolean
	first_name: string
	last_name: string
}
type Message = {
	message_id: string
	message: string
	time: Date
	imageUrl: string
	imageAlt: string
	full_name:string
}