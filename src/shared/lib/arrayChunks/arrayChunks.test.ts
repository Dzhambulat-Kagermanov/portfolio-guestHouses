import { arrayChunks } from '.'

describe('arrayChunks lib testing', () => {
	const testingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	test('slicing an array into subarrays of 5 elements', () => {
		expect(arrayChunks(testingArray, 5)).toEqual([
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
		])
	})

	test('slicing an array into subarrays of 3 elements', () => {
		expect(arrayChunks(testingArray, 3)).toEqual([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10],
		])
	})
})
