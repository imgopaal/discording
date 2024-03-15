import { Link, useMatches } from '@remix-run/react'
import { MdOutlineClose } from 'react-icons/md'
import { ROUTES } from '~/consts'
import { pathChecker } from '~/functions'

export default function FriendChatOpener({ friend }: { friend: Friend }) {
	const { id, display_picture_url, display_picture_alt, is_online, first_name, last_name }: Friend = friend
	const fullName = `${first_name} ${last_name}`
	const matches = useMatches()
	const isThisChatPage = pathChecker(ROUTES.DM, matches)
	const currentRoute = matches[matches.length - 1].params.id
	const chatActivated = currentRoute === id && isThisChatPage
	return (
		<Link to={`dm/${id}`}>
			<div
				className={`flex rounded-[4px] justify-between py-[5px] px-2 items-center group hover:bg-gray-300 cursor-pointer mx-2 ${
					chatActivated ? 'bg-gray-400 hover:bg-gray-400 text-white' : 'bg-inherit'
				}`}
			>
				<div className="relative">
					<img src={display_picture_url} alt={display_picture_alt} className="h-8 w-8 rounded-full mr-4" />
					<div
						title={is_online ? 'Online' : 'Offline'}
						className={`absolute bottom-0 right-[7px] w-3 h-3  rounded-full border-2 border-white ${
							is_online ? 'bg-[#23A55A]' : 'bg-gray-200'
						}`}
					></div>
				</div>
				<p className="w-[70%] group-hover:text-white truncate capitalize">{fullName}</p>
				<MdOutlineClose className="text-2xl hover:text-white" />
			</div>
		</Link>
	)
}
