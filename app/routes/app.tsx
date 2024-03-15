import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { supabase } from 'supbase-config'
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'

export const loader: LoaderFunction = async () => {
	// fetch me users from supabase expect me
	const { data: users, error: usersError } = await supabase
		.from('users')
		.select('*')
		.neq('id', process.env.MY_USER_ID)

	if (usersError) {
		console.log(usersError, 'this is the error')
		throw new Error('Error fetching users')
	}

	return users
}
export default function Home() {
	const users = useLoaderData()
	return (
		<div className="h-dvh w-full flex flex-1 bg-gray-300">
			<Navbar />
			<Sidebar friends={users} />
			<Outlet context={users} />
		</div>
	)
}
