import { Outlet } from '@remix-run/react'

export default function DirectMessagesRoute() {
	const abs = 'abs'
	return <Outlet context={abs} />
}
