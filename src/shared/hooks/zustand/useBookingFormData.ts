import { dateFormatter } from '@/shared/lib'
import { TService } from '@/shared/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TBookingForm = {
	dateIn?: string
	dateOut?: string
	email?: string
	firstName?: string
	secondName?: string
	patronymic?: string
	phone?: string
	guests?: number
	isPayLater?: boolean
	selectedService?: string
	aboutMeInfo?: string
	nightsQnt?: number
	title?: string
	currentService?: TService
}
const currentServiceTemplate: TService = {
	price: { withoutTaxes: 0, withTaxes: 0 },
	title: '',
}
interface IUseBookingFormData {
	formContext: any
	setValue: (change: keyof TBookingForm | 'formContext', value: any) => void
	resetValues: () => void
	getNightsQnt: () => number
	getPrice: () => typeof currentServiceTemplate.price | undefined
}

export const useBookingFormData = create<IUseBookingFormData & TBookingForm>()(
	persist(
		(set, get) => ({
			formContext: undefined,
			setValue: (change, value) =>
				set(state => ({
					[change]: value,
				})),
			resetValues: () =>
				set(state => ({
					dateIn: undefined,
					dateOut: undefined,
					email: undefined,
					firstName: undefined,
					formContext: undefined,
					guests: undefined,
					isPayLater: undefined,
					patronymic: undefined,
					phone: undefined,
					secondName: undefined,
					selectedService: undefined,
					aboutMeInfo: undefined,
					currentService: undefined,
					nightsQnt: undefined,
					title: undefined,
				})),
			getNightsQnt: () => {
				if (get().dateIn && get().dateOut) {
					const splitDateIn = get().dateIn?.split('-')
					const splitDateOut = get().dateOut?.split('-')

					const secondsDateIn = Date.parse(
						dateFormatter({
							// @ts-ignore
							day: splitDateIn[0],
							// @ts-ignore
							month: splitDateIn[1],
							// @ts-ignore
							year: splitDateIn[2],
							format: 'YMD',
						})
					)
					const secondsDateOut = Date.parse(
						dateFormatter({
							// @ts-ignore
							day: splitDateOut[0],
							// @ts-ignore
							month: splitDateOut[1],
							// @ts-ignore
							year: splitDateOut[2],
							format: 'YMD',
						})
					)

					return new Date((secondsDateOut - secondsDateIn) * 1000).getDate() - 1
				}
				return NaN
			},
			getPrice: () => {
				const withTaxes = get().currentService?.price.withTaxes
				const withoutTaxes = get().currentService?.price.withoutTaxes
				if (withTaxes && withoutTaxes) {
					return { withoutTaxes: withoutTaxes, withTaxes: withTaxes }
				}
				return undefined
			},
		}),
		{
			name: 'bookingFormData',
			partialize: state =>
				Object.fromEntries(
					Object.entries(state).filter(
						([key]) => !['formContext'].includes(key)
					)
				),
		}
	)
)
