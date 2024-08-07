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
	setValue: (change: keyof TBookingForm, value: any) => void
}

export const useBookingFormData = create<IUseBookingFormData & TBookingForm>(
	(set, get) => ({
		setValue: (change, value) =>
			set(state => ({
				[change]: value,
			})),
	})
)
