// @ts-nocheck
import { FP_Object } from 'shared/types/shared'

type TParam = string | number
export type TFormat = 'DMY' | 'MDY' | 'YDM' | 'YMD' | 'DYM' | 'MYD'
type TDateParams = {
	day: TParam
	month: TParam
	year: TParam
}

type TGetDateFormat =
	| {
			day?: TParam
			month?: TParam
			year?: TParam
			format?: TFormat
			nowDate?: never
	  }
	| {
			day?: never
			month?: never
			year?: never
			format?: TFormat
			nowDate?: boolean
	  }

export const dateFormatter: FP_Object<TGetDateFormat, string> = ({
	day,
	month,
	year,
	format,
	nowDate,
}): string => {
	const DAY_STR_LENGTH: number = 2
	const MONTH_STR_LENGTH: number = 2
	const YEAR_STR_LENGTH: number = 4

	const formatter: FP_Object<
		{ day: TParam; month: TParam; year: TParam; format: TFormat },
		string
	> = ({ day, format, month, year }) => {
		const currentFormat: string = format || 'DMY'
		return currentFormat
			.split('')
			.map(elem => {
				if (elem === 'D') return day
				if (elem === 'M') return month
				if (elem === 'Y') return year
			})
			.join('.')
	}
	const correctionOmissions: FP_Object<
		{ day: TParam; month: TParam; year: TParam },
		{ day: string; month: string; year: string }
	> = ({ day, month, year }) => {
		let dayStr: string = day.toString()
		let monthStr: string = month.toString()
		let yearStr: string = year.toString()

		if (dayStr.length < DAY_STR_LENGTH) dayStr = '0'.concat(dayStr)
		if (monthStr.length < MONTH_STR_LENGTH) monthStr = '0'.concat(monthStr)
		if (yearStr.length < YEAR_STR_LENGTH) {
			let yearResult: string = ''
			for (let index = YEAR_STR_LENGTH - yearStr.length; index > 0; index--) {
				yearResult += '0'
			}
			yearStr = yearResult.concat(yearStr)
		}
		return { day: dayStr, month: monthStr, year: yearStr }
	}

	if (nowDate) {
		let dayNow: string = new Date().getDate().toString()
		let monthNow: string = (new Date().getMonth() + 1).toString()
		let yearNow: string = new Date().getFullYear().toString()

		const correctionDate = correctionOmissions({
			day: dayNow,
			month: monthNow,
			year: yearNow,
		})
		return formatter({
			day: correctionDate.day,
			month: correctionDate.month,
			year: correctionDate.year,
			format,
		})
	}
	if (!nowDate) {
		const correctionDate = correctionOmissions({ day, month, year })
		return formatter({
			day: correctionDate.day,
			month: correctionDate.month,
			year: correctionDate.year,
			format,
		})
	}
}
