import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

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
	services?: string
	aboutMeInfo?: string
}
interface IUseBookingFormData {
	formContext: any
	setValue: (change: keyof TBookingForm | 'formContext', value: any) => void
	resetValues: () => void
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
					services: undefined,
					aboutMeInfo: undefined,
				})),
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
