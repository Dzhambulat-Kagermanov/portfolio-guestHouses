import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IHomeFormInputs {
	dateIn?: string
	dateOut?: string
	guests?: number
}
interface Props {
	formContext: any
	setValue: (change: keyof IHomeFormInputs | 'formContext', value: any) => void
}

export const useHomeFormData = create<Props & IHomeFormInputs>()(
	persist(
		(set, get) => ({
			formContext: undefined,
			setValue: (change, value) =>
				set(state => {
					return { [change]: value }
				}),
		}),
		{
			name: 'homeFormData',
			partialize: state =>
				Object.fromEntries(
					Object.entries(state).filter(
						([key]) => !['formContext'].includes(key)
					)
				),
		}
	)
)
