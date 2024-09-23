export const pathValidating = (path: string, activePath: string): boolean => {
	let result = false
	const pathParts = path.substring(1).split('/')
	const activePathParts = activePath.substring(1).split('/')

	const loopStartLength =
		pathParts.length >= activePathParts.length
			? pathParts.length
			: activePathParts.length

	for (let i = 0; i < loopStartLength; i++) {
		const part = pathParts[i]
		const partValidating = activePathParts[i]

		if (partValidating === '?') {
			result = true
			continue
		}
		if (partValidating === '...') {
			result = true
			break
		}
		if (partValidating !== part) {
			result = false
			break
		}

		result = true
	}

	return result
}
