import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return (
		<div>
			<div className="diff h-svh">
				<div className="bg-primary flex flex-col justify-center">
					<div className="text-center self-center w-screen text-primary-content text-4xl md:text-6xl lg:text-8xl font-black grid place-content-center">
						Discording
					</div>
					<div className="mx-auto">
						<Link to={'/app'}>
							<button className="btn btn-primary bg-white w-auto rounded-full mt-6 hover:bg-slate-200">
								Open Discording
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
