import { Link, useMatches } from '@remix-run/react'
import { pathChecker } from '~/functions'

function ServerOpener({ server }: { server: Server }) {
	const matches = useMatches()

	const { id, initials, imageUrl, notif }: Server = server
	const currentPath = pathChecker(id, matches)
	return (
		<div className="relative w-full">
			<Link
				to={`server/${id}`}
				className={`${currentPath ? `bg-primary rounded-[15px]` : `bg-gray-300 rounded-full`}
								peer max-w-[48px] m-auto min-w-[48px] min-h-[48px] cursor-pointer transition group ease-out ${
									imageUrl ? '' : `hover:bg-primary`
								} hover:rounded-[16px] grid place-items-center font-normal text-xl capitalize active:translate-y-[2px] active:shadow-md text-white transition-transform transform ease-in-out`}
			>
				{imageUrl ? (
					<img
						src={imageUrl}
						alt="server"
						className={`${currentPath ? `rounded-[14px]` : `rounded-full`} w-[48px] h-[48px] group-hover:rounded-[14px]  object-cover`}
					/>
				) : (
					initials
				)}
			</Link>
			<div
				className={`w-[7px] bg-white rounded-full absolute top-1/2 bottom-1/2 transform -translate-y-1/2 left-[-3px] peer-hover:h-[20px] transition-all ease-out ${
					currentPath ? `h-[40px] peer-hover:h-[40px]` : notif ? `h-2` : 'peer-hover:h-[20px] h-0'
				}`}
			></div>
		</div>
	)
}

export default ServerOpener
