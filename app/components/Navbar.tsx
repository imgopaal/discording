import { servers } from '~/dummyData'
import DirectMessages from './DirectMessages'
import ServerOpener from './ServerOpener'
export default function Navbar() {
	return (
		<nav className="h-full min-w-[72px] bg-gray-100">
			<DirectMessages />
			<ul className="grid grid-cols-1 w-auto place-items-center max-h-svh overflow-x-scroll no-scrollbar gap-2 pb-2">
				{servers.map(server => (
					<ServerOpener key={server.id} server={server} />
				))}
			</ul>
		</nav>
	)
}
