export const arrayChunks = <Array>(array: Array[], chunkSize: number) => {
	const subarray: unknown[] = []
	for (let i = 0; i < Math.ceil(array.length / chunkSize); i++) {
		subarray[i] = array.slice(i * chunkSize, i * chunkSize + chunkSize)
	}
	return subarray
}
