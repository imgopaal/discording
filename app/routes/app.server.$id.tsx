import { Outlet } from '@remix-run/react'

function DynamicServerPage() {
	return (
		<div>
			DynamicServerPage
			<Outlet />
		</div>
	)
}

export default DynamicServerPage
