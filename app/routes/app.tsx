import { LoaderFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { supabase } from 'supbase-config'
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'

export const loader: LoaderFunction = async () => {
	try {
		// Fetch friends' data except the current user
		const { data: friendsData, error: friendsError } = await supabase
			.from('friends')
			.select('*')
			.neq('id', process.env.MY_USER_ID)

		if (friendsError) {
			console.log(friendsError, 'this is the error')
			throw new Error('Error fetching friends')
		}

		// Extract friend IDs
		const friendIds = friendsData.map(friend => friend.friend_id)

		// Fetch additional information about the friends from the users table
		const { data: userData, error: userError } = await supabase.from('users').select('*').in('id', friendIds)

		if (userError) {
			console.log(userError, 'this is the error')
			throw new Error('Error fetching user data')
		}

		// Combine friend data with user data based on friend ID
		const friends = friendsData.map(friend => {
			const userDataForFriend = userData.find(user => user.id === friend.friend_id)
			return {
				...friend,
				...userDataForFriend,
			}
		})

		return { friends }
	} catch (error) {
		console.error('An error occurred:', error)
		throw new Error('Error loading data')
	}
}

export default function Home() {
	// const { friends }: { friends: Friend[] } = useLoaderData<typeof loader>()
	return (
		<div className="h-dvh w-full flex flex-1 bg-gray-300 no-scrollbar">
			<Navbar />
			<Sidebar />
			<Outlet />
		</div>
	)
}
