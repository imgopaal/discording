import { Link, useMatches } from '@remix-run/react'
import { FaDiscord } from 'react-icons/fa6'
import { pathChecker } from '~/functions'

function DirectMessages() {
	const matches = useMatches()
	const currentPath = pathChecker('dm', matches)
	return (
		<div className="relative">
			<Link to={'dm'}>
				<li
					className={`${currentPath ? `bg-primary rounded-[15px]` : `bg-gray-300 rounded-full`}
                max-w-[48px] m-auto  min-w-[48px] min-h-[48px] peer mt-3 cursor-pointer transition  hover:bg-primary hover:rounded-[15px] duration-150 grid place-items-center text-white font-normal text-xl capitalize
				active:translate-y-[2px] active:shadow-md transform ease-in-out
				`}
				>
					<FaDiscord className="text-3xl" />
				</li>
				<div className="divider mr-auto ml-auto my-1 w-[48%] border-gray-300 rounded-full"></div>
				<div
					className={`w-[7px] bg-white rounded-full absolute top-[calc(50%-10px)] bottom-1/2 transform -translate-y-1/2 left-[-3px] peer-hover:h-[20px] transition-all ease-out ${
						currentPath ? `h-[40px] peer-hover:h-[40px]` : 'peer-hover:h-[20px] h-0'
					}`}
				></div>
			</Link>
		</div>
	)
}

export default DirectMessages
