import { cn } from '.'
describe('cn lib testing', () => {
	const testingMainClass = 'main'
	const testingModeClasses = { active: true, hovered: false, focused: true }
	const testingAdditionalClasses = ['primary', 'inherited']

	test('testing only with first parameter', () => {
		expect(cn(testingMainClass)).toBe('main')
	})
	test('testing only with second parameter', () => {
		expect(cn('', testingAdditionalClasses)).toBe('primary inherited')
	})
	test('testing only with third parameter', () => {
		expect(cn('', [], testingModeClasses)).toBe('active focused')
	})
	test('testing only with first and second parameters', () => {
		expect(cn(testingMainClass, testingAdditionalClasses)).toBe(
			'main primary inherited'
		)
	})
	test('testing only with first and third parameter', () => {
		expect(cn(testingMainClass, [], testingModeClasses)).toBe(
			'main active focused'
		)
	})
	test('testing only with second and third parameters', () => {
		expect(cn('', testingAdditionalClasses, testingModeClasses)).toBe(
			'primary inherited active focused'
		)
	})
	test('testing with all parameters', () => {
		expect(
			cn(testingMainClass, testingAdditionalClasses, testingModeClasses)
		).toBe('main primary inherited active focused')
	})
})
