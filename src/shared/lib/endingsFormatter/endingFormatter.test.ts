import { endingsFormatter } from '.'

describe('endingFormatter lib testing', () => {
	const testingSingular = { word: 'ночь', num: 1 }
	const testingSingPlural = { word: 'ночи', num: 3 }
	const testingPlural = { word: 'ночей', num: 10 }

	test('testing word with singular num', () => {
		expect(
			endingsFormatter({
				itemQuantity: testingSingular.num,
				pluralEnding: testingPlural.word,
				singPluralEnding: testingSingPlural.word,
				singularEnding: testingSingular.word,
			})
		).toBe('ночь')
	})
	test('testing word with sing-plural num', () => {
		expect(
			endingsFormatter({
				itemQuantity: testingSingPlural.num,
				pluralEnding: testingPlural.word,
				singPluralEnding: testingSingPlural.word,
				singularEnding: testingSingular.word,
			})
		).toBe('ночи')
	})

	test('testing word with plural num', () => {
		expect(
			endingsFormatter({
				itemQuantity: testingPlural.num,
				pluralEnding: testingPlural.word,
				singPluralEnding: testingSingPlural.word,
				singularEnding: testingSingular.word,
			})
		).toBe('ночей')
	})
})
