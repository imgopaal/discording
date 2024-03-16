import { LoaderFunction } from '@remix-run/node'
import { ReactSVG } from 'react-svg'
import Messages from '~/components/Messages'
import { messages } from '~/dummyData'
import { Add, AddFriend, Call, Emoji, Gif, Gift, Help, Inbox, Pin, Stickers, UserProfile, VideoCall } from '~/icons'

export const loader: LoaderFunction = async () => {
	return null
}

function ChatBox() {
	const imageUrl = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1102.jpg'
	const imageAlt = 'fds'
	const isOnline = true
	const name = 'temporary name'

	function authGrow(element: HTMLTextAreaElement) {
		element.style.height = '5px'
		element.style.height = element.scrollHeight + 'px'
	}
	
	const chatInputIcons = [Gift, Gif, Stickers, Emoji]

	const chatHeaderIcons = [
		{
			id: 0,
			icon: Call,
			tooltip: 'Start Voice Call',
		},
		{
			id: 1,
			icon: VideoCall,
			tooltip: 'Start Video Call',
		},
		{
			id: 2,
			icon: Pin,
			tooltip: 'Pinned Messages',
		},
		{
			id: 3,
			icon: AddFriend,
			tooltip: 'Add Friends to DM',
		},
		{
			id: 4,
			icon: UserProfile,
			tooltip: 'Show User Profile',
		},
	]

	const chatHeaderIconsLastTwo = [
		{
			id: 0,
			icon: Inbox,
			tooltip: 'Inbox',
		},
		{
			id: 1,
			icon: Help,
			tooltip: 'Help',
		},
	]

	return (
		<div className="h-full w-[calc(100vw-312px)] relative">
			<div className="border-gray-500 border-b-[1px] flex flex-row justify-between py-[7px] px-[10px] text-white">
				<div
					className={`flex rounded-[4px] justify-between items-center group hover:bg-gray-300 cursor-pointer w-[200px]`}
				>
					<div className="relative">
						<img src={imageUrl} alt={imageAlt} className="h-6 w-6 rounded-full mr-4" />
						<div
							title={isOnline ? 'Online' : 'Offline'}
							className={`absolute bottom-0 right-[10px] w-2 h-2  rounded-full border-2 border-white ${
								isOnline ? 'bg-[#23A55A]' : 'bg-gray-200'
							}`}
						></div>
					</div>
					<p className="w-9/12 group-hover:text-white capitalize truncate">{name}</p>
				</div>
				<div className="flex flex-row items-center">
					{chatHeaderIcons.map(({ id, icon, tooltip }) => {
						return (
							<div
								key={id}
								className="tooltip tooltip-bottom before:bg-black before:text-white cursor-pointer mx-[8px] group"
								data-tip={tooltip}
							>
								<ReactSVG src={icon} className="text-2xl text-gray-700 group-hover:text-text-300" />
							</div>
						)
					})}
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label className="max-h-[2rem] input input-bordered flex items-center gap-2 mx-2 w-[144px] rounded-[4px] p-2 bg-gray-100  focus-within:outline-none focus-within:w-[240px]">
						<input
							type="text"
							className="rounded-[2px] px-[.1rem] grow  input-sminput input-bordered input-xs w-full max-w-xs bg-gray-100 placeholder:text-text-200 placeholder:text-[14px]"
							placeholder="Search"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-5 h-5 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>{' '}
					{chatHeaderIconsLastTwo.map(({ id, icon, tooltip }) => {
						return (
							<div
								key={id}
								className="tooltip tooltip-bottom before:bg-black before:text-white cursor-pointer mx-[8px] group"
								data-tip={tooltip}
							>
								<ReactSVG src={icon} className="text-2xl text-gray-700 group-hover:text-text-300" />
							</div>
						)
					})}
				</div>
			</div>
			{/* Messages */}
			<div className="relative p-0 m-0 overflow-hidden h-[calc(100% - 330px)]">
				<Messages messages={messages} />
			</div>
			{/* Message Input */}
			<div className="absolute bottom-6 p-4 pb-0 w-full">
				<div className="flex flex-row items-start rounded-[8px] bg-gray-800">
					<ReactSVG
						src={Add}
						className="text-3xl text-gray-700 my-[10px] mx-4 hover:text-text-300 cursor-pointer"
					/>
					<textarea
						className="resize-none max-h-[370px] leading-7 overflow-scroll no-scrollbar rows-1 bg-transparent textarea textarea-bordered w-full h-[10px] focus:outline-none text-text-300  placeholder:text-placeholder-100 text-[16px] border-0 outline-none pl-0"
						placeholder="Message @Temporary Name"
						onInput={e => {
							authGrow(e.target)
						}}
					/>
					<div className="grid place-items-center gap-6 grid-cols-4 my-[10px] last:mr-6 ">
						{chatInputIcons.map((icon, index) => {
							return (
								<ReactSVG
									key={index}
									src={icon}
									className="cursor-pointer text-3xl text-gray-700 hover:text-text-300"
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatBox
