import { pathValidating } from '.'

describe('pathValidating lib testing', () => {
	const testingActivePaths1 = ['/article', '/article/...']
	const testingActivePaths2 = '/home'
	const testingActivePaths3 = ['/products', '/products/?']

	const validatingPath1_1 = '/article'
	const validatingPath1_3 = '/article/news'
	const validatingPath1_2 = '/article/news/comments'
	const validatingPath1_4 = '/article/news/comments/details'

	const validatingPath2_1 = '/home'

	const validatingPath3_1 = '/products'
	const validatingPath3_2 = '/products/apple'
	const validatingPath3_3 = '/products/banana'

	test('testing activePaths1 for validatingPath1_1', () => {
		let state = false
		testingActivePaths1.forEach(path => {
			state = pathValidating(validatingPath1_1, path)
		})
		expect(state).toBe(true)
	})
	test('testing activePaths1 for validatingPath1_2', () => {
		let state = false
		testingActivePaths1.forEach(path => {
			state = pathValidating(validatingPath1_2, path)
		})
		expect(state).toBe(true)
	})
	test('testing activePaths1 for validatingPath1_3', () => {
		let state = false
		testingActivePaths1.forEach(path => {
			state = pathValidating(validatingPath1_3, path)
		})
		expect(state).toBe(true)
	})
	test('testing activePaths1 for validatingPath1_4', () => {
		let state = false
		testingActivePaths1.forEach(path => {
			state = pathValidating(validatingPath1_4, path)
		})
		expect(state).toBe(true)
	})

	test('testing activePaths2 for validatingPath1_2', () => {
		expect(pathValidating(validatingPath2_1, testingActivePaths2)).toBe(true)
	})

	test('testing activePaths3 for validatingPath3_1', () => {
		let state = false
		testingActivePaths3.forEach(path => {
			state = pathValidating(validatingPath3_1, path)
		})
		expect(state).toBe(true)
	})
	test('testing activePaths3 for validatingPath3_2', () => {
		let state = false
		testingActivePaths3.forEach(path => {
			state = pathValidating(validatingPath3_2, path)
		})
		expect(state).toBe(true)
	})
	test('testing activePaths3 for validatingPath3_3', () => {
		let state = false
		testingActivePaths3.forEach(path => {
			state = pathValidating(validatingPath3_3, path)
		})
		expect(state).toBe(true)
	})
})
