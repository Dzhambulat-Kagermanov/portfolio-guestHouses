// Предисловие!!! Из моих наблюдений в Русском языке у слова может быть 3 вида окончаний. Это окончание в единственном числе, окончание для слова в исчислении от 2 до 4, и окончание для слова в исчислении от 5 до бесконечности. Что я имею ввиду? Например, слово "Ручка". В единственном числе будет "Ручка". В исчислении от 2 до 4 "Ручки" (две ручки, три ручки, четыре ручки). В исчислении от 5 до бесконечности или если кол-во предмета будет 0, то будет "Ручек" (пять ручек, шесть ручек, семь ручек и т.д.). Если ваше слово всегда в одной форме вне зависимости от исчисления то эта функция не понадобиться так как в любой из трёх форм слово будет одинаковым. Например слово "Пальто" (одно пальто, два пальто, пять пальто и т.д.)

import { TFuncObjParamResult } from '../../types/shared'

// Данная функция параметром принимает объект содержащий следующие свойства:
// singPluralEnding - слово с окончанием в исчислении от 2 до 4
// pluralEnding - слово с окончанием в исчислении от 5 до бесконечности или если кол-во предмета равно 0ё
// itemQuantity - количество предмета по которому будет выбираться singularEnding, singPluralEnding или pluralEnding. Если количество предмета равно 0 то вернётся значение pluralEnding. В остальных случаях singularEnding вернётся в исходном виде.

type TEndingVariants = {
	singularEnding: string // окончание для слова в единственном числе
	singPluralEnding: string // окончание для слова в исчислении от 2 до 4
	pluralEnding: string // окончание для слова в исчислении от 5 до бесконечности или если кол-во предмета равно 0
	itemQuantity: number // количество предмета по которому будет выбираться
}

export const endingsFormatter: TFuncObjParamResult<TEndingVariants, string> = ({
	itemQuantity,
	singularEnding,
	singPluralEnding,
	pluralEnding,
}) => {
	const lastNumber =
		+itemQuantity.toString()[itemQuantity.toString().length - 1]

	if (itemQuantity <= 1 || lastNumber === 1) {
		return singularEnding
	}

	if (
		itemQuantity >= 2 &&
		itemQuantity <= 4 &&
		lastNumber >= 2 &&
		lastNumber <= 4
	)
		return singPluralEnding
	if (itemQuantity >= 5 || itemQuantity === 0) return pluralEnding
	return singularEnding
}
