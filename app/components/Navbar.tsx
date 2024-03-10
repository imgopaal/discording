export default function Navbar() {
	const links: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<nav className="h-full w-[72px] bg-gray-100">
			<ul className="flex flex-col w-auto justify-center items-center">
				{links.map(link => {
					return (
						<li key={link} className="w-[48px] h-[48px] bg-gray-300 mt-2 rounded-full cursor-pointer"></li>
					)
				})}
			</ul>
		</nav>
	)
}
