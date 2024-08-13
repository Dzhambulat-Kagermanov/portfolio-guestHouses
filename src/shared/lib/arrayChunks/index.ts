export const arrayChunks = (array: any[], chunkSize: number) => {
	const subarray = []
	for (let i = 0; i < Math.ceil(array.length / chunkSize); i++) {
		subarray[i] = array.slice(i * chunkSize, i * chunkSize + chunkSize)
	}
	return subarray
}
