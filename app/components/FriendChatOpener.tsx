import { MdOutlineClose } from 'react-icons/md'

export default function FriendChatOpener({ friend }: { friend: Friend }) {
	const { imageUrl, imageAlt, isOnline, name }: Friend = friend
	return (
		<div className="flex rounded-[4px] justify-between py-2 px-2 items-center group hover:bg-gray-300 cursor-pointer mx-2">
			<div className="relative">
				<img src={imageUrl} alt={imageAlt} className="h-8 w-8 rounded-full mr-4" />
				<div
					className={`absolute bottom-0 right-[7px] w-3 h-3  rounded-full border-2 border-white ${
						isOnline ? 'bg-green-500' : 'bg-red-600'
					}`}
				></div>
			</div>
			<p className="w-9/12 group-hover:text-white">{name}</p>
			<MdOutlineClose className="text-2xl hover:text-white" />
		</div>
	)
}
