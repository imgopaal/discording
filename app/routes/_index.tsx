import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return (
		<div className="diff h-screen">
			<div className="diff-item-1">
				<div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
					Discording
				</div>
			</div>
			<div className="diff-item-2">
				<div className="bg-base-200 text-9xl font-black grid place-content-center">Discording</div>
			</div>
			<div className="diff-resizer"></div>
		</div>
	)
}
