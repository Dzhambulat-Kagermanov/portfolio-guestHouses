import { IRoomsCardAllData, TService } from '@/shared/types'
import moment from 'moment'
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
	slug?: Pick<IRoomsCardAllData, 'slug'>
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
					slug: undefined,
				})),
			getNightsQnt: () => {
				const dateIn = get().dateIn
				const dateOut = get().dateOut
				if (dateIn && dateOut) {
					const secondsDateIn = moment(dateIn, 'YYYY-MM-DD')
					const secondsDateOut = moment(dateOut, 'YYYY-MM-DD')

					return (secondsDateOut.unix() - secondsDateIn.unix()) / 60 / 60 / 24
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
