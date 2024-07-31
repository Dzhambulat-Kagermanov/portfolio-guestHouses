// Предисловие!!! Из моих наблюдений в Русском языке у слова может быть 3 вида окончаний. Это окончание в единственном числе, окончание для слова в исчислении от 2 до 4, и окончание для слова в исчислении от 5 до бесконечности. Что я имею ввиду? Например, слово "Ручка". В единственном числе будет "Ручка". В исчислении от 2 до 4 "Ручки" (две ручки, три ручки, четыре ручки). В исчислении от 5 до бесконечности будет "Ручек" (пять ручек, шесть ручек, семь ручек и т.д.).

import { TFuncObjParamResult } from '@/shared/types/shared'

// Данная функция параметром принимает объект содержащий следующие свойства:
// singPluralEnding - слово с окончанием в исчислении от 2 до 4
// pluralEnding - слово с окончанием в исчислении от 5 до бесконечности
// itemQuantity - количество предмета по которому будет выбираться singularEnding, singPluralEnding или pluralEnding. Если количество предмета равно меньше либо равно 1 то singularEnding вернётся в исходном виде.

type TEndingVariants = {
	singularEnding: string // окончание для слова в единственном числе
	singPluralEnding: string // окончание для слова в исчислении от 2 до 4
	pluralEnding: string // окончание для слова в исчислении от 5 до бесконечности
	itemQuantity: number // количество предмета по которому будет выбираться
}

export const endingsFormatter: TFuncObjParamResult<TEndingVariants, string> = ({
	itemQuantity,
	singularEnding,
	singPluralEnding,
	pluralEnding,
}) => {
	if (itemQuantity >= 2 && itemQuantity <= 4) return singPluralEnding
	if (itemQuantity >= 5) return pluralEnding
	return singularEnding
}
