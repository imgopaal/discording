import { useMatches } from '@remix-run/react'
import { BiPlus } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { HiMiniTrophy } from 'react-icons/hi2'
import { MdShoppingBag } from 'react-icons/md'
import { ROUTES } from '~/consts'
import { pathChecker } from '~/functions'
import FriendChatOpener from './FriendChatOpener'
import { Friends } from '~/dummyData'

export default function Sidebar() {
	const actions = [
		{
			id: 0,
			icon: <FaUserFriends className="text-2xl" />,
			title: 'Friends',
		},
		{
			id: 1,
			icon: <HiMiniTrophy className="text-2xl" />,
			title: 'Nitro',
		},
		{
			id: 2,
			icon: <MdShoppingBag className="text-2xl" />,
			title: 'Shop',
		},
	]
	const matches = useMatches()
	const isThisMyDM = pathChecker(ROUTES.DM, matches)
	return (
		<div className="h-full w-[240px] bg-gray-200">
			{isThisMyDM && (
				<>
					{/* Search Bar */}
					<div className="border-gray-100 border-b-[1px] py-[10px] px-[10px] text-white">
						<input
							type="text"
							placeholder="Find or start a conversation"
							className="input input-sm h-[1.6rem] pl-[.5rem] pr-[.5rem] border-0 rounded-[4px] input-bordered w-full max-w-xs bg-gray-100 text-text-200"
						/>
					</div>
					{/* Friends section */}
					<div className="overflow-x-scroll no-scrollbar max-h-[calc(100svh-47px)]">
						{/* Friends Actions */}
						<div className="py-[10px] px-[10px]">
							{actions.map(item => {
								const { id, icon, title } = item
								return (
									<button
										key={id}
										className="btn shadow-none no-animation w-full bg-transparent hover:bg-gray-300 hover:text-white flex justify-start border-0 rounded-[4px]"
									>
										{icon}
										<span className="ml-2 font-medium">{title}</span>
									</button>
								)
							})}
						</div>
						{/* heading with add new friend button */}
						<div className="flex justify-between w-full py-3 px-5 group">
							<span className="font-medium text-xs block uppercase text-gray-400 group-hover:text-white">
								Direct Messages
							</span>
							<BiPlus className="group-hover:text-white" />
						</div>
						{/* friends listing */}

						{Friends.map((friend: Friend) => {
							return <FriendChatOpener key={friend.id} friend={friend} />
						})}
					</div>
				</>
			)}
		</div>
	)
}
