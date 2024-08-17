import { date, mail, name, phone } from '@/shared/utils/regexps'
import moment from 'moment'
import * as yup from 'yup'

export const validateDateInValidation = (dateOutInpName: string) => {
	return yup
		.string()
		.required('Введите дату въезда')
		.matches(date, 'Введите дату въезда в формате дд.мм.гггг')
		.test({
			name: 'bookingForm-validation-dateInIsPast',
			message: 'Нельзя указывать прошедшую дату',
			test: val => {
				let res = true
				const splitVal = val.split('-')
				const nowDate = moment().format('YYYY.MM.DD').split('.')

				for (let i = 0; i < splitVal.length; i++) {
					const date = +splitVal[i].replace(/(?<=^|-)0+/, '')
					const dateNow = +nowDate[i].replace(/(?<=^|-)0+/, '')
					if (date < dateNow) {
						res = false
						break
					}
				}

				return res
			},
		})
		.test({
			name: 'bookingForm-validating-dateIn',
			test: (val, context) => {
				if (!date.test(context.parent[dateOutInpName])) {
					return context.createError({
						message: 'Введите дату выезда в формате дд.мм.гггг',
					})
				}
				if (val === context.parent[dateOutInpName]) {
					return context.createError({
						message: 'Дата въезда не может быть равна дате выезда',
					})
				}
				let res = true
				const splitDateIn = val.split('-')
				const splitDateOut = context.parent[dateOutInpName].split('-')

				for (let i = 0; i < splitDateIn.length; i++) {
					const dateIn = +splitDateIn[i].replace(/(?<=^|-)0+/, '')
					const dateOut = +splitDateOut[i].replace(/(?<=^|-)0+/, '')

					if (dateIn > dateOut) {
						return context.createError({
							message: 'Дата въезда не может быть больше даты выезда',
						})
					}
				}

				return res
			},
		})
}
export const validateDateOutValidation = (dateInInpName: string) => {
	return yup
		.string()
		.required('Введите дату выезда')
		.matches(date, 'Введите дату выезда в формате дд.мм.гггг')
		.test({
			name: 'bookingForm-validation-dateOutIsPast',
			message: 'Нельзя указывать прошедшую дату',
			test: val => {
				let res = true
				const splitVal = val.split('-')
				const nowDate = moment().format('YYYY.MM.DD').split('.')

				for (let i = 0; i < splitVal.length; i++) {
					const date = +splitVal[i].replace(/(?<=^|-)0+/, '')
					const dateNow = +nowDate[i].replace(/(?<=^|-)0+/, '')
					if (date < dateNow) {
						res = false
						break
					}
				}

				return res
			},
		})
		.test({
			name: 'bookingForm-validating-dateOut',
			test: (val, context) => {
				if (!date.test(context.parent[dateInInpName])) {
					return context.createError({
						message: 'Введите дату въезда в формате дд.мм.гггг',
					})
				}
				if (val === context.parent[dateInInpName]) {
					return context.createError({
						message: 'Дата выезда не может быть равна дате въезда',
					})
				}
				let res = true
				const splitDateIn = context.parent[dateInInpName].split('-')
				const splitDateOut = val.split('-')

				for (let i = 0; i < splitDateIn.length; i++) {
					const dateIn = +splitDateIn[i].replace(/(?<=^|-)0+/, '')
					const dateOut = +splitDateOut[i].replace(/(?<=^|-)0+/, '')

					if (dateIn > dateOut) {
						return context.createError({
							message: 'Дата выезда не может больше даты въезда',
						})
					}
				}

				return res
			},
		})
}
export const validateGuestsValidation = yup
	.number()
	.min(1, 'Минимальное количество гостей 1')
	.nullable()
	.required('Укажите количество гостей')
	.transform((_, originalValue) => {
		return originalValue === '' ? null : +originalValue
	})
	.typeError('Можно вводить только цифры')
export const validateFirstNameValidation = yup
	.string()
	.required('Введите имя')
	.matches(
		name,
		'Некорректная запись. Можно использовать только буквы. Минимальное кол-во букв 2'
	)
export const validateSecondNameValidation = yup
	.string()
	.required('Введите фамилию')
	.matches(
		name,
		'Некорректная запись. Можно использовать только буквы. Минимальное кол-во букв 2'
	)

export const validatePatronymicValidation = yup.string().test({
	name: 'guest-patronymic-match',
	message:
		'Некорректная запись. Можно использовать только буквы. Минимальное кол-во букв 2',
	test: val => {
		if (!!val) return name.test(val)
		return true
	},
})
export const validateEmailValidation = yup
	.string()
	.required('Введите электронную почту')
	.matches(mail, 'Некорректная запись. Введите почту в формате test@test.test')
export const validatePhoneValidation = yup
	.string()
	.required('Введите номер телефона')
	.matches(phone, 'Некорректная запись. Номер в формате +7 (000) 000 00-00')
export const validateServicesValidation = yup
	.string()
	.required('Выберите один из сервисов')
export const validateIsPayLaterValidation = yup.boolean()
export const validateAboutMeInfo = yup.string()
