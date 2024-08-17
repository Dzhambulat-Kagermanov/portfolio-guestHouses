export const pathValidating = (
	path: string,
	pathValidating: string
): boolean => {
	let result = false
	const pathParts = path.substring(1).split('/')
	const pathValidatingParts = pathValidating.substring(1).split('/')

	const loopStartLength =
		pathParts.length >= pathValidatingParts.length
			? pathParts.length
			: pathValidatingParts.length

	for (let i = 0; i < loopStartLength; i++) {
		const part = pathParts[i]
		const partValidating = pathValidatingParts[i]

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
