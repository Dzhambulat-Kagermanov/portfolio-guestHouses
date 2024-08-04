import { dateFormatter } from '@/shared/lib'
import { date, mail, name, phone } from '@/shared/utils/regexps'
import * as yup from 'yup'

export const validateSchema = yup.object().shape({
	dates: yup.object({
		dateIn: yup
			.string()
			.required('Введите дату въезда')
			.matches(date, 'Некорректная запись. Введите дату в формате 01.01.2022')
			.test({
				name: 'dateIn-valid-pastDate',
				message: 'Нельзя писать прошедшую дату',
				test: value => {
					let state = true
					const splitVal: string[] = value.split('.')
					const nowDateSplit: string[] = dateFormatter({ nowDate: true }).split(
						'.'
					)

					for (let index = nowDateSplit.length; index >= 0; index--) {
						const nowItem: string = nowDateSplit[index]
						if (nowItem > splitVal[index]) {
							state = !state
							break
						}
						if (nowItem < splitVal[index]) {
							break
						}
					}

					return state
				},
			})
			.test({
				name: 'dateOut-valid-inOutDiff',
				message: 'Дата въезда не может быть больше либо равна дате выезда',

				test: (value, context) => {
					let state = true
					const splitDateInVal: string[] = value.replace('-', '.').split('.')
					const splitDateOutVal: string[] = context.parent.dateOut
						.replace('-', '.')
						.split('.')

					for (let index = splitDateOutVal.length; index >= 0; index--) {
						const dateIn: string = splitDateInVal[index]
						const dateOut: string = splitDateOutVal[index]
						if (dateIn < dateOut) {
							state = false
							break
						}
						if (dateIn > dateOut) {
							break
						}
						if (index === 0 && dateIn === dateOut) {
							state = false
							break
						}
					}
				},
			}),
		dateOut: yup
			.string()
			.matches(date, 'Некорректная запись. Введите дату в формате 01.01.2022')
			.required('Введите дату выезда')
			.test({
				name: 'dateOut-valid-pastDate',
				message: 'Нельзя писать прошедшую дату',
				test: value => {
					let state = true
					const splitVal: string[] = value.split('.')
					const nowDateSplit: string[] = dateFormatter({ nowDate: true }).split(
						'.'
					)

					for (let index = nowDateSplit.length; index >= 0; index--) {
						const nowItem: string = nowDateSplit[index]
						if (nowItem > splitVal[index]) {
							state = !state
							break
						}
						if (nowItem < splitVal[index]) {
							break
						}
					}

					return state
				},
			})
			.test({
				name: 'dateOut-valid-inOutDiff',
				message: 'Дата выезда не может быть меньше либо равна дате въезда',

				test: (value, context) => {
					let state = true
					const splitDateInVal: string[] = context.parent.dateIn
						.replace('-', '.')
						.split('.')
					const splitDateOutVal: string[] = value.replace('-', '.').split('.')

					for (let index = splitDateInVal.length; index >= 0; index--) {
						const dateIn: string = splitDateInVal[index]
						const dateOut: string = splitDateOutVal[index]
						if (dateIn > dateOut) {
							state = false
							break
						}
						if (dateIn < dateOut) {
							break
						}
						if (index === 0 && dateIn === dateOut) {
							state = false
							break
						}
					}
				},
			}),
	}),
	guests: yup
		.number()
		.required('Укажите количество гостей')
		.test({
			name: 'guest-valid-interval',
			message: 'Минимальное количество гостей 1',
			test: val => {
				return val > 0
			},
		}),
	firstName: yup
		.string()
		.required('Введите имя')
		.matches(date, 'Некорректная запись. Введите только ваше имя'),
	secondName: yup
		.string()
		.required('Введите фамилию')
		.matches(date, 'Некорректная запись. Введите только вашу фамилию'),
	patronymic: yup.string().matches(date, 'Введите только ваше отчество'),
	email: yup
		.string()
		.required('Введите электронную почту')
		.matches(
			mail,
			'Некорректная запись. Введите почту в формате test@test.test'
		),
	services: yup.string().required('Выберите один из сервисов'),
})
