import { useMatches } from '@remix-run/react'
import { BiPlus } from 'react-icons/bi'
import { ROUTES } from '~/consts'
import { pathChecker } from '~/functions'
import FriendChatOpener from './FriendChatOpener'

import { LoaderFunction } from '@remix-run/node'
import { useState } from 'react'
import { FiHeadphones } from 'react-icons/fi'
import { IoMdMic,IoMdMicOff } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { TbHeadphonesOff } from 'react-icons/tb'
import { ReactSVG } from 'react-svg'
import { supabase } from 'supbase-config'
import { Friends,Nitro,Shop } from '~/icons'

export const loader: LoaderFunction = async () => {
	const { data: users, error: usersError } = await supabase.from('users').select('*').eq('id', process.env.MY_USER_ID)
	console.log(users, 'this is my data')
	return users
}

export default function Sidebar({ friends }: { friends: Friend[] }) {
	// const loaderData = useLoaderData<typeof loader>()
	// const myData = loaderData.find((item: Friend) => item.id === process.env.MY_USER_ID)
	// console.log(myData, 'this is my data')
	const data = {
		display_picture_alt: 'my display picture',
		display_picture_url: 'https://avatars.githubusercontent.com/u/24633393?v=4',
		is_online: true,
		first_name: 'Gopal',
	}
	const { display_picture_alt, display_picture_url, is_online, first_name } = data
	const actions = [
		{
			id: 0,
			icon: <ReactSVG src={Friends} className="text-3xl" />,
			title: 'Friends',
		},
		{
			id: 1,
			icon: <ReactSVG src={Nitro} className="text-3xl" />,
			title: 'Nitro',
		},
		{
			id: 2,
			icon: <ReactSVG src={Shop} className="text-3xl" />,
			title: 'Shop',
		},
	]
	const matches = useMatches()
	const isThisMyDM = pathChecker(ROUTES.DM, matches)
	const [micOn, setMicOn] = useState(true)
	const [headphonesOn, setHeadphonesOn] = useState(true)
	return (
		<div className="h-full min-w-[240px] max-w-[240px] bg-gray-200">
			{isThisMyDM && (
				<div className="relative h-full">
					{/* Search Bar */}
					<div className="border-gray-100 border-b-[1px] py-[10px] px-[10px] text-white">
						<input
							type="text"
							placeholder="Find or start a conversation"
							className="input input-sm h-[1.6rem] pl-[.5rem] pr-[.5rem] border-0 rounded-[4px] input-bordered w-full max-w-xs bg-gray-100 text-text-200 placeholder:text-text-200"
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
							<span className="font-medium text-xs block uppercase text-text-200 group-hover:text-white">
								Direct Messages
							</span>
							<BiPlus className="group-hover:text-white cursor-pointer" />
						</div>
						{/* friends listing */}
						<div className="grid gap-[2px] mb-2">
							{/* .filter(friend => friend.id != process.env.MY_USER_ID) */}
							{friends.map((friend: Friend) => {
								return <FriendChatOpener key={friend.id} friend={friend} />
							})}
						</div>
						{/* profile info */}
					</div>
					<div className="bg-gray-600 w-full flex-row absolute flex p-1 bottom-0 h-[53px]">
						<div className="flex flex-row items-center hover:bg-gray-400 rounded-[4px] p-1 cursor-pointer w-1/2">
							<div className="relative w-8 h-8">
								<img
									src={display_picture_url}
									alt={display_picture_alt}
									className="min-h-8 min-w-8 rounded-full mr-1"
								/>
								<div
									title={is_online ? 'Online' : 'Offline'}
									className={`absolute bottom-0 right-[0px] w-3 h-3  rounded-full border-2 border-white ${
										is_online ? 'bg-[#23A55A]' : 'bg-gray-200'
									}`}
								></div>
							</div>
							<div className="flex flex-col py-1 px-2">
								<p className="text-sm group-hover:text-white capitalize truncate max-w-[100%]">
									{first_name}
								</p>
								<p className="text-xs group-hover:text-white capitalize">
									{is_online ? 'online' : 'offline'}
								</p>
							</div>
						</div>
						<div className="flex flex-row w-1/2 items-center justify-center">
							{micOn ? (
								<IoMdMic
									className="rounded-[4px] p-1 hover:bg-gray-400 w-[30%] cursor-pointer text-3xl"
									onClick={() => {
										setMicOn(false)
									}}
								/>
							) : (
								<IoMdMicOff
									className="rounded-[4px] p-1 hover:bg-gray-400 w-[30%] cursor-pointer text-3xl text-red-500"
									onClick={() => {
										setMicOn(true)
									}}
								/>
							)}
							{headphonesOn ? (
								<FiHeadphones
									className="rounded-[4px] p-1 hover:bg-gray-400 w-[30%] cursor-pointer text-3xl "
									onClick={() => {
										setHeadphonesOn(false)
									}}
								/>
							) : (
								<TbHeadphonesOff
									className="rounded-[4px] p-1 hover:bg-gray-400 w-[30%] cursor-pointer text-3xl text-red-500"
									onClick={() => {
										setHeadphonesOn(true)
									}}
								/>
							)}
							<IoSettingsSharp className="rounded-[4px] p-1 hover:bg-gray-400 w-[30%] cursor-pointer text-3xl" />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
