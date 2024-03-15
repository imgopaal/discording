// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pathChecker = (path: string | number, matches: any) => {
	const currentRoute = matches[matches.length - 1]
	return currentRoute.pathname.includes(path)
}
