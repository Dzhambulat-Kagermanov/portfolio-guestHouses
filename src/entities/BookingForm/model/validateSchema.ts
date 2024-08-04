import { dateFormatter } from '@/shared/lib'
import { date, mail, name, phone } from '@/shared/utils/regexps'
import * as yup from 'yup'

export const validateSchema = yup.object().shape({
	'booking-dateIn': yup
		.string()
		.required('Введите дату въезда')
		.matches(date, 'Введите дату въезда в формате дд.мм.гггг')
		.test({
			name: 'bookingForm-validation-dateInIsPast',
			message: 'Нельзя указывать прошедшую дату',
			test: val => {
				let res = true
				const splitVal = val.split('-')
				const nowDate = dateFormatter({ nowDate: true, format: 'YMD' }).split(
					'.'
				)

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
				if (!date.test(context.parent['booking-dateOut'])) {
					return context.createError({
						message: 'Введите дату выезда в формате дд.мм.гггг',
					})
					return false
				}
				if (val === context.parent['booking-dateOut']) {
					return context.createError({
						message: 'Дата въезда не может быть равна дате выезда',
					})
				}
				let res = true
				const splitDateIn = val.split('-')
				const splitDateOut = context.parent['booking-dateOut'].split('-')

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
		}),

	'booking-dateOut': yup
		.string()
		.required('Введите дату выезда')
		.matches(date, 'Введите дату выезда в формате дд.мм.гггг')
		.test({
			name: 'bookingForm-validation-dateOutIsPast',
			message: 'Нельзя указывать прошедшую дату',
			test: val => {
				let res = true
				const splitVal = val.split('-')
				const nowDate = dateFormatter({ nowDate: true, format: 'YMD' }).split(
					'.'
				)

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
				if (!date.test(context.parent['booking-dateIn'])) {
					return context.createError({
						message: 'Введите дату въезда в формате дд.мм.гггг',
					})
				}
				if (val === context.parent['booking-dateIn']) {
					return context.createError({
						message: 'Дата выезда не может быть равна дате въезда',
					})
				}
				let res = true
				const splitDateIn = context.parent['booking-dateIn'].split('-')
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
		}),
	'booking-guests': yup
		.string()
		.required('Укажите количество гостей')
		.test({
			name: 'guest-valid-value',
			message: 'Некорректная запись. Вводите только числа',
			test: val => {
				return Number.isInteger(+val)
			},
		})
		.test({
			name: 'guest-valid-interval',
			message: 'Минимальное количество гостей 1',
			test: val => {
				return +val > 0
			},
		}),
	'booking-firstName': yup
		.string()
		.required('Введите имя')
		.matches(name, 'Некорректная запись. Минимальное кол-во букв 2'),
	'booking-secondName': yup
		.string()
		.required('Введите фамилию')
		.matches(name, 'Некорректная запись. Минимальное кол-во букв 2'),
	'booking-patronymic': yup.string().test({
		name: 'guest-patronymic-match',
		message: 'Некорректная запись. Минимальное кол-во букв 2',
		test: val => {
			if (!!val) return name.test(val)
			return true
		},
	}),
	'booking-email': yup
		.string()
		.required('Введите электронную почту')
		.matches(
			mail,
			'Некорректная запись. Введите почту в формате test@test.test'
		),
	'booking-phone': yup
		.string()
		.required('Введите номер телефона')
		.matches(phone, 'Некорректная запись. Номер в формате +7 (000) 000 00-00'),
	'booking-services': yup.string().required('Выберите один из сервисов'),
})
