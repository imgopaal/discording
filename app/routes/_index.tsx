import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { useState } from 'react'

export const meta: MetaFunction = () => {
	return [{ title: 'Discording' }, { name: 'An Amazing Discord Clone', content: 'Welcome to Discording' }]
}

export default function Index() {
	const [loading, setLoading] = useState(false)
	return (
		<div>
			<div className="diff h-svh">
				<div className="bg-primary flex flex-col justify-center">
					<div className="text-center self-center w-screen text-primary-content text-4xl md:text-6xl lg:text-8xl font-black grid place-content-center">
						Discording
					</div>
					<div className="mx-auto">
						<Link to={'/app/dm'}>
							<button
								className='btn no-animation btn-primary bg-white min-w-[140px] w-auto rounded-full mt-6 hover:bg-slate-200'
								onClick={() => setLoading(true)}
								disabled={loading}
							>
								{loading ? <span className="loading loading-spinner"></span> : 'Open Discording'}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
