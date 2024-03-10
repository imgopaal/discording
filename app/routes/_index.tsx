import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return (
		<div>
			<div className="diff h-svh">
				<div className="diff-item-1">
					<div className="bg-primary text-primary-content text-4xl md:text-6xl lg:text-8xl font-black grid place-content-center">
						Discording
					</div>
				</div>
				<div className="diff-item-2">
					<div className="bg-base-200 text-4xl md:text-6xl lg:text-8xl font-black grid place-content-center">
						Discording
					</div>
				</div>
				<div className="diff-resizer"></div>
			</div>
			<footer className="footer footer-center p-4 bg-base-300 text-base-content absolute bottom-0 bg-transparent">
				<aside>
					<p className="drop-shadow-md sm:text-1xl md:text-2xl mix-blend-color-dodge">Under Development</p>
				</aside>
			</footer>
		</div>
	)
}
