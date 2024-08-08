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
interface IUseBookingFormData {
	formContext: any
	setValue: (change: keyof TBookingForm | 'formContext', value: any) => void
	resetValues: () => void
	getNightsQnt: () => number
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

					console.log(secondsDateIn)
					console.log(secondsDateOut)
					console.log(secondsDateOut - secondsDateIn)

					return new Date((secondsDateOut - secondsDateIn) * 1000).getDate() - 1
				}
				return NaN
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
