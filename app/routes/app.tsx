import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'

export default function Home() {
	return (
		<div className="h-svh w-full flex flex-1 bg-gray-300">
			<Navbar />
			<Sidebar />
		</div>
	)
}
