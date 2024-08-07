import { create } from 'zustand'

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
}
interface IUseBookingFormData {
	formContext: any
	setValue: (change: keyof TBookingForm | 'formContext', value: any) => void
}

export const useBookingFormData = create<IUseBookingFormData & TBookingForm>(
	(set, get) => ({
		formContext: undefined,
		setValue: (change, value) =>
			set(state => ({
				[change]: value,
			})),
	})
)
