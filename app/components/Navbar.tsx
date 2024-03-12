import { Link, useMatches } from '@remix-run/react'
import { pathChecker, servers } from '~/functions'
import DirectMessages from './DirectMessages'
export default function Navbar() {
	const matches = useMatches()
	return (
		<nav className="h-full min-w-[72px] bg-gray-100">
			<DirectMessages />
			<ul className="grid grid-cols-1 w-auto place-items-center max-h-svh overflow-x-scroll no-scrollbar gap-[8px]">
				{servers.map(server => {
					const { id, initials, imageUrl, notif }: Server = server
					const currentPath = pathChecker(id, matches)
					return (
						<div key={id} className="relative w-full">
							<Link
								to={`server/${id}`}
								className={`${currentPath ? `bg-primary rounded-[15px]` : `bg-gray-300 rounded-full`}
								peer max-w-[48px] m-auto min-w-[48px] min-h-[48px] cursor-pointer transition group ease-out ${
									imageUrl ? '' : `hover:bg-primary`
								} hover:rounded-[16px] duration-150 grid place-items-center text-white font-normal text-xl capitalize`}
							>
								{imageUrl ? (
									<img
										src={imageUrl}
										alt="server"
										className={`w-[48px] h-[48px] group-hover:rounded-[16px] rounded-full object-cover
										 ${currentPath ? `rounded-[16px]` : `rounded-full`}`}
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
				})}
			</ul>
		</nav>
	)
}
